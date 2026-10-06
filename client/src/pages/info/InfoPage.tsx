import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBookOpen,
  faCircleInfo,
  faPlaneArrival,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "wouter";
import { PageIntro, BookingCTA } from "@/pages/PageBlocks";
import { SectionHeading } from "@/components/ui/BrandPrimitives";
import { faqs, infoPages, imageSources } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";

export default function InfoPage() {
  useEffect(() => {
    setPageMetadata(
      "Travel Information",
      "Useful booking, airport, travel, and Hajj & Umrah information for Manar Transport customers."
    );
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="Information"
        title="A little more clarity before you go."
        body="Useful guidance for planning your transportation. Current religious, regulatory, and travel requirements should always be confirmed with official authorities."
        image={imageSources.useful}
      />
      <section className="section container">
        <SectionHeading
          eyebrow="Useful information"
          title="The practical things, in one place."
          body="Open a category for focused guidance, then return to the main information index whenever you need another route."
        />
        <div className="info-grid">
          {infoPages.map((item, index) => (
            <div key={item.slug}>
              <FontAwesomeIcon
                icon={[faPlaneArrival, faBookOpen, faRoute][index]}
              />
              <h3>{item.label}</h3>
              <p>{item.body}</p>
              <Link className="text-link" href={`/info/${item.slug}`}>
                Read detail <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
          <div>
            <FontAwesomeIcon icon={faCircleInfo} />
            <h3>Booking information</h3>
            <p>
              Your message opens in WhatsApp. Staff follow up there with
              availability and final details; no fake CRM is used.
            </p>
            <Link className="text-link" href="/contact">
              Start a request <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--soft container info-faq">
        <div>
          <span className="eyebrow">Frequently asked</span>
          <h2>
            Good questions
            <br />
            <em>make good journeys.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(faq => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span>+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}

export function InfoDetailPage({ slug }: { slug: string }) {
  const page = infoPages.find(item => item.slug === slug) || infoPages[0];
  useEffect(() => {
    setPageMetadata(page.label, page.body);
  }, [page.label, page.body]);
  return (
    <div>
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        body={page.body}
        image={page.image}
      />
      <section className="section container detail-grid">
        <div className="detail-copy">
          <span className="eyebrow">What to keep in mind</span>
          <h2>Useful context for a smoother route.</h2>
          <p>
            {page.body} Share the important details early and the team can
            respond with a clearer plan.
          </p>
          <div className="feature-list">
            {page.details.map(detail => (
              <span key={detail}>
                <FontAwesomeIcon icon={faCircleInfo} /> {detail}
              </span>
            ))}
          </div>
          <Link className="gold-button" href="/contact">
            Ask the team <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="detail-panel">
          <span className="panel-label">Good to know</span>
          <h3>Keep official guidance close.</h3>
          <p>
            Travel conditions, religious guidance, visa requirements, and local
            regulations can change. Confirm current information through official
            Saudi authorities and qualified advisors before travel.
          </p>
          <Link className="text-link" href="/info">
            Back to information <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
      <BookingCTA
        eyebrow="Need help with the route?"
        title="Share the details and start a clear conversation."
      />
    </div>
  );
}
