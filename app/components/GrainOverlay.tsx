/**
 * Fixed grain overlay sitting above all page content but below interactive
 * chrome (nav, cursor). The CSS class does all the animation work.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain-overlay pointer-events-none fixed inset-0 z-[30]"
    />
  );
}
