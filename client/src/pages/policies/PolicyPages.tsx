import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileLines,
  faLock,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "wouter";
import { PageIntro } from "@/pages/PageBlocks";
import { imageSources } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";

const serviceScope =
  "Transportation services to Makkah, Madinah, and the airport, including pick-up and drop-off, hotel pick-up and drop-off, and intercity transfers.";

const policyItems = [
  {
    slug: "terms",
    title: "Terms & Conditions",
    icon: faFileLines,
    body:
      "MANAR TRANSPORT is dedicated to providing superior, reliable and seamless transportation solutions for Hajj and Umrah Pilgrims. These Terms and Conditions outline the operational standards, mutual responsibilities, service limitations and payment/credit framework governing our partnership with travel agents.",
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    icon: faLock,
    body:
      "This Privacy Policy explains Our policies and procedures regarding the collection, use, and disclosure of Your information when You use the Service. It also informs You about Your privacy rights and how applicable law protects You.",
  },
  {
    slug: "refund",
    title: "Refund Policy",
    icon: faRotate,
    body: "Refund & Cancellation Policy — MANAR TRANSPORT",
  },
];

const privacyDefinitions = [
  {
    term: "Account",
    definition:
      "a unique account created for You to access our Service or any part of our Service.",
  },
  {
    term: "Affiliate",
    definition:
      "an entity that controls, is controlled by, or is under common control with another party, where “control” means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.",
  },
  {
    term: "Company",
    definition:
      "referred to as either “the Company”, “We”, “Us”, or “Our”, refers to Manar Transport.",
  },
  {
    term: "Cookies",
    definition:
      "small files placed on Your computer, mobile device, or other device by a website, which may contain details of Your browsing activity on that website and serve various purposes.",
  },
  { term: "Country", definition: "refers to: Saudi Arabia." },
  {
    term: "Device",
    definition:
      "any device that can access the Service, such as a computer, mobile phone, or digital tablet.",
  },
  {
    term: "Personal Data",
    definition:
      "any information that relates to an identified or identifiable individual.",
  },
  { term: "Service", definition: "the Website." },
  {
    term: "Service Provider",
    definition:
      "any natural or legal person who processes data on behalf of the Company. This includes third-party companies or individuals engaged by the Company to facilitate the Service, provide services on behalf of the Company, perform services related to the Service, or assist the Company in analyzing how the Service is used.",
  },
  {
    term: "Usage Data",
    definition:
      "data collected automatically, either generated through the use of the Service or from the Service infrastructure itself, such as the duration of a page visit.",
  },
  { term: "Website", definition: "Manar Transport." },
  {
    term: "You",
    definition:
      "the individual accessing or using the Service, or the company or other legal entity on whose behalf such individual is accessing or using the Service, as applicable.",
  },
];

const personalDataTypes = [
  "Email address",
  "First name and last name",
  "Phone number",
  "Address, State, Province, ZIP/Postal code, City",
];

const cookieTypes = [
  {
    title: "Necessary / Essential Cookies",
    details: [
      "Type: Session Cookies",
      "Administered by: Us",
      "Purpose: These Cookies are necessary to provide You with services available through the Website and to allow You to use certain features. They help authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services You have requested cannot be provided, and We use these Cookies only to provide those services.",
    ],
  },
];

