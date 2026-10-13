import Link from "next/link";
import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { Arrow } from "@/components/ui/Arrow";
import { ProjectMedia } from "@/components/media/ProjectMedia";
import { getProject, toCard, type Project } from "@/lib/projects";
import { services } from "@/lib/services";
import { HeroFeature } from "./HeroFeature";

const FEATURE_SLUGS = ["maison-nuit", "ember-and-salt", "aurel-dental"];
const TILES = [
  { slug: "meridian-console", label: "Software" },
  { slug: "atlas-form", label: "Graphic design" },
  { slug: "signal-title-sequence", label: "Motion & video" },
];

const TICKER = [
  "Web development",
  "Software",
  "Brand identity",
  "Motion graphics",
  "Video editing",
  "Paid campaigns",
  "Social media",
  "Performance",
  "Accessibility",
  "Creative technology",
];

const must = (slug: string): Project => {
  const p = getProject(slug);
  if (!p) throw new Error(`Hero references unknown project "${slug}"`);
  return p;
};

/**
 * Signature hero: an asymmetric modular grid. Copy column (left), dominant
 * featured panel (centre), three supporting panels (right), capability ticker
 * (bottom). Structure is CSS Grid; absolute positioning is used only for
 * overlay details inside panels.
 */
export function Hero() {
  const features = FEATURE_SLUGS.map((s) => toCard(must(s)));
  const tiles = TILES.map((t) => ({ ...t, project: must(t.slug) }));

  return (
    <section className="hero" aria-labelledby="hero-title" data-hero="">
      <div className="hero__inner shell">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow" data-reveal="" data-hero-fade="">
              <span className="eyebrow__idx">●</span>Independent digital solutions studio
            </p>
            <Lines
              as="h1"
              id="hero-title"
              load
              className="display display--hero"
              lines={["WE BUILD", "WHAT’S", "NEXT."]}
            />
            <p className="hero__sub" data-reveal="" data-hero-fade="">
              Digital experiences, creative technology and growth systems built for brands ready to move forward.
            </p>
            <div className="btn-row" data-reveal="" data-hero-fade="">
              <ButtonLink href="/work">Explore Our Work</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Start a Project
              </ButtonLink>
            </div>
            <nav className="hero__index" aria-label="Services" data-reveal="" data-hero-fade="">
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>
                      <span>{s.number}</span>
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hero__feature">
            <HeroFeature items={features} />
          </div>

          {tiles.map(({ project, label }, i) => (
            <div key={project.slug} className={`hero__tile hero__tile--${i + 1}`}>
              <Link href={`/work/${project.slug}`} className="htile" data-mask="" data-mask-load="">
                <div className="mask__in">
                  <div className="htile__zoom" data-pointer="" data-depth={String(0.4 + i * 0.25)}>
                    <ProjectMedia art={project.art} image={project.media?.image} sizes="(min-width: 1100px) 22vw, 50vw" priority />
                  </div>
                </div>
                <span className="htile__label">
                  <span>{String(i + 2).padStart(2, "0")}</span>
                  {label}
                </span>
                <span className="htile__go" aria-hidden="true">
                  <Arrow direction="up-right" />
                </span>
                <span className="sr-only">: {project.title}, {project.type}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__ticker" data-reveal="" data-hero-fade="">
        <Marquee items={TICKER} label="Capabilities" />
      </div>
    </section>
  );
}
