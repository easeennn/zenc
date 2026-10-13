import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#f5f5f5",
          padding: 72,
          border: "1px solid rgba(255,255,255,0.14)",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#a4a4a4", textTransform: "uppercase" }}>
          {siteConfig.descriptor}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 120, fontWeight: 800, lineHeight: 0.92, letterSpacing: -3 }}>
          <span>WE BUILD</span>
          <span style={{ color: "#c5c7ca" }}>WHAT&apos;S NEXT.</span>
        </div>
        <div style={{ fontSize: 30, color: "#c5c7ca" }}>{siteConfig.name}</div>
      </div>
    ),
    size,
  );
}
