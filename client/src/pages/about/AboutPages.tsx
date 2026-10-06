import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCompass,
  faHeart,
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
        eyebrow="About Manar"
        title="The journey is part of the welcome."
        body="Manar Transport is shaped around the simple belief that getting there should feel as considered as the place you are going."
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
            From airport arrivals to Makkah, Madinah, and Ziyarat
            transportation, our service is designed to make a complex travel day
            feel more composed.
          </p>
          <p>
            We keep the first step simple: a clear request, a direct WhatsApp
            conversation, and a human follow-up that confirms availability and
            final details.
          </p>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="What guides us"
            title="Our mission lives in the details."
            body="The company story, impact metrics, and final claims should be updated with approved Manar Transport content as it becomes available."
          />
          <div className="values-grid">
            <div>
              <FontAwesomeIcon icon={faShieldHalved} />
              <h3>Safety &amp; comfort</h3>
              <p>
                Plan the route carefully, respect the pace of the traveller, and
                keep the experience calm.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCompass} />
              <h3>Reliability</h3>
              <p>
                Make the next step clear, from the first WhatsApp message to the
                final arrival.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} />
              <h3>Hospitality</h3>
              <p>
                Serve people with warmth and professionalism across every kind
                of journey.
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
            Room to grow,
            <br />
            <em>without losing care.</em>
          </h2>
          <p>
            [ADD COMPANY CONTENT] Add approved company impact information here.
            Do not add fleet counts, reviews, awards, or years of experience
            until confirmed.
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
