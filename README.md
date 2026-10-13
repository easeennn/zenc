# Zen-C Solutions — website

Next.js (App Router) · React 19 · TypeScript (strict) · GSAP + ScrollTrigger · Motion for React · Lenis · plain CSS design tokens.

## Run it

```bash
npm install
cp .env.example .env.local   # optional — see "Configuration"
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run typecheck && npm run lint
```

Requires Node 20.9+. No lockfile is committed (the project was authored in an environment without npm registry access) — `npm install` will create one; commit it.

## Routes

`/` · `/work` · `/work/[slug]` · `/services` · `/services/{web-development, software-development, graphic-design, motion-graphics, video-editing, advertising-campaigns, social-media-management}` · `/motion-lab` · `/about` · `/contact` · `/api/contact` · `sitemap.xml` · `robots.txt` · generated OG image · custom 404.

## Where things live

| Want to change…                  | Edit                                   |
| -------------------------------- | -------------------------------------- |
| Agency name, nav, email, socials | `lib/site-config.ts`                   |
| Portfolio projects               | `lib/projects.ts`                      |
| Service content                  | `lib/services.ts`                      |
| Motion Lab items / videos        | `lib/motion-lab.ts`                    |
| Colours, type, spacing, motion   | CSS variables at top of `app/globals.css` |
| Animation behaviour              | `components/motion/MotionRoot.tsx`     |

**Adding real work:** add/replace an entry in `lib/projects.ts`, drop images in `public/images/projects/<slug>/`, set `media.image` (and `liveUrl`, `status: "Live project"`). Videos go in `public/videos/` and are referenced via `media.video` / `lib/motion-lab.ts`. No component changes needed. Until a project has real media, a designed SVG placeholder (`components/media/ConceptArt.tsx`) is shown.

## Configuration (`.env.local`)

- `NEXT_PUBLIC_SITE_URL` — production origin. Enables canonical URLs, absolute sitemap URLs, `metadataBase`, Organization JSON-LD. Leave unset until the domain exists.
- `CONTACT_WEBHOOK_URL` — **server-only.** Validated inquiries are POSTed here as JSON. While unset, `/api/contact` returns 501 and the form tells the visitor their message was **not** sent (it never fakes success). To use an email provider instead, replace the `fetch` in `app/api/contact/route.ts` with the provider's SDK call, reading its key from a server-only env var.

## Honesty rules baked in

All portfolio items are labelled concept / demonstration / experiment projects. There are no invented clients, testimonials, metrics, awards, team bios, addresses, phone numbers or social links. `lib/site-config.ts` contact fields are `null` and the UI falls back to "use the project form" until you fill them.

## Motion architecture

- Pages are Server Components; they opt into motion with data attributes (`data-lines`, `data-reveal`, `data-mask`, `data-parallax`, `data-pointer`).
- `MotionRoot` (mounted once in the root layout) runs a single scoped `gsap.context` per route and reverts it on navigation, so there are no duplicated ScrollTriggers.
- Motion for React handles UI state only (nav pill, menu, filters, lightbox).
- Lenis runs only when motion is allowed and is stopped while the mobile menu is open.
- `prefers-reduced-motion`: no Lenis, no parallax, no reveals; all content is shown statically (CSS + JS paths both handled).
- Failsafe: if the animation layer hasn't initialised after 4.5 s, content is revealed automatically.

## Verification status (be honest before launch)

The project was authored where `npm install` was blocked, so **`next build`, `npm run lint`, GSAP, Lenis and real Motion were never executed.** What *was* checked, using stubbed `next/*` modules, the real components and Chromium:

- All 14 routes + 8 case studies server-render without errors.
- No horizontal overflow on any page at 320 / 360 / 390 / 768 / 1024 / 1440 px (with a wider stand-in font, so conservative).
- Browser tests on the real client components: portfolio filters, mobile menu (open, Escape, scroll lock, focus return), Motion Lab click-to-play (no video mounts before click), contact form validation, honest-failure and success states.
- Strict TypeScript across all source with framework types shimmed: no real type errors.
- Every route rendered client-side in React *development* mode at desktop and mobile widths: zero console errors or warnings (no invalid nesting, key or prop warnings).
- The motion choreography (`MotionRoot`) executed on all routes, with and without reduced motion, against a recording stand-in for GSAP/Lenis: no exceptions, no empty-target tweens, failsafe never triggered. (This validates our code paths, not GSAP's own behaviour.)

**Not verified — do these first:** `npm run build`, `npm run lint`, then eyeball the animations in a real browser; confirm Barlow Condensed / Manrope / IBM Plex Mono load via `next/font` and that the hero headline fits at common sizes (it was only checked with a wider fallback font); play the Motion Lab clips (the test browser lacked H.264); run Lighthouse on a production build. No performance, Core Web Vitals or accessibility scores are claimed.

## Robustness notes

- GSAP is configured with `nullTargetWarn: false` and every tween/set is guarded against empty selections; the whole choreography is wrapped in a safety net that reveals content (`motion-failed`) if anything ever throws.
- `app/error.tsx` and `app/global-error.tsx` provide branded recovery screens.
- `<html>` and `<body>` use `suppressHydrationWarning` so browser extensions that modify the DOM don't trigger dev hydration warnings.
- Scrollbars are themed (graphite thumb, silver on hover) via `::-webkit-scrollbar` with a standards-based fallback for Firefox.

## Placeholder media

`public/videos/*.mp4` and `public/images/motion/*.webp` are small generated typographic clips used as Motion Lab placeholders. Replace with real footage when available.
