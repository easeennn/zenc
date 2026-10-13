"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { lockScroll } from "@/lib/scroll";
import { Arrow } from "@/components/ui/Arrow";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/**
 * Navigation. Motion for React owns the UI motion here (active pill, menu
 * presence, button feedback). The entrance is a CSS animation so the header is
 * never hidden if JavaScript is slow or disabled.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  // Compact surface once the page leaves the top — observer, not a scroll listener.
  useEffect(() => {
    const el = sentinel.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggle.current?.focus();
  }, []);

  // Menu: scroll lock, Escape, focus trap, focus restore.
  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const root = menu.current;
    const focusables = () =>
      Array.from(root?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = [toggle.current, ...focusables()].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [open, close]);

  const links = [...siteConfig.nav, siteConfig.cta];

  return (
    <>
      <div ref={sentinel} className="header-sentinel" aria-hidden="true" />
      <header className={`header${scrolled ? " header--scrolled" : ""}${open ? " header--open" : ""}`} data-nav="">
        <div className="header__inner">
          <Link href="/" className="wordmark" aria-label={`${siteConfig.name} — home`} onClick={() => open && setOpen(false)}>
            <span className="wordmark__mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path d="M4 4h16L4 20h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
              </svg>
            </span>
            <span className="wordmark__text">
              ZEN<span>-</span>C
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <ul>
              {siteConfig.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="nav__link" aria-current={active ? "page" : undefined}>
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="nav__pill"
                          transition={{ type: "spring", stiffness: 420, damping: 38 }}
                        />
                      )}
                      <span className="nav__text">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header__actions">
            <motion.div whileTap={{ scale: 0.97 }} className="header__cta-wrap">
              <Link href={siteConfig.cta.href} className="btn btn--solid btn--sm header__cta">
                <span className="btn__label">{siteConfig.cta.label}</span>
                <span className="btn__arrow">
                  <Arrow />
                </span>
              </Link>
            </motion.div>
            <button
              ref={toggle}
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="menu-btn__label" aria-hidden="true">{open ? "Close" : "Menu"}</span>
              <span className="menu-btn__icon" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menu}
            className="mmenu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              <ul className="mmenu__list">
                {links.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className="mmenu__link"
                    >
                      <span className="mmenu__idx">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item.label}</span>
                      <Arrow className="mmenu__arrow" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <p className="mmenu__foot">{siteConfig.descriptor}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
