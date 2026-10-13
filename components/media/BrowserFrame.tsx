import type { ReactNode } from "react";

/** Minimal browser chrome for presenting website concepts. */
export function BrowserFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="bframe">
      <div className="bframe__bar" aria-hidden="true">
        <span className="bframe__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="bframe__url">{label}</span>
      </div>
      <div className="bframe__screen">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="pframe">
      <div className="pframe__notch" aria-hidden="true" />
      <div className="pframe__screen">{children}</div>
    </div>
  );
}
