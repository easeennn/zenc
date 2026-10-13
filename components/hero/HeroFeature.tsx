"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ProjectCardData } from "@/lib/projects";
import { categoryLabel } from "@/lib/projects";
import { ProjectMedia } from "@/components/media/ProjectMedia";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Dominant featured panel. Three website concepts crossfade (Motion for React);
 * the controls are real buttons, state is announced, nothing auto-advances.
 * The first frame is server-rendered so it is the LCP element with no JS.
 */
export function HeroFeature({ items }: { items: ProjectCardData[] }) {
  const [i, setI] = useState(0);
  const cur = items[i];
  const go = (n: number) => setI((n + items.length) % items.length);

  return (
    <div className="hfeature">
      <div className="hfeature__frame" data-mask="" data-mask-load="">
        <div className="mask__in">
          <div className="hfeature__stage" data-pointer="" data-depth="0.6">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={cur.slug}
                className="hfeature__slide"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectMedia art={cur.art} image={cur.image} priority sizes="(min-width: 1100px) 42vw, 100vw" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="hfeature__top">
          <span className="chip">Featured / {cur.number}</span>
          <span className="chip chip--solid">{cur.status}</span>
        </div>

        <div className="hfeature__bottom">
          <div className="hfeature__caption" aria-live="polite">
            <p className="hfeature__cat">{categoryLabel(cur.category)}</p>
            <p className="hfeature__title">{cur.title}</p>
          </div>
          <div className="hfeature__controls">
            <button type="button" className="roundbtn" onClick={() => go(i - 1)} aria-label="Previous featured project">
              <Arrow direction="left" />
            </button>
            <span className="hfeature__count" aria-hidden="true">
              {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button type="button" className="roundbtn" onClick={() => go(i + 1)} aria-label="Next featured project">
              <Arrow />
            </button>
          </div>
        </div>

        <Link href={`/work/${cur.slug}`} className="hfeature__open">
          <span className="sr-only">View case study: {cur.title}</span>
        </Link>
      </div>
    </div>
  );
}
