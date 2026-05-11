/**
 * Sticky two-square brand badge in the top-left corner.
 * Top: cyan square with serif italic "SG"
 * Bottom: hot-pink square with display caps "siffat"
 * Mirrors i-D's stacked i- / -d logo block.
 */
export default function SGBlock() {
  return (
    <div
      aria-label="Siffat Gandhi — Spotlight"
      className="fixed left-0 top-0 z-50 hidden md:flex md:flex-col"
      style={{ width: 150 }}
    >
      <div
        className="flex items-center justify-center bg-cyan text-ink"
        style={{ height: 130 }}
      >
        <span
          className="font-garamond italic leading-none"
          style={{ fontSize: "84px", letterSpacing: "-0.04em" }}
        >
          SG
        </span>
      </div>
      <div
        className="flex items-end justify-center bg-pink text-paper"
        style={{ height: 130, paddingBottom: 14 }}
      >
        <span
          className="font-display lowercase leading-none"
          style={{ fontSize: "42px", letterSpacing: "-0.04em" }}
        >
          siffat
        </span>
      </div>
    </div>
  );
}
