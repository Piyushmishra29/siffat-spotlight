"use client";

import { webSeries } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

export default function OnScreen() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section className="bg-paper py-16 md:py-20">
      <div
        ref={ref}
        className="mx-auto max-w-[1400px] px-6 md:pl-[180px] md:pr-12"
      >
        <ChapterEyebrow n="02" label="SERIES" className="mb-4" />
        <h2
          className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          ON SCREEN,
          <br />
          IN SERIES.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px bg-ink/15 md:grid-cols-2">
          {webSeries.map((w, i) => {
            const motion = staggerRise(progress, 0.05 + i * 0.08);
            const inner = (
              <div
                className="group/card relative flex h-full flex-col justify-between bg-paper p-8 md:p-12 overflow-hidden"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-px bg-pink scale-y-0 origin-top transition-transform duration-300 group-hover/card:scale-y-100"
                />
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                    {w.production}
                    {w.platform ? ` · ${w.platform}` : ""}
                  </p>
                  <h3
                    className="mt-6 font-display uppercase leading-[0.9] tracking-tight2 text-ink transition-transform duration-300 group-hover/card:-translate-y-0.5"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {w.title}
                  </h3>
                </div>
                <div className="mt-12 flex items-end justify-between border-t hairline pt-5">
                  <span className="font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                    {w.year ?? "Series"}
                  </span>
                  {w.url ? (
                    <span className="font-inter text-[10px] uppercase tracking-widest text-pink">
                      Watch on Amazon →
                    </span>
                  ) : (
                    <span className="font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                      —
                    </span>
                  )}
                </div>
              </div>
            );
            return w.url ? (
              <a
                key={w.title}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={w.title}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
