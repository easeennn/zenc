import type { Metadata } from "next";
import { Lines } from "@/components/ui/Lines";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { projects, toCard } from "@/lib/projects";
import { canonicalFor } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected concept and demonstration projects from Zen-C Solutions across web development, e-commerce, software, graphic design, motion graphics, video, advertising and social media.",
  alternates: canonicalFor("/work"),
};

export default function WorkPage() {
  return (
    <>
      <section className="pagehead shell">
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">{String(projects.length).padStart(2, "0")}</span>Selected work
        </p>
        <Lines as="h1" load className="display display--mega" lines={["THE WORK."]} />
        <div className="pagehead__row" data-reveal="">
          <p className="lede">
            Websites, software, identity, motion and video — explored through concept and demonstration projects. Each
            is labelled honestly: these are fictional brands and internal experiments, not client engagements.
          </p>
        </div>
      </section>
      <section className="section section--tight shell" aria-label="Portfolio">
        <PortfolioGrid projects={projects.map(toCard)} />
      </section>
      <FinalCta lines={["HAVE SOMETHING", "IN MIND?"]} text="Tell us what you want to build — we'll tell you how we'd approach it." />
    </>
  );
}
