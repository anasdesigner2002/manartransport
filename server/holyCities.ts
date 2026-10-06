import type { IncomingMessage, ServerResponse } from "node:http";

type CityKey = "makkah" | "madinah";

type CityConfig = {
  name: string;
  latitude: number;
  longitude: number;
  fallbackTimings: Record<string, string>;
  fallbackWeather: CityResponse["weather"];
  destinations: Array<{ name: string; description: string }>;
};

type CityResponse = {
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
const cityCache = new Map<CityKey, CacheEntry>();

const cities: Record<CityKey, CityConfig> = {
  makkah: {
    name: "Makkah",
    latitude: 21.4225,
    longitude: 39.8262,
    fallbackTimings: { Fajr: "04:54", Sunrise: "06:10", Dhuhr: "12:12", Asr: "15:36", Maghrib: "18:14", Isha: "19:44" },
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
    fallbackTimings: { Fajr: "05:04", Sunrise: "06:22", Dhuhr: "12:24", Asr: "15:49", Maghrib: "18:24", Isha: "19:54" },
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

async function loadCityData(cityKey: CityKey): Promise<CityResponse> {
  const cached = cityCache.get(cityKey);
  if (cached && cached.expiresAt > Date.now()) return cached.data;

  const city = cities[cityKey];
  const calendarUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city.name}&country=Saudi%20Arabia`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=1`;
  const [calendarResult, weatherResult] = await Promise.allSettled([
    fetch(calendarUrl, { headers: { Accept: "application/json", "User-Agent": "ManarTransport/1.0" } }),
    fetch(weatherUrl, { headers: { Accept: "application/json", "User-Agent": "ManarTransport/1.0" } }),
  ]);

  const calendarResponse = calendarResult.status === "fulfilled" && calendarResult.value.ok ? calendarResult.value : undefined;
  const weatherResponse = weatherResult.status === "fulfilled" && weatherResult.value.ok ? weatherResult.value : undefined;
  const calendar = calendarResponse ? (await calendarResponse.json()) as { data?: { timings?: Record<string, string> } } : undefined;
  const weather = weatherResponse ? await weatherResponse.json() as {
    current?: { temperature_2m?: number; relative_humidity_2m?: number; weather_code?: number; wind_speed_10m?: number };
    daily?: { temperature_2m_max?: number[]; temperature_2m_min?: number[] };
  } : undefined;
  const data: CityResponse = {
    timings: calendar?.data?.timings || city.fallbackTimings,
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

  cityCache.set(cityKey, { expiresAt: Date.now() + CACHE_TTL_MS, data });
  return data;
}

export async function handleHolyCityData(request: IncomingMessage, response: ServerResponse) {
  const city = requestParams(request).get("city") as CityKey | null;
  if (!city || !cities[city]) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Use city=makkah or city=madinah" }));
    return;
  }

  try {
    const data = await loadCityData(city);
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=600" });
    response.end(JSON.stringify(data));
  } catch (error) {
    response.writeHead(502, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error instanceof Error ? error.message : "Live city data is unavailable." }));
  }
}
