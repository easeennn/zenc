"use client";

import Link from "next/link";

/** Route-level error boundary: a branded recovery screen instead of a crash. */
export default function RouteError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="shell section" style={{ minHeight: "60vh", display: "grid", alignContent: "center", gap: 24 }}>
      <p className="eyebrow">Something went wrong</p>
      <h1 className="display display--l">THAT DIDN&rsquo;T LOAD.</h1>
      <p className="lede">An unexpected error interrupted this page. You can try again, or head back to the homepage.</p>
      <div className="btn-row">
        <button type="button" className="btn btn--solid" onClick={() => reset()}>
          <span className="btn__label">Try again</span>
        </button>
        <Link href="/" className="btn btn--ghost">
          <span className="btn__label">Back home</span>
        </Link>
      </div>
    </section>
  );
}
