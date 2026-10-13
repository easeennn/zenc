"use client";

import { scrollToTop } from "@/lib/scroll";
import { Arrow } from "@/components/ui/Arrow";

export function BackToTop() {
  return (
    <button type="button" className="btt" onClick={scrollToTop}>
      <span>Back to top</span>
      <Arrow direction="up-right" className="btt__arrow" />
    </button>
  );
}
