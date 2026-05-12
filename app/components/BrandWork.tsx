"use client";

import Image from "next/image";
import { brandWordmarkLines, brandStills } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise, tileLocal, easeOutCubic } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

export default function BrandWork() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section id="campaigns" className="bg-cream py-16 md:py-20">
      <div
        ref={ref}
        className="mx-auto max-w-[1600px] px-6 md:pl-[180px] md:pr-12"
      >
        <ChapterEyebrow n="05" label="CAMPAIGNS" className="mb-4" />
        <h2
          className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          TVCs &<br />
          CAMPAIGNS.
        </h2>

        <div className="mt-14 border-t hairline">
          {brandWordmarkLines.map((line, i) => {
            const e = easeOutCubic(tileLocal(progress, 0.08 + i * 0.06, 0.6));
            return (
              <div
                key={i}
                className={
                  "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-6 md:gap-x-8 " +
                  (i < brandWordmarkLines.length - 1 ? "border-b hairline" : "")
                }
                style={{
                  opacity: e,
                  transform: `translate3d(${(1 - e) * -24}px, 0, 0)`,
                  willChange: "transform, opacity",
                }}
              >
                {line.map((name, j) => (
                  <span
                    key={name}
                    className="font-display uppercase text-lg md:text-2xl tracking-tight2 text-ink"
                  >
                    {name}
                    {j < line.length - 1 && (
                      <span className="ml-4 md:ml-8 text-pink">·</span>
                    )}
                  </span>
                ))}
              </div>
            );
          })}
          <div className="border-b hairline" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {brandStills.slice(0, 1).map((s, i) => {
            const motion = staggerRise(progress, 0.2 + i * 0.06);
            return (
              <figure
                key={s.file}
                className="group/tile relative aspect-[3/4] overflow-hidden bg-ink md:col-span-7 md:row-span-3 editorial-treatment"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <Image
                  src={s.file}
                  alt={`Siffaat Gandhi — ${s.caption.toLowerCase()}, brand still`}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 px-3 py-2 font-inter text-[9px] uppercase tracking-widest text-paper">
                  {s.caption}
                </figcaption>
              </figure>
            );
          })}
          {brandStills.slice(1).map((s, i) => {
            const motion = staggerRise(progress, 0.28 + i * 0.06);
            return (
              <figure
                key={s.file}
                className="group/tile relative aspect-[4/3] overflow-hidden bg-ink md:col-span-5"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <Image
                  src={s.file}
                  alt={`Siffaat Gandhi — ${s.caption.toLowerCase()}, brand still`}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 px-3 py-2 font-inter text-[9px] uppercase tracking-widest text-paper">
                  {s.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
