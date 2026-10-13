import type Lenis from "lenis";

/**
 * Tiny registry so UI components (menu, back-to-top, lightbox) can cooperate
 * with Lenis smooth scrolling without importing it themselves.
 */
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis() {
  return instance;
}

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToTop() {
  if (instance) instance.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });
}

export function lockScroll(lock: boolean) {
  const root = document.documentElement;
  if (lock) {
    instance?.stop();
    root.style.overflow = "hidden";
  } else {
    instance?.start();
    root.style.overflow = "";
  }
}
