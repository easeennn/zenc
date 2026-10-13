import type { Metadata } from "next";
import { Lines } from "@/components/ui/Lines";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCta } from "@/components/home/FinalCta";
import { ConceptArt } from "@/components/media/ConceptArt";
import { services } from "@/lib/services";
import Link from "next/link";
import { canonicalFor, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zen-C Solutions is a creative technology and digital solutions agency. Learn how we think, what we do and how we work.",
  alternates: canonicalFor("/about"),
};

const PHILOSOPHY = [
  ["Think strategically", "Start from the goal and the audience. Everything else follows from that."],
  ["Design with purpose", "Every layout, line and movement earns its place by serving the message."],
  ["Build with precision", "Details are where quality shows. We engineer them as carefully as we design them."],
  ["Communicate clearly", "Plain language, honest scoping and no surprises — from first call to handover."],
  ["Improve through testing", "Real devices, real users, real measurements. We refine before we ship."],
  ["Deliver work that serves a goal", "Beautiful isn't enough. The work has to do a job for the people paying for it."],
];

export default function AboutPage() {
  return (
    <>
      <section className="pagehead shell">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">—</span>About {siteConfig.shortName}
        </p>
        <Lines as="h1" load className="display display--mega" lines={["CREATIVE", "TECHNOLOGY,", "ON PURPOSE."]} />
      </section>

      <section className="section section--tight shell about-intro">
        <div className="about-intro__copy" data-reveal="">
          <p className="lede">
            {siteConfig.name} is a creative technology and digital solutions agency. We bring strategy, design,
            engineering and production together so that businesses can present themselves better and operate more
            effectively.
          </p>
          <p>
            We&rsquo;re a young studio and we say so plainly. The work in our portfolio is concept and demonstration
            work, made to show how we think and what we can build. When we have real case studies to share, they will
            appear alongside it — clearly labelled.
          </p>
        </div>
        <div className="about-intro__visual" data-mask="">
          <div className="mask__in" data-parallax="0.6">
            <ConceptArt kind="identity" />
          </div>
        </div>
      </section>

      <section className="section shell" aria-labelledby="philosophy-title">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">01</span>How we think
        </p>
        <Lines id="philosophy-title" className="display display--l" lines={["SIX BELIEFS.", "ONE STANDARD."]} />
        <ol className="phil">
          {PHILOSOPHY.map(([t, d], i) => (
            <li key={t} data-reveal="">
              <span className="phil__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--tight shell" aria-labelledby="caps-title">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">02</span>Capabilities
        </p>
        <Lines id="caps-title" className="display display--l" lines={["WHAT WE", "BRING."]} />
        <ul className="acaps">
          {services.map((s) => (
            <li key={s.slug} data-reveal="">
              <Link href={`/services/${s.slug}`}>
                <span className="mono">{s.number}</span>
                <span className="acaps__name">{s.name}</span>
                <span className="acaps__pitch">{s.pitch}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ProcessSection index="03" id="about-process" />
      <FinalCta lines={["LET’S MAKE", "SOMETHING."]} />
    </>
  );
}
