import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { SectionHeading } from "@/components/ui/BrandPrimitives";
import {
  ExperienceBand,
  FleetRail,
  Hero,
  ImpactStats,
  PromiseList,
  ReelStrip,
  ServiceCard,
  Ticker,
  TrustExperience,
} from "@/components/home/HomeSections";
import PilgrimageUtilities from "@/components/home/PilgrimageUtilities";
import { faqs, imageSources, services, vehicles } from "@/data/siteData";
import { openBooking } from "@/components/booking/BookingModal";
import { useEffect } from "react";
import { setPageMetadata } from "@/utils/metadata";

export default function Home() {
  useEffect(() => {
    setPageMetadata(
      "Premium Makkah, Madinah & Saudi Transportation",
      "Manar Transport provides premium airport transfers, Makkah, Madinah, Ziyarat, and intercity transportation planning."
    );
  }, []);
  return (
    <div className="home-page">
      <Hero />
      <Ticker />
      <TrustExperience />
      <section className="section section--services container">
        <SectionHeading
          eyebrow="The Manar standard"
          title="Travel, with the noise taken out."
          body="A focused range of private transportation services for the journeys that deserve a little more care."
          action={{ label: "See all services", href: "/services" }}
        />
        <div className="services-grid">
          {services.slice(0, 4).map(service => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </section>
      <section className="section section--split container">
        <div className="split-copy">
          <span className="eyebrow">Why Manar</span>
          <h2>
            Simple plans.
            <br />
            <em>Elevated journeys.</em>
          </h2>
          <p>
            We are building a transportation service around a simple idea:
            movement should feel safe, well-timed, and quietly cared for.
          </p>
          <PromiseList />
          <Link className="text-link" href="/about/our-story">
            Read our story <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="split-art">
          <div
            className="split-art__image"
            style={{ backgroundImage: `url('${imageSources.whyManar}')` }}
          />
          <div className="split-art__stamp">
            <span>MANAR</span>
            <strong>Move with intention.</strong>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="The fleet"
            title="The right vehicle for the way ahead."
            body="A preview of the vehicle categories available for your next booking. Swipe through the collection on smaller screens."
            action={{ label: "Explore the fleet", href: "/fleet" }}
          />
          <FleetRail items={vehicles.slice(0, 3)} />
        </div>
      </section>
    <ExperienceBand />
    <PilgrimageUtilities />
      <section className="section section--impact container">
        <div className="impact-copy">
          <span className="eyebrow">A better handoff</span>
          <h2>
            From first message
            <br />
            <em>to final arrival.</em>
          </h2>
          <p>
            The site keeps booking simple today while leaving room for a robust
            future booking system, CRM, or partner program when the business is
            ready.
          </p>
          <Link className="text-link" href="/info">
            See useful information <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <ImpactStats />
      </section>
      <section className="section section--reels">
        <div className="container">
          <SectionHeading
            eyebrow="From the road"
            title="Journeys in motion."
            body="VIP journeys, intercity connections, Hajj and Umrah travel, and routes through Madinah."
          />
          <ReelStrip />
        </div>
      </section>
      <section className="section section--faq container">
        <div>
          <span className="eyebrow">Good to know</span>
          <h2>
            Questions, answered
            <br />
            <em>without the fine print.</em>
          </h2>
          <p>
            For current regulatory or religious guidance, always confirm with
            official Saudi authorities or qualified authorities.
          </p>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 4).map(faq => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <FontAwesomeIcon icon={faChevronDown} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow eyebrow--gold">Your next journey</span>
            <h2>
              Tell us where
              <br />
              <em>you need to go.</em>
            </h2>
          </div>
          <div className="cta-actions">
            <button className="gold-button" onClick={() => openBooking()}>
              Start a booking <FontAwesomeIcon icon={faMessage} />
            </button>
            <Link className="text-link text-link--light" href="/contact">
              Contact details <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
