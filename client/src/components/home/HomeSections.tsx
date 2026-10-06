import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCarSide, faCheck, faCirclePlay, faClock, faGem, faHeadset, faLandmark, faMosque, faPlaneDeparture, faRoad, faRoute, faShieldHalved, faStar, faSuitcaseRolling, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { imageSources, media, reelGallery, reels, services, tickerItems, vehicles, type Service, type Vehicle } from "@/data/siteData";
import { openBooking } from "@/components/booking/BookingModal";

const iconMap: Record<string, IconDefinition> = { plane: faPlaneDeparture, mosque: faMosque, landmark: faLandmark, route: faRoute, road: faRoad, star: faStar };
const heroSlides = [
  { image: imageSources.whyManar, eyebrow: "Makkah, in a softer light", title: <>A considered welcome<br /><em>to the holy city.</em></>, body: "Thoughtful transportation for arrivals, hotel connections, and the moments that matter in Makkah." },
  { image: imageSources.makkah, eyebrow: "Makkah, made easy", title: <>Move with calm<br /><em>and intention.</em></>, body: "From airport pick-up to private city movement, let the road feel as composed as the destination." },
  { image: imageSources.hajj, eyebrow: "Pilgrimage journeys, considered", title: <>Arrive with ease<br /><em>after the journey.</em></>, body: "Reliable, comfortable transportation planning for Hajj, Umrah, and the road between Makkah and Madinah." },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = heroSlides[activeSlide];
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);
  return <section className="hero-section" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={() => setIsPaused(false)}><div className="hero-backdrop" style={{ backgroundImage: `linear-gradient(92deg, rgba(6,7,9,.98) 0%, rgba(6,7,9,.78) 43%, rgba(6,7,9,.34) 72%, rgba(6,7,9,.66) 100%), url('${slide.image}')` }} /><div className="hero-content container"><div className="hero-copy" key={activeSlide}><span className="eyebrow eyebrow--gold">{slide.eyebrow}</span><h1>{slide.title}</h1><p>{slide.body}</p><div className="hero-actions"><Link className="gold-button" href="/services">Explore services <FontAwesomeIcon icon={faArrowRight} /></Link><button className="text-link text-link--light" onClick={() => openBooking()}>Book a ride <FontAwesomeIcon icon={faArrowRight} /></button></div><div className="hero-proof"><span><FontAwesomeIcon icon={faShieldHalved} /> Safety-led</span><span><FontAwesomeIcon icon={faClock} /> Clear coordination</span><span><FontAwesomeIcon icon={faGem} /> Premium comfort</span></div></div><div className="hero-side-card"><div className="hero-side-card__media" style={{ backgroundImage: `url(${media.makkah})` }}><div className="hero-video-placeholder"><FontAwesomeIcon icon={faCirclePlay} /><span>Licensed Makkah video<br /><small>Add your licensed content here</small></span></div></div><div className="hero-side-card__caption"><span>0{activeSlide + 1} / 0{heroSlides.length}</span><strong>A quieter way to travel</strong><span>Saudi Arabia</span></div></div></div><div className="hero-slide-controls" aria-label="Hero banner controls">{heroSlides.map((item, index) => <button key={item.image} className={activeSlide === index ? "is-active" : ""} onClick={() => setActiveSlide(index)} aria-label={`Show banner ${index + 1}`} aria-pressed={activeSlide === index}><span /></button>)}</div><div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" /></section>;
}

