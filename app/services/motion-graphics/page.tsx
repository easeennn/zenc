import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { TypeStage } from "@/components/services/Signatures";
import { ButtonLink } from "@/components/ui/Button";

const service = getService("motion-graphics")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

export default function MotionGraphicsPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        mega
        lines={["GIVE YOUR", "STORY", "MOMENTUM."]}
        lede="Animated typography, logo motion and promotional graphics — designed frame by frame, timed with restraint."
      >
        <div className="btn-row">
          <ButtonLink href="/motion-lab">Visit the Motion Lab</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Start a project
          </ButtonLink>
        </div>
      </ServiceHeader>

      <section className="shell section section--tight" aria-label="Kinetic type demonstration">
        <TypeStage />
      </section>

      <section className="section shell" aria-label="Motion capabilities">
        <ul className="mrows">
          {service.deliverables.map((d, i) => (
            <li key={d} data-reveal="">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="mrows__t">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <Split left={<WhoItHelps service={service} />} right={<ValueGrid service={service} title="Why motion works" />} />
      <section className="section section--tight shell">
        <ApproachSteps service={service} title="From script to screen" />
      </section>
      <RelatedWork service={service} title="Motion concept" />
      <ServiceCta service={service} lines={["LET’S ANIMATE", "YOUR IDEA."]} />
    </>
  );
}
