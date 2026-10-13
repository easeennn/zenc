/**
 * Central site configuration. Real agency details are inserted here once they
 * exist — nothing is invented. `null` / empty values make the UI fall back to
 * honest wording (e.g. "use the project form") instead of fake details.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Zen-C Solutions",
  shortName: "Zen-C",
  descriptor: "Independent digital solutions studio",
  tagline: "We build what's next.",
  description:
    "Zen-C Solutions is a digital solutions studio: web development, software, graphic design, motion graphics, video, advertising and social media — built for brands ready to move forward.",

  /** Production origin, e.g. https://example.com — set via NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,

  contact: {
    email: null as string | null,
    phone: null as string | null,
    location: null as string | null,
  },

  /** Add real profiles only: { label: "Instagram", href: "https://…" } */
  socials: [] as { label: string; href: string }[],

  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Motion Lab", href: "/motion-lab" },
  ] satisfies NavItem[],

  cta: { label: "Start a Project", href: "/contact" },

  /** Budget bands shown in the inquiry form (optional field). Edit currency to taste. */
  budgetBands: [
    "Not sure yet",
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $15,000",
    "$15,000+",
  ],

  timelines: [
    "Flexible",
    "As soon as possible",
    "Within 1 month",
    "1 – 3 months",
    "3+ months",
  ],
} as const;

export function absoluteUrl(path = "/"): string | undefined {
  return siteConfig.url ? `${siteConfig.url}${path}` : undefined;
}

/** Canonical alternates are emitted only once a real production origin is configured. */
export function canonicalFor(path: string) {
  return siteConfig.url ? { canonical: path } : undefined;
}
