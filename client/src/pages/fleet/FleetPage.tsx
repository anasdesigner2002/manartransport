import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck, faMessage } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { PageIntro, BookingCTA } from "@/pages/PageBlocks";
import { SectionHeading } from "@/components/ui/BrandPrimitives";
import { VehicleCard } from "@/components/home/HomeSections";
import { media, vehicles } from "@/data/siteData";
import { openBooking } from "@/components/booking/BookingModal";
import { setPageMetadata } from "@/utils/metadata";

export function FleetPage() {
  useEffect(() => { setPageMetadata("Premium Vehicle Fleet", "Explore the Manar Transport fleet categories and request the right vehicle for your journey."); }, []);
  return <div><PageIntro eyebrow="The fleet" title="A vehicle that fits the journey." body="From private airport movement to longer Saudi routes, choose the shape of travel that feels right for your group." image={media.chauffeur} /><section className="section container"><SectionHeading eyebrow="Fleet preview" title="Quietly capable, carefully considered." body="Select a vehicle to view its details, passenger and luggage capacity, and available photos." /><div className="fleet-grid fleet-grid--full">{vehicles.map((vehicle) => <VehicleCard vehicle={vehicle} key={vehicle.slug} />)}</div></section><BookingCTA title="Not sure which vehicle fits?" /></div>;
}

export function FleetSlugPage({ slug }: { slug: string }) {
  return vehicles.some((vehicle) => vehicle.slug === slug) ? <VehicleDetailPage slug={slug} /> : <FleetPage />;
}

export function VehicleDetailPage({ slug }: { slug: string }) {
  const vehicle = vehicles.find((item) => item.slug === slug) || vehicles[0];
  const [active, setActive] = useState(0);
  useEffect(() => { setPageMetadata(vehicle.name, vehicle.description); }, [vehicle.name, vehicle.description]);
  return <div><PageIntro eyebrow={vehicle.category} title={vehicle.name} body={vehicle.intro} image={vehicle.image} /><section className={`section container vehicle-detail ${vehicle.gallery.length ? "" : "vehicle-detail--no-gallery"}`}>{vehicle.gallery.length > 0 && <div className="vehicle-gallery"><div className="vehicle-gallery__main" style={{ backgroundImage: `url(${vehicle.gallery[active]})` }}><span>Image {active + 1} / {vehicle.gallery.length}</span></div>{vehicle.gallery.length > 1 && <><div className="vehicle-gallery__thumbs">{vehicle.gallery.map((image, index) => <button key={image} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show vehicle image ${index + 1}`} style={{ backgroundImage: `url(${image})` }} />)}</div><div className="gallery-controls"><button onClick={() => setActive((active - 1 + vehicle.gallery.length) % vehicle.gallery.length)}><FontAwesomeIcon icon={faArrowLeft} /> Previous</button><button onClick={() => setActive((active + 1) % vehicle.gallery.length)}>Next <FontAwesomeIcon icon={faArrowRight} /></button></div></>}</div>}<div className="vehicle-detail__copy"><span className="eyebrow">Vehicle profile</span><h2>{vehicle.name}</h2><p>{vehicle.description}</p><div className="vehicle-specs"><div><span>Category</span><strong>{vehicle.category}</strong></div><div><span>Seating</span><strong>{vehicle.seats}</strong></div><div><span>Luggage</span><strong>{vehicle.luggage}</strong></div></div><div className="feature-list">{vehicle.features.map((feature) => <span key={feature}><FontAwesomeIcon icon={faCheck} /> {feature}</span>)}</div><div className="vehicle-detail__actions"><button className="gold-button" onClick={openBooking}>Book this vehicle <FontAwesomeIcon icon={faMessage} /></button><Link className="text-link" href="/fleet"><FontAwesomeIcon icon={faArrowLeft} /> Back to fleet</Link></div></div></section><BookingCTA eyebrow="Your vehicle, your route" title="Start with a simple WhatsApp brief." /></div>;
}
