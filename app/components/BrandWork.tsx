"use client";

import Image from "next/image";
import { brandWordmarkLines, youtubeId, type BrandWordmark } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

const ALL_BRANDS: BrandWordmark[] = brandWordmarkLines.flat();

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
        <p className="mt-4 max-w-[600px] font-garamond italic text-warmGrey text-base md:text-lg">
          Fifteen campaigns. Tap any tile to watch.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
          {ALL_BRANDS.map((b, i) => {
            const yt = youtubeId(b.url);
            const poster = b.poster ?? (yt ? `https://img.youtube.com/vi/${yt}/hqdefault.jpg` : null);
            const motion = staggerRise(progress, 0.04 + i * 0.02);
            const isInstagram = b.url.includes("instagram.com");
            return (
              <a
                key={b.name + b.url}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Watch"
                className="group/tile relative block aspect-[4/5] overflow-hidden bg-ink"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                {poster ? (
                  <Image
                    src={poster}
                    alt={`Siffaat Gandhi — ${b.name} campaign still`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 48vw"
                    className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.06]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-pink p-3 text-center">
                    <span
                      className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
                      style={{ fontSize: "clamp(1rem, 2.4vw, 1.75rem)" }}
                    >
                      {b.name}
                    </span>
                  </div>
                )}

                {/* permanent dark gradient + name overlay at bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
                <div className="absolute inset-x-2 bottom-2 flex items-end justify-between gap-2">
                  <span
                    className="font-display uppercase tracking-tight2 text-paper leading-[0.95] drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
                    style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.2rem)" }}
                  >
                    {b.name}
                  </span>
                  <span className="shrink-0 font-inter text-[8px] uppercase tracking-widest text-pink">
                    {isInstagram ? "Reel ↗" : "Watch ↗"}
                  </span>
                </div>

                {/* play indicator for videos */}
                {poster && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-2 top-2 flex h-7 w-7 items-center justify-center bg-paper/90 text-ink transition-transform duration-300 group-hover/tile:scale-110"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current">
                      <polygon points="3,2 10,6 3,10" />
                    </svg>
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
