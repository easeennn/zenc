import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { Arrow } from "@/components/ui/Arrow";
import { ProjectMedia } from "@/components/media/ProjectMedia";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { FinalCta } from "@/components/home/FinalCta";
import { adjacentProjects, categoryLabel, getProject, projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { canonicalFor } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — ${p.type}`,
    description: p.summary,
    alternates: canonicalFor(`/work/${p.slug}`),
    openGraph: { title: `${p.title} — ${p.type}`, description: p.summary },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const { prev, next } = adjacentProjects(p.slug);
  const related = services.filter((s) => s.categories.includes(p.category) || p.alsoIn?.some((c) => s.categories.includes(c)));
  const video = p.media?.video;

  return (
    <article>
      <header className="cs-head shell">
        <Link href="/work" className="backlink" data-reveal="">
          <Arrow direction="left" /> All work
        </Link>
        <p className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">{p.number}</span>
          {categoryLabel(p.category)}
        </p>
        <Lines as="h1" load className="display display--mega" lines={[p.title.toUpperCase()]} />
        <div className="cs-head__row" data-reveal="">
          <p className="lede">{p.summary}</p>
          <span className="stamp">{p.status}</span>
        </div>
      </header>

      <section className="shell" aria-label="Project hero">
        <div className="cs-hero" data-mask="" data-mask-load="">
          <div className="mask__in">
            {video ? (
              <VideoPlayer title={p.title} art={p.art} src={video.src} poster={video.poster} />
            ) : (
              <div className="cs-hero__media" data-parallax="0.5">
                <ProjectMedia art={p.art} image={p.media?.image} priority sizes="100vw" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="shell cs-meta" aria-label="Project details">
        <dl>
          <div data-reveal="">
            <dt>Category</dt>
            <dd>{categoryLabel(p.category)}</dd>
          </div>
          <div data-reveal="">
            <dt>Project type</dt>
            <dd>{p.type}</dd>
          </div>
          <div data-reveal="">
            <dt>Status</dt>
            <dd>{p.status}</dd>
          </div>
          {related.length > 0 && (
            <div data-reveal="">
              <dt>Related service</dt>
              <dd>
                {related.map((s, i) => (
                  <span key={s.slug}>
                    {i > 0 && ", "}
                    <Link href={`/services/${s.slug}`}>{s.short}</Link>
                  </span>
                ))}
              </dd>
            </div>
          )}
          {p.liveUrl && (
            <div data-reveal="">
              <dt>Live site</dt>
              <dd>
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit ↗
                </a>
              </dd>
            </div>
          )}
        </dl>
      </section>

      <section className="section section--tight shell cs-body">
        {p.objective && (
          <div className="cs-block" data-reveal="">
            <h2 className="cs-block__h">
              <span className="mono">01</span>Objective
            </h2>
            <p className="lede">{p.objective}</p>
          </div>
        )}
        {p.approach && p.approach.length > 0 && (
          <div className="cs-block" data-reveal="">
            <h2 className="cs-block__h">
              <span className="mono">02</span>Concept &amp; approach
            </h2>
            <ul className="bullets">
              {p.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        )}
        {p.deliverables && p.deliverables.length > 0 && (
          <div className="cs-block" data-reveal="">
            <h2 className="cs-block__h">
              <span className="mono">03</span>Deliverables
            </h2>
            <ul className="chips">
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        )}
        {p.technical && p.technical.length > 0 && (
          <div className="cs-block" data-reveal="">
            <h2 className="cs-block__h">
              <span className="mono">04</span>Technical details
            </h2>
            <ul className="bullets">
              {p.technical.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
        {p.demonstrates && (
          <div className="cs-block" data-reveal="">
            <h2 className="cs-block__h">
              <span className="mono">05</span>What it demonstrates
            </h2>
            <p>{p.demonstrates}</p>
            <p className="note">
              This is a {p.status.toLowerCase()} created by Zen-C. It does not represent a client engagement or
              commercial results.
            </p>
          </div>
        )}
      </section>

      <section className="shell section section--tight" aria-labelledby="visuals-title">
        <h2 id="visuals-title" className="eyebrow" data-reveal="">
          <span className="eyebrow__idx">—</span>Selected visuals
        </h2>
        <div className="cs-gallery">
          <figure className="cs-gallery__a" data-mask="">
            <div className="mask__in">
              <ProjectMedia art={p.art} image={p.media?.image} variant={1} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </figure>
          <figure className="cs-gallery__b" data-mask="">
            <div className="mask__in">
              <ProjectMedia art={p.art} image={p.media?.image} variant={2} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </figure>
        </div>
      </section>

      <nav className="shell cs-pager" aria-label="More projects">
        <Link href={`/work/${prev.slug}`} className="cs-pager__link cs-pager__link--prev">
          <span className="mono">Previous</span>
          <span className="cs-pager__title">
            <Arrow direction="left" /> {prev.title}
          </span>
        </Link>
        <Link href={`/work/${next.slug}`} className="cs-pager__link cs-pager__link--next">
          <span className="mono">Next</span>
          <span className="cs-pager__title">
            {next.title} <Arrow />
          </span>
        </Link>
      </nav>

      <FinalCta
        lines={["WANT SOMETHING", "LIKE THIS?"]}
        text={`Tell us about your ${categoryLabel(p.category).toLowerCase()} project and we'll explore an approach together.`}
        label="Discuss a similar project"
      />
      <div className="sr-only">
        <ButtonLink href="/work">Back to all work</ButtonLink>
      </div>
    </article>
  );
}
