"use client";

import { useEffect, useRef } from "react";

type Props = {
  items?: string[];
  speed?: number;
  bg?: "acid" | "ink" | "blue";
};

const DEFAULT_ITEMS = [
  "ON FILM",
  "ON STAGE",
  "ON TAPE",
  "OFF SET",
  "EVERY ROLE",
  "FULL RANGE",
  "ONE LOOK",
  "MUMBAI 2026",
];

export default function V2Marquee({
  items = DEFAULT_ITEMS,
  speed = 32,
  bg = "acid",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Infinite marquee — duplicate content twice for seamless loop
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = trackRef.current;
    if (!el) return;
    if (reduced) {
      el.style.animationPlayState = "paused";
    }
  }, []);

  const bgClass =
    bg === "acid"
      ? "bg-v2acid text-v2bg"
      : bg === "blue"
        ? "bg-v2blue text-v2fg"
        : "bg-v2bg text-v2fg";

  return (
    <div
      className={`relative w-full overflow-hidden border-y-2 border-v2border ${bgClass}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-12 py-4 md:py-5"
        style={{
          animation: `v2marquee var(--marquee-speed) linear infinite`,
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-12 font-inter text-2xl md:text-4xl font-black uppercase tracking-[-0.02em] leading-none"
          >
            <span>{item}</span>
            <span aria-hidden className="text-current/40">
              ●
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes v2marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
