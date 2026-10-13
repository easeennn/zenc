import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, Deliverables, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { CampaignLoop } from "@/components/services/Signatures";

const service = getService("advertising-campaigns")!;

export const metadata: Metadata = {
  title: "Advertising & Campaign Management",
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

export default function AdvertisingPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        lines={["CAMPAIGNS,", "TESTED &", "TRANSPARENT."]}
        lede="Planning, paid media set-up, creative variations and honest reporting — a structured loop, not a gamble."
      />
      <section className="shell section section--tight" aria-label="Campaign loop">
        <CampaignLoop />
      </section>
      <Split left={<WhoItHelps service={service} />} right={<Deliverables service={service} />} />
      <section className="section section--tight shell">
        <div className="honest honest--two" data-reveal="">
          <div>
            <h2 className="sblock__h">What we commit to</h2>
            <ul className="bullets">
              <li>A written plan with objectives, audiences and measurement.</li>
              <li>Correct set-up and tracking before spend begins.</li>
              <li>Structured creative and audience testing.</li>
              <li>Regular, plain-language reporting on what is running and what it costs.</li>
            </ul>
          </div>
          <div>
            <h2 className="sblock__h">What we don&rsquo;t promise</h2>
            <ul className="bullets">
              <li>Guaranteed sales, leads, rankings or return on spend.</li>
              <li>Results on a fixed timeline — platforms and markets vary.</li>
              <li>Management activities outside the scope we agree together.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section--tight shell">
        <ValueGrid service={service} title="Why structure matters" />
      </section>
      <section className="section section--tight shell">
        <ApproachSteps service={service} title="The campaign loop" />
      </section>
      <RelatedWork service={service} title="Campaign concept" />
      <ServiceCta service={service} lines={["LET’S PLAN", "THE CAMPAIGN."]} />
    </>
  );
}
