import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileLines,
  faLock,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "wouter";
import { PageIntro, BookingCTA } from "@/pages/PageBlocks";
import { imageSources } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";

const policyItems = [
  {
    slug: "terms",
    title: "Terms & Conditions",
    icon: faFileLines,
    body: "The operating terms for using Manar Transport services and this website.",
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    icon: faLock,
    body: "How customer information should be handled once the final business workflow is confirmed.",
  },
  {
    slug: "refund",
    title: "Refund / Cancellation Policy",
    icon: faRotate,
    body: "The company’s final cancellation, refund, and change terms should be inserted here.",
  },
];

export function PoliciesPage() {
  useEffect(() => {
    setPageMetadata("Policies", "Manar Transport policy index.");
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="Policies"
        title="Clear expectations build trust."
        body="These pages provide a professional structure for the company’s final legal wording. Please have all copy reviewed before launch."
        image={imageSources.policy}
      />
      <section className="section container policy-grid">
        {policyItems.map(item => (
          <Link
            href={`/policies/${item.slug}`}
            className="policy-card"
            key={item.slug}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className="eyebrow">Policy</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <span className="text-link">
              Read policy <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        ))}
      </section>
      <BookingCTA />
    </div>
  );
}

export function PolicyDetailPage({ slug }: { slug: string }) {
  const policy = policyItems.find(item => item.slug === slug) || policyItems[0];
  useEffect(() => {
    setPageMetadata(policy.title, policy.body);
  }, [policy.title, policy.body]);
  return (
    <div>
      <PageIntro
        eyebrow="Policy placeholder"
        title={policy.title}
        body={policy.body}
        image={imageSources.policy}
      />
      <section className="section container legal-page">
        <div className="legal-page__aside">
          <span className="eyebrow">Review status</span>
          <strong>Final wording required</strong>
          <p>This is an editable placeholder, not final legal advice.</p>
        </div>
        <div className="legal-page__body">
          <h2>{policy.title}</h2>
          <p>
            [ADD COMPANY CONTENT] Insert the company-approved policy text here.
            Include effective date, scope, customer responsibilities, contact
            process, and any legally required notices.
          </p>
          <h3>Important before publishing</h3>
          <p>
            Have the final language reviewed by the company’s legal adviser and
            align it with the actual booking, WhatsApp, cancellation, privacy,
            and data-handling practices.
          </p>
          <Link className="text-link" href="/contact">
            Ask about the booking flow <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}
