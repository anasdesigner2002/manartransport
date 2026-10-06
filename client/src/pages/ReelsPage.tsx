import { useEffect } from "react";
import { PageIntro } from "@/pages/PageBlocks";
import { ReelGallery } from "@/components/home/HomeSections";
import { media } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";

export default function ReelsPage() {
  useEffect(() => {
    setPageMetadata(
      "From the Road",
      "A vertical reel-style gallery of Manar Transport journeys and Saudi travel moments."
    );
  }, []);
  return (
    <div>
      <PageIntro
        eyebrow="From the road"
        title="Eight journeys. One considered way to move."
        body="Watch eight moments from VIP and intercity journeys, Hajj and Umrah travel, Makkah, Madinah, and Jeddah."
        image={media.desert}
      />
      <section className="section container reels-page">
        <div className="reels-page__intro">
          <span className="eyebrow">The social library</span>
          <h2>
            Keep the journey
            <br />
            <em>in motion.</em>
          </h2>
          <p>Eight journeys from the road, ready to watch.</p>
        </div>
        <ReelGallery />
      </section>
    </div>
  );
}
