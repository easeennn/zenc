import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitemaps need absolute URLs. Until NEXT_PUBLIC_SITE_URL is set this falls
  // back to localhost so the build still succeeds; set the real origin before launch.
  const base = siteConfig.url ?? "http://localhost:3000";
  const now = new Date();
  const staticRoutes = ["", "/work", "/services", "/motion-lab", "/about", "/contact"];

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      priority: r === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: now, priority: s.flagship ? 0.9 : 0.7 })),
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: now, priority: 0.6 })),
  ];
}
