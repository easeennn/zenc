"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categories, type CategorySlug, type ProjectCardData } from "@/lib/projects";
import { ProjectTile } from "./ProjectTile";
import { ButtonLink } from "@/components/ui/Button";

type Filter = "all" | CategorySlug;

/**
 * Editorial 12-column rhythm: 7+5 / 4+4+4 / 5+7 / full-bleed feature, repeating.
 * Spans are assigned by position in the *filtered* list so any subset still
 * composes into a balanced layout. Plain local state — no filtering library.
 */
const RHYTHM: { span: number; ratio: "wide" | "tall" | "square" | "cinema" }[] = [
  { span: 7, ratio: "wide" },
  { span: 5, ratio: "tall" },
  { span: 4, ratio: "square" },
  { span: 4, ratio: "square" },
  { span: 4, ratio: "square" },
  { span: 5, ratio: "tall" },
  { span: 7, ratio: "wide" },
  { span: 12, ratio: "cinema" },
];

function layoutFor(index: number, total: number) {
  if (total === 1) return { span: 12, ratio: "cinema" as const };
  if (total === 2) return { span: 6, ratio: "wide" as const };
  return RHYTHM[index % RHYTHM.length];
}

export function PortfolioGrid({ projects, showFilters = true }: { projects: ProjectCardData[]; showFilters?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["all", projects.length]]);
    categories.forEach((c) =>
      map.set(c.slug, projects.filter((p) => p.category === c.slug || p.alsoIn?.includes(c.slug)).length),
    );
    return map;
  }, [projects]);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter || p.alsoIn?.includes(filter))),
    [projects, filter],
  );

  const activeLabel = filter === "all" ? "all categories" : categories.find((c) => c.slug === filter)?.label;

  return (
    <div className="pgrid-wrap">
      {showFilters && (
        <div className="filters" data-reveal="">
          <p className="filters__label" id="filter-label">
            Filter by discipline
          </p>
          <div className="filters__row" role="group" aria-labelledby="filter-label">
            {(["all", ...categories.map((c) => c.slug)] as Filter[]).map((slug) => {
              const label = slug === "all" ? "All" : categories.find((c) => c.slug === slug)!.label;
              const pressed = filter === slug;
              return (
                <button
                  key={slug}
                  type="button"
                  className="filter"
                  aria-pressed={pressed}
                  onClick={() => setFilter(slug)}
                >
                  {pressed && (
                    <motion.span
                      layoutId={`filter-pill-${projects.length}`}
                      className="filter__pill"
                      transition={{ type: "spring", stiffness: 420, damping: 38 }}
                    />
                  )}
                  <span className="filter__text">
                    {label}
                    <sup>{counts.get(slug)}</sup>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? "project" : "projects"} in {activeLabel}.
          </p>
        </div>
      )}

      <div data-reveal="">
        {visible.length > 0 ? (
          <ul className="pgrid">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((p, i) => {
                const { span, ratio } = layoutFor(i, visible.length);
                return (
                  <motion.li
                    key={p.slug}
                    layout="position"
                    className="pgrid__item"
                    style={{ ["--span" as string]: span }}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectTile
                      project={p}
                      ratio={ratio}
                      priority={false}
                      sizes={span >= 7 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                    />
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        ) : (
          <div className="empty">
            <p className="empty__title">Nothing here yet.</p>
            <p>
              We haven&rsquo;t published {activeLabel} work yet. Have a project in this area in mind?
            </p>
            <div className="btn-row">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <button type="button" className="btn btn--ghost" onClick={() => setFilter("all")}>
                <span className="btn__label">Show all work</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
