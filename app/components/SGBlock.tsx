/**
 * Sticky brand badge.
 * Desktop: 150px wide stacked block in the top-left (cyan SG + pink siffaat).
 * Mobile: compact 56x56 cyan SG square in the top-left only.
 */
export default function SGBlock() {
  return (
    <>
      <div
        aria-label="Siffaat Gandhi — Spotlight"
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
            siffaat
          </span>
        </div>
      </div>

      <div
        aria-label="Siffaat Gandhi — Spotlight"
        className="fixed left-0 top-0 z-50 flex md:hidden items-center justify-center bg-cyan text-ink"
        style={{ width: 56, height: 56 }}
      >
        <span
          className="font-garamond italic leading-none"
          style={{ fontSize: "30px", letterSpacing: "-0.04em" }}
        >
          SG
        </span>
      </div>
    </>
  );
}
