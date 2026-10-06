import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { PageIntro } from "@/pages/PageBlocks";
import { contact, contactFaqs, media } from "@/data/siteData";
import { openBooking } from "@/components/booking/BookingModal";
import { buildWhatsAppContactUrl } from "@/utils/whatsapp";
import { setPageMetadata } from "@/utils/metadata";

type FaqLanguage = keyof typeof contactFaqs;
const faqTabs: { id: FaqLanguage; label: string }[] = [
  { id: "english", label: "English" },
  { id: "urdu", label: "اردو" },
  { id: "roman", label: "Roman Urdu" },
  { id: "arabic", label: "العربية" },
];

export default function ContactPage() {
  const [faqLanguage, setFaqLanguage] = useState<FaqLanguage>("english");
  useEffect(() => {
    setPageMetadata(
      "Contact Manar Transport",
      "Contact Manar Transport by WhatsApp, email, or direct booking request."
    );
  }, []);
  const currentFaqs = contactFaqs[faqLanguage];
  return (
    <div>
      <PageIntro
        eyebrow="Contact"
        title="Let’s start with a conversation."
        body="Share a few details and the Manar Transport team can follow up with availability, route planning, and next steps."
        image={media.chauffeur}
      />
      <section className="section container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Reach the team</span>
          <h2>
            Your next journey
            <br />
            <em>starts here.</em>
          </h2>
          <p>
            For the fastest response, use WhatsApp. For a structured request,
            open the booking form and send the pre-filled message directly to
            the team.
          </p>
          <div className="contact-details">
            <a
              href={buildWhatsAppContactUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMessage} />
              <span>
                <small>WhatsApp</small>
                <strong>{contact.whatsapp}</strong>
              </span>
            </a>
            <a href={`mailto:${contact.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>
                <small>Email</small>
                <strong>{contact.email}</strong>
              </span>
            </a>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                <small>Address</small>
                <strong>{contact.address}</strong>
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span>
                <small>Business hours</small>
                <strong>[ADD BUSINESS HOURS]</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <span className="eyebrow eyebrow--gold">Booking flow</span>
          <h3>Keep it simple.</h3>
          <ol>
            <li>
              <b>01</b> Tell us your name and contact details.
            </li>
            <li>
              <b>02</b> Add your travel date and trip details.
            </li>
            <li>
              <b>03</b> Review the WhatsApp message before sending.
            </li>
          </ol>
          <button
            className="gold-button gold-button--full"
            onClick={openBooking}
          >
            <FontAwesomeIcon icon={faMessage} /> Open booking form
          </button>
          <p className="form-note">
            Your details are not stored by this static site. The request opens
            in WhatsApp for you to send.
          </p>
        </div>
      </section>
      <section className="section section--soft contact-faq">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Questions, in your language</span>
            <h2>
              Clear answers before
              <br />
              <em>you set out.</em>
            </h2>
            <p>
              These FAQs combine common planning questions with guidance from
              official Saudi travel resources. Rules can change, so confirm
              current visa, Hajj, Umrah, and entry requirements with the
              relevant authorities.
            </p>
          </div>
          <div className="faq-tabs" role="tablist" aria-label="FAQ language">
            <div>
              {faqTabs.map(tab => (
                <button
                  key={tab.id}
                  className={faqLanguage === tab.id ? "is-active" : ""}
                  onClick={() => setFaqLanguage(tab.id)}
                  role="tab"
                  aria-selected={faqLanguage === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div
            className="faq-list contact-faq__list"
            dir={
              faqLanguage === "arabic" || faqLanguage === "urdu" ? "rtl" : "ltr"
            }
          >
            {currentFaqs.map(faq => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <FontAwesomeIcon icon={faChevronDown} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="faq-sources">
            Reference reading:{" "}
            <a
              href="https://www.visitsaudi.com/en/faq"
              target="_blank"
              rel="noreferrer"
            >
              Visit Saudi FAQ
            </a>{" "}
            and{" "}
            <a
              href="https://travel.state.gov/en/international-travel/planning/safety-tips/hajj-and-umrah-pilgrimage-travel.html"
              target="_blank"
              rel="noreferrer"
            >
              Hajj and Umrah travel guidance
            </a>
            . These links are informational, not a substitute for official visa
            or religious advice.
          </p>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container contact-locations">
          <div className="contact-locations__copy">
            <span className="eyebrow">Our offices</span>
            <h2>
              Find us where
              <br />
              <em>your journey begins.</em>
            </h2>
            <div className="contact-offices">
              {contact.offices.map(office => (
                <div className="contact-office" key={office.name}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>
                    <small>{office.name}</small>
                    <strong>{office.address}</strong>
                  </span>
                </div>
              ))}
            </div>
            <Link
              className="text-link"
              href={buildWhatsAppContactUrl(
                "Hello Manar Transport, I would like to confirm your office locations."
              )}
              target="_blank"
            >
              Ask on WhatsApp <FontAwesomeIcon icon={faMessage} />
            </Link>
          </div>
          <div className="contact-map">
            <iframe
              title="Manar Transport Islamabad office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.7058985030978!2d72.97110096104272!3d33.60913832292609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df96937c1d1d3f%3A0x121a0d821d48c9a3!2sI-14%2F4%20I-14%2C%20Islamabad%2C%20Pakistan!5e1!3m2!1sen!2s!4v1790346066340!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
