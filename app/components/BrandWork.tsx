"use client";

import Image from "next/image";
import { brandWordmarkLines, brandStills } from "@/lib/content";
import { useFadeIn } from "@/lib/useFadeIn";
import ChapterEyebrow from "./ChapterEyebrow";

export default function BrandWork() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="bg-cream py-16 md:py-20">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1600px] px-6 md:pl-[180px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <ChapterEyebrow n="05" label="CAMPAIGNS" className="mb-4" />
        <h2
          className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          TVCs &<br />
          CAMPAIGNS.
        </h2>

        {/* Wordmark lines */}
        <div className="mt-14 border-t hairline">
          {brandWordmarkLines.map((line, i) => (
            <div
              key={i}
              className={
                "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-6 md:gap-x-8 " +
                (i < brandWordmarkLines.length - 1 ? "border-b hairline" : "")
              }
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
          ))}
          <div className="border-b hairline" />
        </div>

        {/* 4-up stills grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {brandStills.map((s) => (
            <figure
              key={s.file}
              className="relative aspect-[3/4] overflow-hidden bg-ink"
            >
              <Image
                src={s.file}
                alt={s.caption}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 px-3 py-2 font-inter text-[9px] uppercase tracking-widest text-paper">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
