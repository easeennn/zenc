import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, Deliverables, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { DashboardSpec } from "@/components/services/Signatures";

const service = getService("software-development")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        lines={["SOFTWARE THAT", "FITS HOW YOU", "WORK."]}
        lede="Internal tools, dashboards and workflow automation — built around your process, scoped honestly and delivered in working increments."
      />
      <section className="shell section section--tight" aria-label="Dashboard concept">
        <DashboardSpec />
      </section>
      <Split left={<WhoItHelps service={service} />} right={<Deliverables service={service} />} />
      <section className="section section--tight shell">
        <ValueGrid service={service} title="What changes for your team" />
      </section>
      <section className="section section--tight shell">
        <div className="honest" data-reveal="">
          <h2 className="sblock__h">Scoped honestly</h2>
          <p>
            We build what we can design, ship and support well. If a requirement is beyond what we can responsibly
            deliver, we&rsquo;ll say so early and suggest alternatives rather than over-promise.
          </p>
        </div>
      </section>
      <section className="section section--tight shell">
        <ApproachSteps service={service} title="From idea to working tool" />
      </section>
      <RelatedWork service={service} title="Software concept" />
      <ServiceCta service={service} lines={["LET’S BUILD", "THE TOOL."]} />
    </>
  );
}
