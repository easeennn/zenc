import type { ElementType } from "react";
import { cn } from "@/lib/utils";

interface Props {
  lines: string[];
  as?: ElementType;
  className?: string;
  /** Play on page load (hero) instead of on scroll. */
  load?: boolean;
  id?: string;
}

/**
 * Editorial headline split into masked lines. Text stays a single readable
 * sentence for assistive tech; the GSAP motion layer (MotionRoot) animates
 * `.line__in` when `data-lines` is present. Without JS or with reduced motion
 * it is simply static text.
 */
export function Lines({ lines, as: Tag = "h2", className, load, id }: Props) {
  return (
    <Tag
      id={id}
      className={cn("lines", className)}
      data-lines=""
      {...(load ? { "data-lines-load": "" } : {})}
    >
      {lines.map((line, i) => (
        <span key={i}>
          <span className="line">
            <span className="line__in">{line}</span>
          </span>
          {i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
