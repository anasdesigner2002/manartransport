import type { IncomingMessage, ServerResponse } from "node:http";

type CityKey = "makkah" | "madinah";

type CityConfig = {
  name: string;
  latitude: number;
  longitude: number;
  fallbackWeather: CityResponse["weather"];
  destinations: Array<{ name: string; description: string }>;
};

type CityResponse = {
  city: CityKey;
  date: { gregorian: string; hijri: string };
  timings: Record<string, string>;
  weather: {
    temperature: number;
    humidity: number;
    wind: number;
    code: number;
    high: number;
    low: number;
  };
  destinations: Array<{ name: string; description: string }>;
};

type CacheEntry = { expiresAt: number; data: CityResponse };

const CACHE_TTL_MS = 10 * 60 * 1000;
const cityCache = new Map<string, CacheEntry>();

const cities: Record<CityKey, CityConfig> = {
  makkah: {
    name: "Makkah",
    latitude: 21.4225,
    longitude: 39.8262,
    fallbackWeather: { temperature: 34, humidity: 32, wind: 12, code: 1, high: 36, low: 27 },
    destinations: [
      { name: "Jabal an-Nour & Cave of Hira", description: "The historic mountain associated with the first revelation." },
      { name: "Jabal Thawr & Cave Thawr", description: "A sacred site connected with the Prophet's migration." },
      { name: "Mount Arafat (Jabal al-Rahmah)", description: "The plain of Arafat, central to the Hajj rites." },
      { name: "Mina & Muzdalifah", description: "Sacred sites used during the days of Hajj." },
      { name: "Masjid Aisha (Taneem)", description: "A popular miqat boundary for entering Ihram for Umrah." },
    ],
  },
  madinah: {
    name: "Madinah",
    latitude: 24.4672,
    longitude: 39.6112,
    fallbackWeather: { temperature: 31, humidity: 28, wind: 14, code: 1, high: 34, low: 24 },
    destinations: [
      { name: "Masjid Quba", description: "The first mosque built in Islamic history." },
      { name: "Mount Uhud & Martyrs Graveyard", description: "A historic site north of the city." },
      { name: "Masjid al-Qiblatayn", description: "The mosque of the two qiblas." },
      { name: "Seven Mosques (Saba Masajid)", description: "Historic mosques around the site of the Battle of the Trench." },
      { name: "Date Farms of Madinah", description: "Experience authentic agriculture and local gardens." },
    ],
  },
};

function requestParams(request: IncomingMessage) {
  return new URL(request.url || "/", "http://localhost").searchParams;
}

function getSaudiDate() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Riyadh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts();
  const day = parts.find(part => part.type === "day")?.value;
  const month = parts.find(part => part.type === "month")?.value;
  const year = parts.find(part => part.type === "year")?.value;
  if (!day || !month || !year) throw new Error("Unable to determine the Saudi local date.");
  return { apiDate: `${day}-${month}-${year}`, cacheDate: `${year}-${month}-${day}` };
}

async function loadCityData(cityKey: CityKey): Promise<CityResponse> {
  const { apiDate, cacheDate } = getSaudiDate();
  const cacheKey = `${cityKey}:${cacheDate}`;
  const cached = cityCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.data;

  const city = cities[cityKey];
  const calendarUrl = `https://api.aladhan.com/v1/timings/${apiDate}?latitude=${city.latitude}&longitude=${city.longitude}&method=4`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=1`;
  const [calendarResult, weatherResult] = await Promise.allSettled([
    fetch(calendarUrl, { headers: { Accept: "application/json", "User-Agent": "ManarTransport/1.0" } }),
    fetch(weatherUrl, { headers: { Accept: "application/json", "User-Agent": "ManarTransport/1.0" } }),
  ]);

  if (calendarResult.status !== "fulfilled" || !calendarResult.value.ok) {
    throw new Error("Live prayer times are temporarily unavailable.");
  }
  const weatherResponse = weatherResult.status === "fulfilled" && weatherResult.value.ok ? weatherResult.value : undefined;
  const calendar = await calendarResult.value.json() as {
    data?: {
      timings?: Record<string, string>;
      date?: { readable?: string; hijri?: { date?: string } };
    };
  };
  const calendarData = calendar.data;
  if (!calendarData?.timings) throw new Error("The prayer-time service returned no schedule.");
  const weather = weatherResponse ? await weatherResponse.json() as {
    current?: { temperature_2m?: number; relative_humidity_2m?: number; weather_code?: number; wind_speed_10m?: number };
    daily?: { temperature_2m_max?: number[]; temperature_2m_min?: number[] };
  } : undefined;
  const data: CityResponse = {
    city: cityKey,
    date: {
      gregorian: calendarData.date?.readable || apiDate,
      hijri: calendarData.date?.hijri?.date || "",
    },
    timings: calendarData.timings,
    weather: {
      temperature: weather?.current?.temperature_2m ?? city.fallbackWeather.temperature,
      humidity: weather?.current?.relative_humidity_2m ?? city.fallbackWeather.humidity,
      wind: weather?.current?.wind_speed_10m ?? city.fallbackWeather.wind,
      code: weather?.current?.weather_code ?? city.fallbackWeather.code,
      high: weather?.daily?.temperature_2m_max?.[0] ?? city.fallbackWeather.high,
      low: weather?.daily?.temperature_2m_min?.[0] ?? city.fallbackWeather.low,
    },
    destinations: city.destinations,
  };

  cityCache.set(cacheKey, { expiresAt: Date.now() + CACHE_TTL_MS, data });
  return data;
}

export async function handleHolyCityData(request: IncomingMessage, response: ServerResponse) {
  const requestedCity = requestParams(request).get("city");
  if (requestedCity !== "makkah" && requestedCity !== "madinah") {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Use city=makkah or city=madinah" }));
    return;
  }

  try {
    const data = await loadCityData(requestedCity);
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=60" });
    response.end(JSON.stringify(data));
  } catch (error) {
    response.writeHead(502, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error instanceof Error ? error.message : "Live city data is unavailable." }));
  }
}
