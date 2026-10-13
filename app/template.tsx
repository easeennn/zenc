/**
 * Re-mounts on every navigation, which gives each route a short opacity-only
 * entrance (CSS, under `html.motion`). Opacity only: no transform, so it can't
 * create layout shift or interfere with GSAP / fixed-position children.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
