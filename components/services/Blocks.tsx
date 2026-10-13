import Link from "next/link";
import type { ReactNode } from "react";
import { Lines } from "@/components/ui/Lines";
import { ButtonLink } from "@/components/ui/Button";
import { Arrow } from "@/components/ui/Arrow";
import { ProjectTile } from "@/components/portfolio/ProjectTile";
import { FinalCta } from "@/components/home/FinalCta";
import { adjacentServices, type Service } from "@/lib/services";
import { projectsIn, toCard } from "@/lib/projects";

/** Reusable service-page bricks. Each page composes them differently. */

export function Crumb({ name }: { name: string }) {
  return (
    <p className="crumb" data-reveal="">
      <Link href="/services">Services</Link> <i aria-hidden="true">/</i> <span>{name}</span>
    </p>
  );
}

export function WhoItHelps({ service, title = "Who it helps" }: { service: Service; title?: string }) {
  return (
    <div className="sblock">
      <h2 className="sblock__h" data-reveal="">{title}</h2>
      <ul className="bullets" data-reveal="">
        {service.whoItHelps.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </div>
  );
}

export function Deliverables({ service, title = "What we deliver", numbered = true }: { service: Service; title?: string; numbered?: boolean }) {
  return (
    <div className="sblock">
      <h2 className="sblock__h" data-reveal="">{title}</h2>
      <ul className="dlist" data-reveal="">
        {service.deliverables.map((d, i) => (
          <li key={d}>
            {numbered && <span className="mono">{String(i + 1).padStart(2, "0")}</span>}
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ValueGrid({ service, title = "The business value" }: { service: Service; title?: string }) {
  return (
    <div className="sblock">
      <h2 className="sblock__h" data-reveal="">{title}</h2>
      <ul className="vgrid">
        {service.value.map((v, i) => (
          <li key={v.title} data-reveal="">
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ApproachSteps({ service, title = "How we work" }: { service: Service; title?: string }) {
  return (
    <div className="sblock">
      <h2 className="sblock__h" data-reveal="">{title}</h2>
      <ol className="asteps">
        {service.approach.map((a, i) => (
          <li key={a.title} data-reveal="">
            <span className="asteps__n">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RelatedWork({ service, title = "Example work" }: { service: Service; title?: string }) {
  const items = service.categories.flatMap((c) => projectsIn(c));
  const unique = Array.from(new Map(items.map((p) => [p.slug, p])).values());
  return (
    <section className="section section--tight shell" aria-label={title}>
      <h2 className="sblock__h" data-reveal="">{title}</h2>
      {unique.length > 0 ? (
        <ul className="related" data-reveal="">
          {unique.map((p, i) => (
            <li key={p.slug}>
              <ProjectTile project={toCard(p)} ratio={i === 0 && unique.length > 1 ? "wide" : "wide"} sizes="(min-width: 1024px) 40vw, 100vw" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="note">Work for this service will appear here as projects are published.</p>
      )}
    </section>
  );
}

export function ServicePager({ slug }: { slug: string }) {
  const { prev, next } = adjacentServices(slug);
  return (
    <nav className="shell cs-pager" aria-label="More services">
      <Link href={`/services/${prev.slug}`} className="cs-pager__link cs-pager__link--prev">
        <span className="mono">Previous service</span>
        <span className="cs-pager__title">
          <Arrow direction="left" /> {prev.name}
        </span>
      </Link>
      <Link href={`/services/${next.slug}`} className="cs-pager__link cs-pager__link--next">
        <span className="mono">Next service</span>
        <span className="cs-pager__title">
          {next.name} <Arrow />
        </span>
      </Link>
    </nav>
  );
}

export function ServiceCta({ service, lines }: { service: Service; lines?: string[] }) {
  return (
    <>
      <ServicePager slug={service.slug} />
      <FinalCta
        lines={lines ?? ["LET’S TALK", service.short.toUpperCase() + "."]}
        text={`Tell us about your ${service.short.toLowerCase()} project — goals, audience, timeline. We'll respond with how we'd approach it.`}
        label={`Enquire about ${service.short.toLowerCase()}`}
      />
    </>
  );
}

export function Split({ left, right, className = "" }: { left: ReactNode; right: ReactNode; className?: string }) {
  return (
    <section className={`section section--tight shell split ${className}`}>
      <div className="split__l">{left}</div>
      <div className="split__r">{right}</div>
    </section>
  );
}

export function ServiceHeader({
  service,
  lines,
  lede,
  children,
  mega = false,
}: {
  service: Service;
  lines: string[];
  lede: string;
  children?: ReactNode;
  mega?: boolean;
}) {
  return (
    <header className="shead2 shell">
      <Crumb name={service.name} />
      <p className="eyebrow" data-reveal="">
        <span className="eyebrow__idx">{service.number}</span>
        {service.name}
        {service.flagship && <span className="chip chip--solid chip--inline">Flagship</span>}
      </p>
      <Lines as="h1" load className={`display ${mega ? "display--mega" : "display--xl"}`} lines={lines} />
      <div className="shead2__row" data-reveal="">
        <p className="lede">{lede}</p>
        {children ?? (
          <div className="btn-row">
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <ButtonLink href="/work" variant="ghost">
              See related work
            </ButtonLink>
          </div>
        )}
      </div>
    </header>
  );
}