function PrivacyPolicyContent() {
  return (
    <>
      <p>
        This Privacy Policy explains Our policies and procedures regarding the
        collection, use, and disclosure of Your information when You use the
        Service. It also informs You about Your privacy rights and how
        applicable law protects You.
      </p>
      <p>
        We use Your Personal Data to provide and enhance the Service. By using
        the Service, You acknowledge and agree to the collection and use of
        information in accordance with this Privacy Policy.
      </p>

      <h3>Interpretation and Definitions</h3>
      <h4>Interpretation</h4>
      <p>
        Words beginning with a capital letter have meanings defined under the
        conditions below. These definitions shall have the same meaning whether
        they are used in singular or plural form.
      </p>
      <h4>Definitions</h4>
      <p>For the purposes of this Privacy Policy:</p>
      <dl className="legal-definitions">
        {privacyDefinitions.map(({ term, definition }) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{definition}</dd>
          </div>
        ))}
      </dl>

      <h3>Collecting and Using Your Personal Data</h3>
      <h4>Types of Data Collected</h4>
      <h4>Personal Data</h4>
      <p>
        While using Our Service, We may request certain personally identifiable
        information that can be used to contact or identify You. Personally
        identifiable information may include, but is not limited to:
      </p>
      <ul>
        {personalDataTypes.map(type => (
          <li key={type}>{type}</li>
        ))}
      </ul>

      <h4>Usage Data</h4>
      <p>Usage Data is collected automatically while using the Service.</p>
      <p>
        Usage Data may include information such as Your Device&apos;s Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our Service that You visit, the date and time of Your visit,
        the time spent on those pages, unique device identifiers, and other
        diagnostic information.
      </p>
      <p>
        When You access the Service through a mobile device, We may
        automatically collect certain information, including, but not limited
        to, the type of mobile device You use, Your mobile device unique ID, the
        IP address of Your mobile device, Your mobile operating system, the
        type of mobile Internet browser You use, unique device identifiers, and
        other diagnostic data.
      </p>
      <p>
        We may also collect information that Your browser sends whenever You
        visit our Service or when You access the Service through a mobile
        device.
      </p>

      <h3>Tracking Technologies and Cookies</h3>
      <p>
        We use Cookies and similar tracking technologies to monitor activity
        on Our Service and retain certain information. The tracking
        technologies used may include beacons, tags, and scripts that help us
        collect and track information and improve and analyze Our Service. The
        technologies We use may include:
      </p>
      <p>
        <strong>Cookies or Browser Cookies.</strong> A cookie is a small file
        stored on Your Device. You can instruct Your browser to reject all
        Cookies or notify You when a Cookie is being sent. However, if You do
        not accept Cookies, some portions of our Service may not be available
        to You. Unless You have changed Your browser settings to refuse
        Cookies, our Service may use Cookies.
      </p>
      <p>
        <strong>Web Beacons.</strong> Certain sections of our Service and our
        emails may contain small electronic files known as web beacons, also
        referred to as clear gifs, pixel tags, and single-pixel gifs. These
        allow the Company, for example, to count users who have visited certain
        pages or opened an email and to collect related website statistics,
        such as measuring the popularity of a particular section and checking
        system and server integrity.
      </p>
      <p>
        Cookies can be either “Persistent” or “Session” Cookies. Persistent
        Cookies remain on Your personal computer or mobile device when You go
        offline, while Session Cookies are removed once You close Your web
        browser. You can learn more about cookies through the TermsFeed website
        article.
      </p>
      <p>We use both Session and Persistent Cookies for the purposes described below:</p>
      {cookieTypes.map(cookie => (
        <section key={cookie.title}>
          <h4>{cookie.title}</h4>
          {cookie.details.map(detail => (
            <p key={detail}>{detail}</p>
          ))}
        </section>
      ))}
    </>
  );
}

function RefundPolicyContent() {
  return (
    <>
      <p>
        <strong>Refund &amp; Cancellation Policy — MANAR TRANSPORT</strong>
      </p>
      <p>
        If MANAR TRANSPORT cancels the service: The customer will be eligible
        for a full refund or a free rescheduling option.
      </p>
      <p>
        Refund Processing: Approved refunds will be processed through the
        original payment method and may take 5–7 business days to be completed.
      </p>
      <p>
        Non-Refundable Bookings: Certain bookings, such as promotional discount
        packages or selected peak-season bookings, may be non-refundable. Any
        non-refundable conditions will be clearly communicated at the time of
        booking.
      </p>
      <p>
        Refund Assistance: For any questions regarding refunds, customers can
        contact MANAR TRANSPORT through our official WhatsApp or email.
      </p>
      <h3>Cancellation &amp; Refund Schedule</h3>
      <ul>
        <li>Cancellation more than 24 hours before the scheduled service: 90% refund</li>
        <li>Cancellation within 12 hours before the scheduled service: 60% refund</li>
        <li>No-show: 20% refund</li>
      </ul>
    </>
  );
}

export function PoliciesPage() {
  useEffect(() => {
    setPageMetadata("Policies", serviceScope);
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="Policies"
        title="Company Policies"
        body={serviceScope}
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
        eyebrow="Policy"
        title={policy.title}
        body={policy.body}
        image={imageSources.policy}
      />
      <section className="section container legal-page">
        <article className="legal-page__body">
          {policy.slug === "terms" ? (
            <>
              <h2>{policy.title}</h2>
              <p>{policy.body}</p>
              <h3>Transportation Services</h3>
              <p>{serviceScope}</p>
            </>
          ) : policy.slug === "privacy" ? (
            <>
              <h2>{policy.title}</h2>
              <PrivacyPolicyContent />
            </>
          ) : (
            <>
              <h2>{policy.title}</h2>
              <RefundPolicyContent />
            </>
          )}
        </article>
      </section>
    </div>
  );
}
