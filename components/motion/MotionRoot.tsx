"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { getLenis, setLenis } from "@/lib/scroll";

/**
 * The single GSAP / ScrollTrigger / Lenis orchestrator for the whole site.
 *
 * Pages stay Server Components. They opt into motion declaratively with data
 * attributes, and this component (mounted once in the root layout) wires them
 * up per route inside a gsap.context — so every tween and ScrollTrigger is
 * scoped, reverted on route change / unmount, and never duplicated by React
 * strict mode or hot reload.
 *
 *   data-lines [data-lines-load]   masked line-by-line headline reveal
 *   data-reveal                    fade + rise, batched for efficiency
 *   data-mask [data-mask-load]     clip-path image reveal with settling scale
 *   data-parallax="0.6"            restrained parallax (≥ 900px wide only)
 *   data-hero-fade                 supporting hero details on load
 *   data-pointer data-depth="1"    gentle pointer response (fine pointers only)
 *
 * Responsibility split: GSAP = scroll + sequenced reveals; Motion for React =
 * UI state (nav, menu, filters, crossfades). Neither touches the other's nodes.
 *
 * CSS hides these elements with `visibility:hidden` (never transforms) only
 * while `html.motion` is set, so GSAP owns every transform and there is no
 * CSS/GSAP conflict. A failsafe in the root layout reveals everything if this
 * module never initialises.
 */

declare global {
  interface Window {
    __zenMotionReady?: boolean;
  }
}

const REDUCED = "(prefers-reduced-motion: reduce)";
let registered = false;

/** Register plugins once and keep GSAP's console quiet — every call below is also guarded. */
function register() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
  ScrollTrigger.config({ ignoreMobileResize: true });
  registered = true;
}

const masksInner = (m: HTMLElement) => Array.from(m.querySelectorAll<HTMLElement>(".mask__in"));

export function MotionRoot() {
  const pathname = usePathname();

  // ── Smooth scrolling (once). Lenis only when motion is allowed. ─────────────
  useEffect(() => {
    register();
    const mq = window.matchMedia(REDUCED);
    let lenis: Lenis | null = null;
    let tick: ((t: number) => void) | null = null;

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      setLenis(lenis);
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };
    const stop = () => {
      if (!lenis) return;
      if (tick) gsap.ticker.remove(tick);
      lenis.destroy();
      lenis = null;
      setLenis(null);
      gsap.ticker.lagSmoothing(500, 33);
    };
    const sync = () => (mq.matches ? stop() : start());

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      stop();
    };
  }, []);

  // ── Per-route choreography, fully scoped and reverted on cleanup. ───────────
  useEffect(() => {
    register();
    const root = document.documentElement;

    if (window.matchMedia(REDUCED).matches) {
      root.classList.remove("motion");
      window.__zenMotionReady = true;
      return;
    }
    root.classList.add("motion");

    // Land at the top of the new page for Lenis as well as the browser.
    getLenis()?.scrollTo(0, { immediate: true, force: true });

    const q = <T extends Element>(selector: string) => Array.from(document.querySelectorAll<T>(selector));
    const mm = gsap.matchMedia();
    let ctx: gsap.Context | undefined;

    // Safety net: if anything in the choreography throws, never leave content hidden.
    try {
    ctx = gsap.context(() => {
      const lineHosts = q<HTMLElement>("[data-lines]");
      const loadLines = lineHosts.filter((el) => el.hasAttribute("data-lines-load"));
      const scrollLines = lineHosts.filter((el) => !el.hasAttribute("data-lines-load"));
      const loadMasks = q<HTMLElement>("[data-mask-load]");
      const scrollMasks = q<HTMLElement>("[data-mask]").filter((el) => !el.hasAttribute("data-mask-load"));
      const heroFades = q<HTMLElement>("[data-hero-fade]");
      const reveals = q<HTMLElement>("[data-reveal]").filter((el) => !el.hasAttribute("data-hero-fade"));

      const inners = (host: HTMLElement) => Array.from(host.querySelectorAll<HTMLElement>(".line__in"));

      // Initial states — set in one place so nothing flashes. Empty selections are skipped.
      const allMasks = [...loadMasks, ...scrollMasks];
      const lineInners = lineHosts.flatMap(inners);
      const maskInners = allMasks.flatMap(masksInner);
      const hidden = [...heroFades, ...reveals];
      if (lineInners.length) gsap.set(lineInners, { yPercent: 112, autoAlpha: 1 });
      if (allMasks.length) gsap.set(allMasks, { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 1 });
      if (maskInners.length) gsap.set(maskInners, { scale: 1.14 });
      if (hidden.length) gsap.set(hidden, { autoAlpha: 0, y: 26 });

      // Hero / above-the-fold sequence — usable immediately, ~1.4s total.
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      const loadInners = loadLines.flatMap(inners);
      if (loadInners.length) {
        tl.to(loadInners, { yPercent: 0, duration: 1.1, stagger: 0.09 }, 0.05);
      }
      if (loadMasks.length) {
        tl.to(loadMasks, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, stagger: 0.11, ease: "power3.inOut" }, 0.12);
        tl.to(
          loadMasks.flatMap(masksInner),
          { scale: 1, duration: 1.5, stagger: 0.11, ease: "power2.out" },
          0.12,
        );
      }
      if (heroFades.length) {
        tl.to(heroFades, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06 }, 0.55);
      }

      // Headlines further down the page.
      scrollLines.forEach((host) => {
        const els = inners(host);
        if (!els.length) return;
        gsap.to(els, {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: { trigger: host, start: "top 88%", once: true },
        });
      });

      // Masked image reveals.
      scrollMasks.forEach((el) => {
        const inner = masksInner(el);
        const t = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 86%", once: true } });
        t.to(el, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power3.inOut" }, 0);
        if (inner.length) t.to(inner, { scale: 1, duration: 1.5, ease: "power2.out" }, 0);
      });

      // Everything else: one batched trigger — cheaper than N individual ones.
      if (reveals.length) {
        ScrollTrigger.batch(reveals, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true }),
        });
      }

      window.__zenMotionReady = true;
    }, document.body);

    // Desktop-only enhancements, auto-reverted when the query stops matching.
    mm.add("(min-width: 900px)", () => {
      q<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "1") || 1;
        gsap.fromTo(
          el,
          { yPercent: -7 * speed },
          {
            yPercent: 7 * speed,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    mm.add("(hover: hover) and (pointer: fine) and (min-width: 900px)", () => {
      const host = document.querySelector<HTMLElement>("[data-hero]");
      const targets = q<HTMLElement>("[data-pointer]");
      if (!host || !targets.length) return;
      const setters = targets.map((el) => {
        const depth = parseFloat(el.dataset.depth || "1");
        return {
          depth,
          x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        };
      });
      const onMove = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        setters.forEach((s) => {
          s.x(nx * 14 * s.depth);
          s.y(ny * 10 * s.depth);
        });
      };
      const onLeave = () => setters.forEach((s) => (s.x(0), s.y(0)));
      host.addEventListener("pointermove", onMove, { passive: true });
      host.addEventListener("pointerleave", onLeave);
      return () => {
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerleave", onLeave);
      };
    });

    } catch {
      root.classList.add("motion-failed");
      window.__zenMotionReady = true;
    }

    // Measurements depend on font metrics — refresh once they settle.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      mm.revert();
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
