"use client";

import { useFadeIn } from "@/lib/useFadeIn";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Pyramid stack: 9 / 7 / 5 / 3 / 1 tiles of the same image on olive bg.
 * Rendered with CSS grid (9 columns) and explicit col-spans per row.
 */
const ROWS = [9, 7, 5, 3, 1];

export default function PhotoPyramid({ src, alt, caption }: Props) {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="bg-olive py-16 md:py-24">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1100px] px-2 md:px-6 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <div className="space-y-1 md:space-y-1.5">
          {ROWS.map((count, rowIdx) => (
            <div
              key={rowIdx}
              className="grid gap-1 md:gap-1.5"
              style={{
                gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
              }}
            >
              {Array.from({ length: count }).map((_, i) => {
                const startCol = (9 - count) / 2 + i + 1;
                return (
                  <div
                    key={i}
                    className="relative aspect-[3/4] overflow-hidden bg-ink"
                    style={{
                      gridColumn: `${startCol} / span 1`,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${alt} — ${rowIdx}-${i}`}
                      fill
                      sizes="(min-width: 768px) 11vw, 11vw"
                      className="object-cover"
                      style={{ objectPosition: "center 30%" }}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {caption && (
          <p className="mt-6 text-center font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-paper/85">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
