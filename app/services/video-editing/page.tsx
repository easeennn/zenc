import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, Deliverables, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { VideoStrip } from "@/components/services/Signatures";

const service = getService("video-editing")!;

export const metadata: Metadata = {
  title: "Video Editing & Content Production",
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

export default function VideoEditingPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        lines={["CUT FOR", "ATTENTION."]}
        lede="Promotional films, short-form social edits and branded video — structured for pace, finished for every platform."
      />
      <section className="shell section section--tight" aria-label="Video formats">
        <VideoStrip />
      </section>
      <Split left={<WhoItHelps service={service} />} right={<Deliverables service={service} />} />
      <section className="section section--tight shell">
        <ValueGrid service={service} title="What good editing gives you" />
      </section>
      <section className="section section--tight shell">
        <ApproachSteps service={service} title="From footage to finished" />
      </section>
      <RelatedWork service={service} title="Editing concept" />
      <ServiceCta service={service} lines={["LET’S CUT", "YOUR FILM."]} />
    </>
  );
}
