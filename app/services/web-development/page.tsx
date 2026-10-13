import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";
import { ServiceHeader, Deliverables, ValueGrid, ApproachSteps, WhoItHelps, RelatedWork, ServiceCta, Split } from "@/components/services/Blocks";
import { WebStack } from "@/components/services/Signatures";
import { Lines } from "@/components/ui/Lines";

const service = getService("web-development")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.metaDescription,
  alternates: canonicalFor(`/services/${service.slug}`),
};

const BUILD = [
  ["Modern frameworks", "React-based frameworks such as Next.js, with TypeScript for dependable code."],
  ["Right rendering for the job", "Static, server-rendered or interactive — chosen page by page for speed and freshness."],
  ["Semantic, accessible markup", "Real headings, labels and keyboard support from the first line, not retrofitted."],
  ["Optimised media", "Responsive images and fonts delivered at the right size, with reserved space to prevent layout shift."],
  ["Measured performance", "Core Web Vitals and Lighthouse checks on production builds before launch."],
  ["Motion that respects people", "Animation tuned for ordinary devices, with full reduced-motion support."],
];

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceHeader
        service={service}
        mega
        lines={["WEBSITES", "BUILT TO", "PERFORM."]}
        lede="Our flagship service. Premium websites, e-commerce stores and web applications — designed with an editor's eye and engineered with an obsessive attention to speed, accessibility and detail."
      />

      <section className="shell section section--tight" aria-label="Website concepts">
        <WebStack />
      </section>

      <Split
        left={
          <>
            <h2 className="sblock__h" data-reveal="">What it is</h2>
            <p className="lede" data-reveal="">{service.summary}</p>
          </>
        }
        right={<WhoItHelps service={service} />}
      />

      <section className="section shell" aria-labelledby="web-deliver">
        <Lines id="web-deliver" className="display display--l" lines={["TWELVE THINGS", "WE BUILD."]} />
        <ul className="wcap">
          {service.deliverables.map((d, i) => (
            <li key={d} data-reveal="">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="wcap__t">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section webdev shell" aria-labelledby="web-how">
        <p className="eyebrow" data-reveal=""><span className="eyebrow__idx">—</span>How we build</p>
        <Lines id="web-how" className="display display--l" lines={["ENGINEERED", "THE RIGHT WAY."]} />
        <ul className="build">
          {BUILD.map(([t, d]) => (
            <li key={t} data-reveal="">
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--tight shell">
        <ValueGrid service={service} title="Why thoughtful web design pays off" />
      </section>

      <section className="section section--tight shell">
        <ApproachSteps service={service} />
      </section>

      <RelatedWork service={service} title="Website concepts" />
      <ServiceCta service={service} lines={["LET’S BUILD", "YOUR SITE."]} />
    </>
  );
}
