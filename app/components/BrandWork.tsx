"use client";

import Image from "next/image";
import { brandWordmarkLines, youtubeId, type BrandWordmark } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

const ALL_BRANDS: BrandWordmark[] = brandWordmarkLines.flat();

// Designed swatches for Instagram-only tiles without a local poster.
const SWATCHES = [
  { bg: "bg-pink", name: "text-ink", accent: "text-cream" },
  { bg: "bg-olive", name: "text-cream", accent: "text-pink" },
  { bg: "bg-cyan", name: "text-ink", accent: "text-pink" },
  { bg: "bg-cream", name: "text-ink", accent: "text-pink" },
  { bg: "bg-ink", name: "text-pink", accent: "text-cream" },
  { bg: "bg-pinkSoft", name: "text-ink", accent: "text-pink" },
] as const;

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

type TileProps = {
  brand: BrandWordmark;
  motion: React.CSSProperties;
  swatch: (typeof SWATCHES)[number] | null;
};

function Tile({ brand, motion, swatch }: TileProps) {
  const yt = brand.url ? youtubeId(brand.url) : null;
  const poster =
    brand.poster ?? (yt ? `https://img.youtube.com/vi/${yt}/hqdefault.jpg` : null);
  const isInstagram = brand.url?.includes("instagram.com") ?? false;
  const platformTag =
    brand.tag ?? (yt ? "Watch" : isInstagram ? "Reel" : "View");

  const inner = (
    <>
      {poster ? (
        <>
          <Image
            src={poster}
            alt={`Siffaat Gandhi — ${brand.name} campaign still`}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 48vw"
            className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute inset-x-2 bottom-2 flex items-end justify-between gap-2">
            <span
              className="font-display uppercase tracking-tight2 text-paper leading-[0.95] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
              style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.2rem)" }}
            >
              {brand.name}
            </span>
            <span className="shrink-0 font-inter text-[8px] uppercase tracking-widest text-pink">
              {brand.url ? `${platformTag} ↗` : platformTag}
            </span>
          </div>
          {brand.url && (
            <span
              aria-hidden
              className="pointer-events-none absolute left-2 top-2 flex h-7 w-7 items-center justify-center bg-paper/90 text-ink transition-transform duration-300 group-hover/tile:scale-110"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current">
                <polygon points="3,2 10,6 3,10" />
              </svg>
            </span>
          )}
        </>
      ) : swatch ? (
        <>
          <div
            className={`absolute inset-0 ${swatch.bg} transition-transform duration-500 group-hover/tile:scale-[1.04]`}
          />
          <div className={`absolute left-2 top-2 flex items-center gap-1.5 ${swatch.accent}`}>
            <InstagramGlyph className="h-3.5 w-3.5" />
            <span className="font-inter text-[8px] uppercase tracking-widest">Reel</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <span
              className={`font-display uppercase leading-[0.85] tracking-tight2 ${swatch.name}`}
              style={{ fontSize: "clamp(1.35rem, 3.2vw, 2.5rem)" }}
            >
              {brand.name}
            </span>
          </div>
          <div className={`absolute inset-x-2 bottom-2 flex items-end justify-between gap-2 ${swatch.accent}`}>
            <span className="font-inter text-[8px] uppercase tracking-widest opacity-80">
              Tap to view
            </span>
            <span className="font-inter text-[8px] uppercase tracking-widest">↗</span>
          </div>
        </>
      ) : null}
    </>
  );

  const className =
    "group/tile relative block aspect-[4/5] overflow-hidden bg-ink";

  return brand.url ? (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-label="Watch"
      className={className}
      style={{ ...motion, willChange: "transform, opacity" }}
    >
      {inner}
    </a>
  ) : (
    <div
      className={className}
      style={{ ...motion, willChange: "transform, opacity" }}
    >
      {inner}
    </div>
  );
}

export default function BrandWork() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  let igNoPoster = 0;

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
        <p className="mt-4 max-w-[640px] font-garamond italic text-warmGrey text-base md:text-lg">
          {ALL_BRANDS.length} campaigns. Tap any tile to watch the reel.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {ALL_BRANDS.map((b, i) => {
            const yt = b.url ? youtubeId(b.url) : null;
            const hasPoster = Boolean(b.poster ?? yt);
            const swatch = !hasPoster ? SWATCHES[igNoPoster++ % SWATCHES.length] : null;
            const motion = staggerRise(progress, 0.04 + i * 0.015);
            return (
              <Tile key={b.name + (b.url ?? i)} brand={b} motion={motion} swatch={swatch} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
