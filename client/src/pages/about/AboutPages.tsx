import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faMessage,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { useEffect } from "react";
import { PageIntro, BookingCTA } from "@/pages/PageBlocks";
import { SectionHeading } from "@/components/ui/BrandPrimitives";
import { imageSources } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";

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
        eyebrow="About Us – Manar Transport"
        title="Your Trusted Travel Partner for Hajj & Umrah"
        body="Welcome to Manar Transport – Your Trusted Travel Partner for Hajj & Umrah"
        image={imageSources.company}
      />
      <section className="section container about-intro">
        <div>
          <img className="about-intro__logo" src="/images/logo.png" alt="Manar Transport logo" />
          <span className="eyebrow">About Manar Transport</span>
          <h2>
            Dependable travel
            <br />
            <em>for your sacred journey.</em>
          </h2>
        </div>
        <div className="about-intro__copy">
          <p>
            At Manar Transport, we are committed to enriching your sacred
            journey with exceptional, seamless, and dependable transportation
            services across Saudi Arabia. Specializing in VIP transfers and
            private taxi solutions, we cater to pilgrims and travel partners
            seeking comfort, safety, and punctuality during their holy
            pilgrimage.
          </p>
          <p>
            Whether you require a swift Jeddah Airport to Makkah taxi, a
            peaceful transfer from Makkah to Madinah, or convenient local
            travel within the holy cities, Manar Transport ensures a
            stress-free experience from start to finish.
          </p>
        </div>
      </section>
      <section className="section section--dark about-values">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Manar Transport?"
            title="Travel with comfort and confidence."
            body="Thoughtful support, comfortable vehicles, and clear pricing help make every journey feel easier."
          />
          <div className="values-grid">
            <div>
              <FontAwesomeIcon icon={faMessage} />
              <h3>24/7 Dedicated Support</h3>
              <p>
                Our customer assistance team is available round-the-clock to
                manage your bookings, flight adjustments, and travel queries.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faShieldHalved} />
              <h3>Modern &amp; Well-Maintained Fleet</h3>
              <p>
                Travel in complete luxury and safety with our updated fleet of
                sedans, SUVs, and spacious family vans.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCoins} />
              <h3>Transparent Pricing</h3>
              <p>
                We believe in honesty and clarity. Know your fare before you
                travel, with no hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>
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
