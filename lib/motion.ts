export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/**
 * Returns the local 0..1 progress for a tile entering with a given delay,
 * scaled so each tile reaches 1 by the end of its window.
 */
export function tileLocal(progress: number, delay: number, span = 1) {
  const denom = Math.max(0.0001, span - delay);
  return clamp01((progress - delay) / denom);
}

/**
 * Standard stagger-rise: tile starts 40px below, 0 opacity, scale 0.97;
 * ends at rest, opacity 1, scale 1. Easing eases-out so motion settles.
 */
export function staggerRise(
  progress: number,
  delay: number,
  span = 0.7,
): { transform: string; opacity: number } {
  const e = easeOutCubic(tileLocal(progress, delay, span));
  const y = (1 - e) * 40;
  const scale = 0.97 + e * 0.03;
  return {
    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
    opacity: 0.0 + e,
  };
}
