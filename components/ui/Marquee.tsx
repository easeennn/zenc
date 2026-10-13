/** CSS-only ticker. Pauses on hover/focus, stops under reduced motion. */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <i aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="group" aria-label={label}>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
