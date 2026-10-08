import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCompass,
  faEnvelope,
  faHeart,
  faMessage,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { useEffect } from "react";
import { PageIntro, BookingCTA } from "@/pages/PageBlocks";
import { SectionHeading } from "@/components/ui/BrandPrimitives";
import { contact, imageSources } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";
import { buildWhatsAppContactUrl } from "@/utils/whatsapp";

export function AboutPage() {
  useEffect(() => {
    setPageMetadata(
      "About Manar Transport",
      "Learn about the Manar Transport approach to safe, comfortable, Saudi-focused journeys."
    );
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="About Manar"
        title="The journey is part of the welcome."
        body="Manar Transport supports pilgrims and travel partners with private transportation across Saudi Arabia, with comfort, safety, and punctuality at the heart of every journey."
        image={imageSources.company}
      />
      <section className="section container about-intro">
        <div>
          <img className="about-intro__logo" src="/images/logo.png" alt="Manar Transport logo" />
          <span className="eyebrow">Company overview</span>
          <h2>
            Built for movement
            <br />
            <em>that matters.</em>
          </h2>
        </div>
        <div>
          <p>
            Welcome to Manar Transport, your travel partner for Hajj and Umrah.
            We provide private taxi and VIP transfers for guests travelling
            across Saudi Arabia, making each journey feel more comfortable,
            dependable, and straightforward.
          </p>
          <p>
            Whether you need a Jeddah Airport transfer to Makkah, a journey
            between Makkah and Madinah, or local transportation in the holy
            cities, our team helps coordinate the details from pick-up through
            arrival. We also support travel partners and agencies with clear,
            direct booking coordination.
          </p>
          <p>
            Arrange airport pick-ups and drop-offs, hotel transfers, and
            personalized Ziyarat and historical sightseeing journeys in
            Makkah, Madinah, Jeddah, Taif, and Badr. Share your route and
            requirements in advance so the team can follow up on availability
            and the arrangements for your trip.
          </p>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="What guides us"
            title="Our mission lives in the details."
            body="We focus on the practical details that help pilgrims, families, and travel partners feel more prepared on the road."
          />
          <div className="values-grid">
            <div>
              <FontAwesomeIcon icon={faShieldHalved} />
              <h3>Safety &amp; comfort</h3>
              <p>
                Travel in a modern, well-maintained choice of sedans, SUVs, and
                family vans, with care for your route, group, and luggage.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCompass} />
              <h3>Reliability</h3>
              <p>
                Our support team is available around the clock to coordinate
                bookings, flight adjustments, and travel questions.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} />
              <h3>Hospitality</h3>
              <p>
                Professional, multilingual local drivers provide courteous
                service and help you travel with greater peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section container about-impact">
        <div
          className="about-impact__image"
          style={{ backgroundImage: `url(${imageSources.story})` }}
        />
        <div>
          <span className="eyebrow">Our impact</span>
          <h2>
            Peace of mind
            <br />
            <em>on every route.</em>
          </h2>
          <p>
            Avoid the uncertainty of last-minute taxi arrangements and
            unpredictable local fares. We offer fixed, competitive fares with
            no hidden charges. Arrange your ride in advance through WhatsApp or
            our online platform, and our team will follow up to confirm
            availability and trip details.
          </p>
          <p>
            From airport arrivals to your onward journey, we bring together
            private city transfers, intercity routes, and guided Ziyarat
            journeys. Travel agencies and tour operators can also contact our
            team to discuss booking arrangements suited to their guests.
          </p>
          <div className="about-impact__contacts" aria-label="Contact Manar Transport">
            <a
              className="text-link"
              href={buildWhatsAppContactUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMessage} />
              WhatsApp {contact.whatsapp}
            </a>
            <a className="text-link" href={`mailto:${contact.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
              {contact.email}
            </a>
          </div>
          <p className="about-impact__pricing-note">
            Confirm your route and agreed fare with the team before travel.
          </p>
          <Link className="text-link" href="/about/our-story">
            Read our story <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}

export function OurStoryPage() {
  useEffect(() => {
    setPageMetadata(
      "Our Story & Mission",
      "The Manar Transport story and mission for safe, comfortable Saudi-focused transportation."
    );
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="Our story & mission"
        title="A more thoughtful way to move."
        body="A working story for a transportation service that wants to meet travellers with clarity, care, and a sense of place."
        image={imageSources.story}
      />
      <section className="section container editorial-page">
        <div className="editorial-page__aside">
          <span className="eyebrow">The idea</span>
          <strong>Travel should feel looked after.</strong>
        </div>
        <div className="editorial-page__body">
          <p>
            Manar Transport serves travellers who are moving between airports,
            hotels, cities, and meaningful destinations. The goal is not to make
            grand promises; it is to make each practical step feel more
            straightforward.
          </p>
          <p>
            Our mission is to build safe, comfortable, and reliable
            transportation experiences for Makkah and Madinah travel, Hajj and
            Umrah-related needs, Ziyarat plans, and the journeys that connect
            them.
          </p>
          <p>
            As the company grows, the future vision is to keep improving the
            systems behind the service without losing the warmth of a human
            conversation.
          </p>
          <div className="quote-block">
            “The route matters. The reason for the journey matters more.”
          </div>
        </div>
      </section>
      <BookingCTA
        eyebrow="Keep moving forward"
        title="Let’s plan your next route."
      />
    </div>
  );
}

export function CeoPage() {
  useEffect(() => {
    setPageMetadata(
      "CEO Message",
      "A message from Manar Transport leadership."
    );
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="A note from leadership"
        title="Thank you for trusting us with the journey."
        body="A warm, customer-focused message for the Manar Transport website. Replace this text with the approved final message when available."
        image={imageSources.ceo}
      />
      <section className="section container message-page">
        <img className="message-page__logo" src="/images/logo.png" alt="Manar Transport logo" />
        <div>
          <p>
            Every journey begins with a reason. It may be a welcome home, a
            visit to a sacred city, an airport connection, or simply the need to
            arrive somewhere safely and comfortably.
          </p>
          <p>
            Our responsibility is to respect that reason by making the
            transportation around it dependable, clear, and thoughtfully
            coordinated. We are grateful for the opportunity to serve travellers
            and families as they move through Saudi Arabia.
          </p>
          <p>
            Thank you for considering Manar Transport. We look forward to
            helping with the next leg of your journey.
          </p>
          <strong>CEO, Manar Transport</strong>
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}
