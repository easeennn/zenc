import type { Metadata } from "next";
import Link from "next/link";
import { Lines } from "@/components/ui/Lines";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { WebStack } from "@/components/services/Signatures";
import { canonicalFor } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, software, graphic design, motion graphics, video editing, advertising and social media management from Zen-C Solutions.",
  alternates: canonicalFor("/services"),
};

export default function ServicesPage() {
  return (
    <>
      <section className="pagehead shell">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">07</span>Services
        </p>
        <Lines as="h1" load className="display display--mega" lines={["WHAT WE", "DO."]} />
        <div className="pagehead__row" data-reveal="">
          <p className="lede">
            Seven connected disciplines — led by website development. Each stands on its own; together they form a
            single creative and technical team.
          </p>
        </div>
      </section>

      <section className="section section--tight shell" aria-labelledby="flagship-title">
        <div className="flagship">
          <div className="flagship__copy">
            <p className="eyebrow" data-reveal="">
              <span className="eyebrow__idx">01</span>Flagship
            </p>
            <Lines id="flagship-title" className="display display--l" lines={["WEBSITE", "DEVELOPMENT"]} />
            <p className="lede" data-reveal="">
              Our core offering and the one we put the most craft into: premium websites, e-commerce and web
              applications.
            </p>
            <div className="btn-row" data-reveal="">
              <ButtonLink href="/services/web-development">Explore web development</ButtonLink>
            </div>
          </div>
          <div className="flagship__visual" data-reveal="">
            <WebStack />
          </div>
        </div>
      </section>

      <ServicesGrid id="all-services-title" />

      <section className="section section--tight shell">
        <div className="honest" data-reveal="">
          <h2 className="sblock__h">How engagements work</h2>
          <p>
            Not every engagement includes every service. We scope each project around your goals, then agree exactly
            what is included. Prefer to start small? Begin with one discipline. Not sure what you need?{" "}
            <Link href="/contact">Tell us what you&rsquo;re trying to achieve</Link>.
          </p>
        </div>
      </section>

      <ProcessSection index="—" />
      <FinalCta />
    </>
  );
}