export function Ticker() { return <div className="ticker"><div className="ticker-track">{[...tickerItems, ...tickerItems].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>; }
export function ServiceCard({ service }: { service: Service }) { return <article className="service-card"><div className="service-card__image" style={{ backgroundImage: `linear-gradient(180deg, transparent 15%, rgba(0,0,0,.78)), url(${service.image})` }}><div className="service-icon"><FontAwesomeIcon icon={iconMap[service.icon]} /></div><span className="service-card__eyebrow">{service.eyebrow}</span></div><div className="service-card__body"><h3>{service.title}</h3><p>{service.description}</p><div className="service-card__actions"><Link className="text-link" href={`/services/${service.slug}`}>View details <FontAwesomeIcon icon={faArrowRight} /></Link><button className="mini-book" onClick={() => openBooking()}>Book <FontAwesomeIcon icon={faArrowRight} /></button></div></div></article>; }
export function VehicleCard({ vehicle }: { vehicle: Vehicle }) { return <article className="vehicle-card"><Link href={`/fleet/${vehicle.slug}`} className="vehicle-card__image" style={vehicle.image ? { backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,.78)), url(${vehicle.image})` } : undefined}><span className="vehicle-category">{vehicle.category}</span><span className="vehicle-arrow"><FontAwesomeIcon icon={faArrowRight} /></span></Link><div className="vehicle-card__body"><Link href={`/fleet/${vehicle.slug}`}><h3>{vehicle.name}</h3></Link><p>{vehicle.intro}</p><div className="vehicle-card__footer"><span><FontAwesomeIcon icon={faCarSide} /> Private travel</span><button className="mini-book" onClick={() => openBooking(vehicle.name)}>Book <FontAwesomeIcon icon={faArrowRight} /></button></div></div></article>; }

export function FleetRail({ items = vehicles.slice(0, 3) }: { items?: Vehicle[] }) { return <div className="fleet-rail"><div className="fleet-rail__track">{items.map((vehicle) => <VehicleCard vehicle={vehicle} key={vehicle.slug} />)}</div></div>; }

export function ReelStrip() { return <div className="reel-slider"><div className="reel-slider__viewport"><div className="reel-slider__track">{reels.slice(0, 4).map((reel, index) => <article className="reel-card" key={reel.video} style={{ backgroundImage: `linear-gradient(180deg, transparent 36%, rgba(0,0,0,.85)), url(${reel.image})` }}><video className="reel-card__video" src={reel.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" /><span className="reel-number">0{index + 1}</span><div><span>{reel.label}</span><h3>{reel.title}</h3><p>{reel.description}</p></div></article>)}</div></div><div className="reel-slider__footer"><Link className="gold-button" href="/reels">View all <FontAwesomeIcon icon={faArrowRight} /></Link></div></div>; }

function ReelGalleryCard({ reel, index }: { reel: (typeof reelGallery)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return <article className="reel-gallery__card" onContextMenu={event => event.preventDefault()}><div className="reel-gallery__media"><video ref={videoRef} src={reel.video} autoPlay muted={muted} loop playsInline preload="metadata" controls={false} controlsList="nodownload" disablePictureInPicture disableRemotePlayback draggable={false} aria-label={`${reel.title} reel`} onContextMenu={event => event.preventDefault()} /><span className="reel-number">{String(index + 1).padStart(2, "0")}</span><button className="reel-gallery__sound" type="button" onClick={toggleSound} aria-label={muted ? `Turn on sound for ${reel.title}` : `Mute ${reel.title}`} aria-pressed={!muted} title={muted ? "Turn sound on" : "Mute video"}><FontAwesomeIcon icon={muted ? faVolumeXmark : faVolumeHigh} /></button></div><div className="reel-gallery__copy"><span>{reel.label}</span><h3>{reel.title}</h3><p>{reel.description}</p></div></article>;
}

export function ReelGallery() { return <div className="reel-gallery"><div className="reel-gallery__viewport"><div className="reel-gallery__track">{reelGallery.map((reel, index) => <ReelGalleryCard key={reel.video} reel={reel} index={index} />)}</div></div></div>; }

export function ExperienceBand() { return <section className="experience-band"><div className="experience-band__image" style={{ backgroundImage: `url(${imageSources.moreThanTransfer})` }} /><div className="experience-band__content"><span className="eyebrow eyebrow--gold">More than a transfer</span><h2>For the route,<br /><em>and the reason.</em></h2><p>When the journey matters, the small things matter too: a clear arrival plan, a comfortable vehicle, and a team that knows where you are going next.</p><Link className="gold-button" href="/about">Meet Manar Transport <FontAwesomeIcon icon={faArrowRight} /></Link></div></section>; }
export function ImpactStats() { return <div className="impact-stats"><div><strong>01</strong><span>Clear booking flow</span><p>Start with a short brief and continue in WhatsApp.</p></div><div><strong>02</strong><span>Considered routes</span><p>Airport, city, intercity, and pilgrimage travel planning.</p></div><div><strong>03</strong><span>Human follow-up</span><p>Availability and final trip details are confirmed by the team.</p></div></div>; }
export function PromiseList() { return <div className="promise-list"><div><FontAwesomeIcon icon={faShieldHalved} /><span><strong>Comfort without complication</strong><small>A more composed experience from the first message to the final drop-off.</small></span></div><div><FontAwesomeIcon icon={faHeadset} /><span><strong>Support when it counts</strong><small>WhatsApp-first coordination keeps details in one simple place.</small></span></div><div><FontAwesomeIcon icon={faSuitcaseRolling} /><span><strong>Made for real travel</strong><small>Thoughtful options for luggage, family groups, and longer journeys.</small></span></div></div>; }
