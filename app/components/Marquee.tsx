"use client";

import { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  /** Seconds per full loop. Bigger = slower. */
  duration?: number;
  className?: string;
};

/**
 * Continuous text marquee. Duplicates the items inline twice and translates
 * the inner track by -50% over `duration` seconds so the loop is seamless.
 */
export default function Marquee({
  items,
  duration = 30,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={
        "relative w-full overflow-hidden bg-ink text-paper py-6 md:py-10 " +
        className
      }
    >
      <div
        className="marquee-track flex whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((pass) => (
          <div key={pass} className="flex shrink-0 items-center">
            {items.map((it, i) => (
              <span
                key={`${pass}-${i}`}
                className="flex items-center gap-8 md:gap-12 px-4 md:px-8 font-display uppercase leading-none tracking-tight2"
                style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
              >
                {it}
                <span className="text-pink" aria-hidden>
                  ·
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
