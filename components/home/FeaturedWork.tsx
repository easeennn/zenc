import { SectionHead } from "@/components/ui/SectionHead";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ButtonLink } from "@/components/ui/Button";
import { projects, toCard } from "@/lib/projects";

export function FeaturedWork() {
  return (
    <section className="section shell" aria-labelledby="work-title">
      <SectionHead index="01" eyebrow="Selected work" id="work-title" lines={["WORK THAT", "SHOWS RANGE."]}>
        <p>
          A mixed portfolio of websites, software, identity, motion and video. Everything shown here is concept or
          demonstration work — labelled as such.
        </p>
      </SectionHead>
      <PortfolioGrid projects={projects.map(toCard)} />
      <div className="section__foot" data-reveal="">
        <ButtonLink href="/work" variant="ghost">
          View the full portfolio
        </ButtonLink>
      </div>
    </section>
  );
}
