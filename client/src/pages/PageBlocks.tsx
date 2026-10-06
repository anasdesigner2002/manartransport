import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { PageHero } from "@/components/ui/BrandPrimitives";
import { openBooking } from "@/components/booking/BookingModal";
import { media } from "@/data/siteData";

export function BookingCTA({ eyebrow = "Ready when you are", title = "Make the next move feel easy." }: { eyebrow?: string; title?: string }) { return <section className="mini-cta" style={{ backgroundImage: `linear-gradient(100deg, rgba(16,16,18,.96), rgba(16,16,18,.76)), url(${media.makkah})` }}><div><span className="eyebrow eyebrow--gold">{eyebrow}</span><h2>{title}</h2></div><div className="mini-cta__actions"><button className="gold-button" onClick={openBooking}>Book via WhatsApp <FontAwesomeIcon icon={faMessage} /></button><Link className="text-link text-link--light" href="/contact">Contact us <FontAwesomeIcon icon={faArrowRight} /></Link></div></section>; }

export function PageIntro({ eyebrow, title, body, image = media.tower, children }: { eyebrow: string; title: string; body: string; image?: string; children?: React.ReactNode }) { return <><PageHero eyebrow={eyebrow} title={title} body={body} image={image} />{children}</>; }
