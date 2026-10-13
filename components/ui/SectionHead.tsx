import type { ReactNode } from "react";
import { Lines } from "./Lines";

interface Props {
  index?: string;
  eyebrow: string;
  lines: string[];
  children?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
}

export function SectionHead({ index, eyebrow, lines, children, id, as = "h2" }: Props) {
  return (
    <header className="shead">
      <p className="eyebrow" data-reveal="">
        {index && <span className="eyebrow__idx">{index}</span>}
        {eyebrow}
      </p>
      <div className="shead__row">
        <Lines lines={lines} as={as} id={id} className="display display--l" />
        {children && (
          <div className="shead__aside" data-reveal="">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
