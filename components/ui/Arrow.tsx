export function Arrow({ className = "", direction = "right" }: { className?: string; direction?: "right" | "up-right" | "left" | "down" }) {
  const rotate = { right: 0, "up-right": -45, left: 180, down: 90 }[direction];
  return (
    <svg
      className={`arrow ${className}`}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
