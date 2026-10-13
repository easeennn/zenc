import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionRoot } from "@/components/motion/MotionRoot";

// Three families, five files total: condensed display, readable body, technical mono.
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: {
    default: `${siteConfig.name} — ${siteConfig.descriptor}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

/**
 * Runs before paint: marks the document as motion-capable (unless the visitor
 * prefers reduced motion) and arms a failsafe — if the animation layer hasn't
 * initialised after 4.5s, everything is revealed so content is never stranded.
 */
const motionBootstrap = `(function(){try{var d=document.documentElement;if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');setTimeout(function(){if(!window.__zenMotionReady)d.classList.add('motion-failed')},4500)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = siteConfig.url
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: absoluteUrl("/"),
        description: siteConfig.description,
      }
    : null;

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
        {orgJsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        )}
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <MotionRoot />
      </body>
    </html>
  );
}
