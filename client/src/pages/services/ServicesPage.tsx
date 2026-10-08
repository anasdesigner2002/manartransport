import { useEffect } from "react";
import { SectionHeading } from "@/components/ui/BrandPrimitives";
import { ServiceCard } from "@/components/home/HomeSections";
import { imageSources, services } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";
import { PageIntro, BookingCTA } from "@/pages/PageBlocks";

export function ServicesPage() {
  useEffect(() => {
    setPageMetadata(
      "Transportation Services",
      "Explore Manar Transport services for airport, Makkah, Madinah, Ziyarat, intercity, and VIP travel."
    );
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="Services"
        title="A composed way to get there."
        body="Transportation designed around the real shape of a journey: arrivals, sacred cities, long roads, and everything in between."
        image={imageSources.airportService}
      />
      <section className="section container">
        <SectionHeading
          eyebrow="Choose your route"
          title="Focused services, thoughtfully delivered."
          body="Select a service to learn more, then start a booking whenever you are ready."
        />
        <div className="services-grid services-grid--full">
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <BookingCTA title="Have a route in mind?" />
    </div>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find(item => item.slug === slug) || services[0];
  useEffect(() => {
    setPageMetadata(service.title, service.description);
  }, [service.title, service.description]);
  return (
    <div>
      <PageIntro
        eyebrow={service.eyebrow}
        title={service.title}
        body={service.description}
        image={service.image}
      />
      <section className="section container detail-grid">
        <div className="detail-copy">
          <span className="eyebrow">The service</span>
          <h2>
            Every journey starts
            <br />
            <em>with clarity.</em>
          </h2>
          {service.serviceCopy.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="detail-panel">
          <span className="panel-label">Booking note</span>
          <h3>Share the route, date, and group details.</h3>
          <p>
            We will use your WhatsApp message to confirm availability and next
            steps.
          </p>
          <button
            className="gold-button gold-button--full"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-booking"))
            }
          >
            Book this service
          </button>
        </div>
      </section>
      <BookingCTA
        eyebrow="A considered start"
        title="Let’s plan the next leg."
      />
    </div>
  );
}
