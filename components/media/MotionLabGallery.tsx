"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { motionKinds, type MotionItem, type MotionKind } from "@/lib/motion-lab";
import { VideoPlayer } from "./VideoPlayer";
import { ConceptArt } from "./ConceptArt";
import { lockScroll } from "@/lib/scroll";
import { Arrow } from "@/components/ui/Arrow";

type Filter = "all" | MotionKind;

/**
 * Motion Lab gallery: kind filters, one large feature, a masonry-style grid of
 * mixed ratios and a native <dialog> lightbox (focus trap, Esc, focus return and
 * inert background all come from the platform). Nothing autoplays; the lightbox
 * mounts a player only after the visitor opens it.
 */
export function MotionLabGallery({ items }: { items: MotionItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<MotionItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = useMemo(() => (filter === "all" ? items : items.filter((i) => i.kind === filter)), [items, filter]);
  const [feature, ...rest] = visible;

  const open = (item: MotionItem) => {
    setActive(item);
    lockScroll(true);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const onClosed = () => {
    setActive(null);
    lockScroll(false);
  };

  const countFor = (k: Filter) => (k === "all" ? items.length : items.filter((i) => i.kind === k).length);

  return (
    <div className="mgal">
      <div className="filters" data-reveal="">
        <p className="filters__label" id="mfilter-label">Filter by type</p>
        <div className="filters__row" role="group" aria-labelledby="mfilter-label">
          {(["all", ...motionKinds] as Filter[]).map((k) => (
            <button key={k} type="button" className="filter" aria-pressed={filter === k} onClick={() => setFilter(k)}>
              {filter === k && (
                <motion.span layoutId="mfilter-pill" className="filter__pill" transition={{ type: "spring", stiffness: 420, damping: 38 }} />
              )}
              <span className="filter__text">
                {k === "all" ? "All" : k}
                <sup>{countFor(k)}</sup>
              </span>
            </button>
          ))}
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "piece" : "pieces"}.
        </p>
      </div>

      <div data-reveal="">
        {feature ? (
          <>
            <motion.figure key={feature.slug} className="mfeat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <VideoPlayer title={feature.title} art={feature.art} artVariant={feature.artVariant} ratio="16 / 9" src={feature.video?.src} poster={feature.video?.poster} />
              <figcaption className="mfeat__cap">
                <div>
                  <p className="mono">Feature / {feature.kind}</p>
                  <p className="mfeat__title">{feature.title}</p>
                  <p>{feature.caption}</p>
                </div>
                <div className="mfeat__actions">
                  <span className="stamp">{feature.status}</span>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={() => open(feature)}>
                    <span className="btn__label">Expand</span>
                  </button>
                </div>
              </figcaption>
            </motion.figure>

            {rest.length > 0 && (
              <ul className="mgrid">
                <AnimatePresence initial={false} mode="popLayout">
                  {rest.map((m) => (
                    <motion.li
                      key={m.slug}
                      layout="position"
                      className="mgrid__item"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <button type="button" className="mcard" onClick={() => open(m)} aria-label={`Open ${m.title}`}>
                        <span className="mcard__media" style={{ aspectRatio: m.ratio }}>
                          <span className="mcard__zoom">
                            <ConceptArt kind={m.art} variant={m.artVariant} />
                          </span>
                          <span className="mcard__play" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l11-6.5Z" fill="currentColor" /></svg>
                          </span>
                          <span className="tile__badge">{m.status}</span>
                        </span>
                        <span className="mcard__meta">
                          <span className="mono">{m.kind}</span>
                          <span className="mcard__title">{m.title}</span>
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </>
        ) : (
          <div className="empty">
            <p className="empty__title">Nothing here yet.</p>
            <p>No pieces in this category have been published.</p>
          </div>
        )}
      </div>

      <dialog ref={dialog} className="lightbox" onClose={onClosed} onClick={(e) => e.target === dialog.current && close()} aria-label={active ? active.title : "Video viewer"}>
        {active && (
          <div className="lightbox__inner">
            <div className="lightbox__bar">
              <div>
                <p className="mono">{active.kind}</p>
                <p className="lightbox__title">{active.title}</p>
              </div>
              <button type="button" className="roundbtn" onClick={close} aria-label="Close viewer">
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" /></svg>
              </button>
            </div>
            <div className="lightbox__media" style={{ ["--r" as string]: active.ratio.replace(/\s/g, "") }}>
              <VideoPlayer title={active.title} art={active.art} artVariant={active.artVariant} ratio={active.ratio} src={active.video?.src} poster={active.video?.poster} autoPlay />
            </div>
            <p className="lightbox__cap">{active.caption}</p>
            {active.projectSlug && (
              <Link href={`/work/${active.projectSlug}`} className="textlink" onClick={close}>
                View the related project <Arrow />
              </Link>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}
