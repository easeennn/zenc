import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "text";
  className?: string;
  arrow?: boolean;
}

/** Link styled as a button. Real route or external URL — never a dead control. */
export function ButtonLink({ href, children, variant = "solid", className, arrow = true }: Props) {
  const cls = cn("btn", `btn--${variant}`, className);
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && (
        <span className="btn__arrow">
          <Arrow />
        </span>
      )}
    </>
  );
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a className={cls} href={href} rel="noopener noreferrer" target={href.startsWith("http") ? "_blank" : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
