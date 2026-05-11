"use client";

import { useFadeIn } from "@/lib/useFadeIn";

type Props = {
  children: React.ReactNode;
  attribution?: string;
  /** Vertical padding density — "tight" for in-between, "loose" for hero quote */
  density?: "tight" | "loose";
};

/**
 * Full-bleed hot-pink quote block. Body in EB Garamond italic over pink.
 * Tracked-caps attribution underneath in Inter.
 */
export default function PinkBlockQuote({
  children,
  attribution,
  density = "loose",
}: Props) {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section
      className={
        "bg-pink text-ink " +
        (density === "loose" ? "py-28 md:py-40" : "py-20 md:py-28")
      }
    >
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1500px] px-6 md:pl-[180px] md:pr-16 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
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
