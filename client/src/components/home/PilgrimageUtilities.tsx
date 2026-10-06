import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faLocationDot, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { imageSources } from "@/data/siteData";

type CityKey = "makkah" | "madinah";

type CityConfig = {
  key: CityKey;
  name: string;
  arabicName: string;
  latitude: number;
  longitude: number;
  image: string;
};

type CityData = {
  city?: CityKey;
  date?: { gregorian?: string; hijri?: string };
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

const cities: CityConfig[] = [
  { key: "makkah", name: "Makkah Al-Mukarramah", arabicName: "Makkah", latitude: 21.4225, longitude: 39.8262, image: imageSources.makkah },
  { key: "madinah", name: "Madinah Al-Munawwarah", arabicName: "Madinah", latitude: 24.4672, longitude: 39.6112, image: imageSources.madinah },
];

const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

function formatPrayerTime(value?: string) {
  if (!value) return "--:--";
  const [hours, minutes] = value.replace(/\s*\(.+?\)/, "").split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return value;
  const suffix = hours >= 12 ? "PM" : "AM";
  const twelveHour = hours % 12 || 12;
  return `${String(twelveHour).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function weatherLabel(code: number) {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Hazy conditions";
  if (code <= 67) return "Light rain";
  if (code <= 82) return "Rain showers";
  return "Changing conditions";
}

function formatClock(date: Date) {
  return new Intl.DateTimeFormat("en-SA", {
    timeZone: "Asia/Riyadh",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function formatLocalDate(date: Date) {
  return new Intl.DateTimeFormat("en-SA", {
    timeZone: "Asia/Riyadh",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

async function loadCityData(city: CityConfig): Promise<CityData> {
  const response = await fetch(`/api/holy-cities?city=${city.key}&version=2`, { cache: "no-store" });
  if (!response.ok) throw new Error("Live city data is temporarily unavailable.");
  const data = await response.json() as CityData;
  const requiredPrayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  if (
    (data.city !== undefined && data.city !== city.key) ||
    !data.timings ||
    requiredPrayerNames.some(name => typeof data.timings[name] !== "string")
  ) {
    throw new Error(`Live prayer schedule for ${city.name} is invalid.`);
  }
  return data;
}

export default function PilgrimageUtilities() {
  const [selectedCity, setSelectedCity] = useState<CityKey>("makkah");
  const [cityData, setCityData] = useState<Partial<Record<CityKey, CityData>>>({});
  const [errors, setErrors] = useState<Partial<Record<CityKey, string>>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [now, setNow] = useState(() => new Date());
  const activeCity = cities.find(city => city.key === selectedCity) || cities[0];
  const activeData = cityData[selectedCity];

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let isActive = true;
    setIsLoading(true);
    Promise.all(cities.map(async city => {
      try {
        const data = await loadCityData(city);
        return { city, data };
      } catch (error) {
        return { city, error: error instanceof Error ? error.message : "Live data is unavailable." };
      }
    })).then(results => {
      if (!isActive) return;
      const nextData: Partial<Record<CityKey, CityData>> = {};
      const nextErrors: Partial<Record<CityKey, string>> = {};
      results.forEach(result => {
        if (result.data) nextData[result.city.key] = result.data;
        if (result.error) nextErrors[result.city.key] = result.error;
      });
      setCityData(nextData);
      setErrors(nextErrors);
      setIsLoading(false);
    });
    return () => { isActive = false; };
  }, []);

  const prayerRows = useMemo(() => prayerNames.map((name, index) => ({
    name,
    time: formatPrayerTime(activeData?.timings[name]),
    icon: index === 0 || index === 5 ? faMoon : index === 1 || index === 4 ? faSun : faCloudSun,
  })), [activeData]);

  return <section className="pilgrimage-utilities section section--soft">
    <div className="container">
      <div className="pilgrimage-utilities__heading">
        <span className="eyebrow eyebrow--gold">Pilgrimage utilities &amp; guides</span>
        <h2>Holy Cities <em>Information &amp; Ziyarat Guide</em></h2>
        <p>Live prayer schedules, local weather, and practical details for journeys through Makkah and Madinah.</p>
      </div>
      <div className="pilgrimage-utilities__cities" role="tablist" aria-label="Choose a holy city">
        {cities.map(city => <button key={city.key} className={`pilgrimage-city ${selectedCity === city.key ? "is-active" : ""}`} onClick={() => setSelectedCity(city.key)} role="tab" aria-selected={selectedCity === city.key}>
          <span className="pilgrimage-city__image" style={{ backgroundImage: `url(${city.image})` }} />
          <span><strong>{city.name}</strong><small><FontAwesomeIcon icon={faLocationDot} /> Live local details</small></span>
        </button>)}
      </div>
      <div className="pilgrimage-utilities__panel" role="tabpanel">
        <div className="pilgrimage-utilities__panel-head">
          <div><span className="eyebrow">{activeCity.name}</span><h3>Prayer &amp; local conditions</h3>{activeData && <small className="pilgrimage-schedule-date">Prayer schedule: {activeData.date?.gregorian || formatLocalDate(now)}{activeData.date?.hijri ? ` · Hijri ${activeData.date.hijri}` : ""}</small>}</div>
          <div className="pilgrimage-clock"><span>Saudi local date &amp; time</span><strong>{formatClock(now)}</strong><small>{formatLocalDate(now)}</small></div>
        </div>
        {isLoading ? <div className="pilgrimage-utilities__status">Loading live city details...</div> : errors[selectedCity] && !activeData ? <div className="pilgrimage-utilities__status">{errors[selectedCity]}</div> : <>
          <div className="pilgrimage-utilities__grid">
          <div className="pilgrimage-prayers"><div className="pilgrimage-block-label"><FontAwesomeIcon icon={faMoon} /> Prayer schedule</div><div className="pilgrimage-prayer-grid">{prayerRows.map(row => <div className="pilgrimage-prayer" key={row.name}><span><FontAwesomeIcon icon={row.icon} /> {row.name}</span><strong>{row.time}</strong></div>)}</div></div>
          <div className="pilgrimage-weather"><div className="pilgrimage-block-label"><FontAwesomeIcon icon={faCloudSun} /> Current weather</div><strong className="pilgrimage-temperature">{Math.round(activeData?.weather.temperature ?? 0)}°C</strong><span>{weatherLabel(activeData?.weather.code ?? 0)}</span><div className="pilgrimage-weather__stats"><span>High <b>{Math.round(activeData?.weather.high ?? 0)}°</b></span><span>Low <b>{Math.round(activeData?.weather.low ?? 0)}°</b></span><span>Humidity <b>{Math.round(activeData?.weather.humidity ?? 0)}%</b></span><span>Wind <b>{Math.round(activeData?.weather.wind ?? 0)} km/h</b></span></div></div>
          </div><div className="pilgrimage-destinations"><div className="pilgrimage-block-label"><FontAwesomeIcon icon={faLocationDot} /> {activeCity.name} sacred Ziyarat destinations</div><div className="pilgrimage-destination-grid">{(activeData?.destinations || []).map((destination, index) => <div className="pilgrimage-destination" key={destination.name}><strong>{String(index + 1).padStart(2, "0")}</strong><span><b>{destination.name}</b><small>{destination.description}</small></span></div>)}</div></div></>}
        <small className="pilgrimage-utilities__source">Prayer data: Aladhan API · Weather data: Open-Meteo</small>
      </div>
    </div>
  </section>;
}
