"use client";

/** Last-resort boundary (replaces the root layout), styled inline so it works without the app CSS. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#080808",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: 24,
        }}
      >
        <div>
          <p style={{ letterSpacing: "0.2em", fontSize: 12, color: "#a4a4a4", textTransform: "uppercase" }}>Zen-C Solutions</p>
          <h1 style={{ fontSize: "clamp(2rem, 8vw, 4rem)", margin: "12px 0 24px", textTransform: "uppercase" }}>Something went wrong.</h1>
          <button
            type="button"
            onClick={() => reset()}
            style={{ background: "#f5f5f5", color: "#080808", border: 0, borderRadius: 999, padding: "14px 28px", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
