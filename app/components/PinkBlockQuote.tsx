"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";
import { easeOutCubic, tileLocal } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  attribution?: string;
  density?: "tight" | "loose";
};

export default function PinkBlockQuote({
  children,
  attribution,
  density = "loose",
}: Props) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const e = easeOutCubic(tileLocal(progress, 0.05, 0.6));
  const motion = {
    transform: `translate3d(0, ${(1 - e) * 24}px, 0) scale(${0.97 + e * 0.03})`,
    opacity: 0.0 + e,
    willChange: "transform, opacity",
  } as const;

  return (
    <section
      className={
        "bg-pink text-ink " +
        (density === "loose" ? "py-28 md:py-40" : "py-20 md:py-28")
      }
    >
      <div
        ref={ref}
        className="mx-auto max-w-[1500px] px-6 md:pl-[180px] md:pr-16"
        style={motion}
      >
        <blockquote
          className="font-garamond italic leading-[1.05] text-ink"
          style={{ fontSize: "clamp(1.9rem, 5.2vw, 4.75rem)" }}
        >
          {children}
        </blockquote>
        {attribution && (
          <p className="mt-10 font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-ink/80">
            {attribution}
          </p>
        )}
      </div>
    </section>
  );
}
