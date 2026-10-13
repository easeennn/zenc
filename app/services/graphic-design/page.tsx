import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, Deliverables, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { IdentityGallery } from "@/components/services/Signatures";

const service = getService("graphic-design")!;

export const metadata: Metadata = {
  title: "Graphic Design & Brand Identity",
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

export default function GraphicDesignPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        lines={["IDENTITY,", "SYSTEMISED."]}
        lede="Marks, type, colour and layout rules that make every touchpoint feel like one brand — on screen, in print and in motion."
      />
      {/* Gallery leads this page: it is a visual service. */}
      <section className="shell section section--tight" aria-label="Identity gallery">
        <IdentityGallery />
      </section>
      <Split left={<WhoItHelps service={service} />} right={<Deliverables service={service} numbered={false} />} />
      <section className="section section--tight shell">
        <ValueGrid service={service} title="Why a system beats a logo" />
      </section>
      <section className="section section--tight shell">
        <ApproachSteps service={service} title="From direction to guidelines" />
      </section>
      <RelatedWork service={service} title="Identity concept" />
      <ServiceCta service={service} lines={["LET’S SHAPE", "YOUR BRAND."]} />
    </>
  );
}
