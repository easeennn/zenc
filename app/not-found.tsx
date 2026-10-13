import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="nf shell">
      <p className="eyebrow">
        <span className="eyebrow__idx">404</span>Page not found
      </p>
      <h1 className="display display--xl">
        <span className="line">
          <span className="line__in">LOST IN</span>
        </span>{" "}
        <span className="line">
          <span className="line__in">THE GRID.</span>
        </span>
      </h1>
      <p className="lede">That page doesn&rsquo;t exist or has moved. Here are some good places to start.</p>
      <div className="btn-row">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/work" variant="ghost">
          Explore our work
        </ButtonLink>
        <ButtonLink href="/contact" variant="ghost">
          Start a project
        </ButtonLink>
      </div>
    </section>
  );
}
