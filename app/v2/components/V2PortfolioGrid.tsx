"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import {
  brands,
  webSeries,
  musicVideos,
  shortFilmsProduced,
  youtubeId,
} from "@/lib/content";

type Category = "ALL" | "SERIES" | "TVC" | "MUSIC" | "FILM";

type Tile = {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  href: string | null;
  poster: string;
  size: "lg" | "md" | "sm";
};

function ytPoster(url: string | null): string | null {
  if (!url) return null;
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

const TILES: Tile[] = [
  ...webSeries.map<Tile>((w, i) => ({
    id: `series-${i}`,
    category: "SERIES",
    title: w.title,
    subtitle: `${w.production}${w.platform ? " · " + w.platform : ""}`,
    href: w.url,
    poster:
      ytPoster(w.url) ??
      (w.title.includes("KALAMANCH")
        ? "/photos/films/kalamanch.jpg"
        : "/photos/sized/cream-sweater-1280.jpg"),
    size: "lg",
  })),
  ...musicVideos.map<Tile>((m, i) => ({
    id: `music-${i}`,
    category: "MUSIC",
    title: m.title,
    subtitle:
      [m.artist, m.feature, m.label, m.timestamp]
        .filter(Boolean)
        .join(" · ") || "MUSIC VIDEO",
    href: m.url,
    poster:
      ytPoster(m.url) ??
      (m.title === "SUN TOH NA"
        ? "/photos/sun-toh-na.jpg"
        : "/photos/yaar-ka-sataya-hua.jpg"),
    size: "md",
  })),
  ...shortFilmsProduced.map<Tile>((f, i) => ({
    id: `film-${i}`,
    category: "FILM",
    title: f.title,
    subtitle: f.credit,
    href: f.url ?? null,
    poster:
      ytPoster(f.url ?? null) ?? "/photos/sized/vogue-front-1280.jpg",
    size: "md",
  })),
  ...brands.slice(0, 12).map<Tile>((b, i) => ({
    id: `brand-${i}`,
    category: "TVC",
    title: b.name.toUpperCase(),
    subtitle: b.production ? b.production : "TVC / CAMPAIGN",
    href: b.url,
    poster:
      ytPoster(b.url) ??
      (b.name === "Pure It"
        ? "/photos/brands/pureit.jpg"
        : b.name === "Sixam Glow"
          ? "/photos/brands/glow-tribe.jpg"
          : b.name === "JBL"
            ? "/photos/brands/jbl.jpg"
            : "/photos/sized/floral-saree-1280.jpg"),
    size: "sm",
  })),
];

const FILTERS: Category[] = ["ALL", "SERIES", "TVC", "MUSIC", "FILM"];

const SIZE_SPAN: Record<Tile["size"], string> = {
  lg: "md:col-span-6",
  md: "md:col-span-4",
  sm: "md:col-span-3",
};

const SIZE_ASPECT: Record<Tile["size"], string> = {
  lg: "aspect-[16/10]",
  md: "aspect-[4/5]",
  sm: "aspect-square",
};

export default function V2PortfolioGrid() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const [active, setActive] = useState<Category>("ALL");
  const visible = active === "ALL" ? TILES : TILES.filter((t) => t.category === active);

  return (
    <section id="v2-work" className="bg-v2bg text-v2fg">
      <div
        ref={ref}
        className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24"
      >
        <header className="border-b-2 border-v2border pb-8 md:pb-12">
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-v2acid">
            01 / WORK
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="font-inter font-black uppercase leading-[0.86] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
            >
              SELECT
              <br />
              REEL.
            </h2>
            <p className="max-w-md font-inter text-sm uppercase tracking-[0.1em] text-v2fg/70 md:text-right">
              {TILES.length} pieces ·{" "}
              <span className="text-v2fg">{visible.length}</span> in view
              <br />
              <span className="text-v2acid">tap any tile to play</span>
            </p>
          </div>

          {/* Filter bar */}
          <div className="mt-8 -mx-1 flex flex-wrap gap-2 md:mt-10">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`group/filter relative inline-flex items-center gap-2 border-2 px-4 py-2 font-inter text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-100 ${
                    isActive
                      ? "border-v2acid bg-v2acid text-v2bg"
                      : "border-v2border bg-transparent text-v2fg hover:border-v2fg"
                  }`}
                >
                  <span
                    className={`inline-block h-2 w-2 ${isActive ? "bg-v2bg" : "bg-v2acid"}`}
                  />
                  {f}
                </button>
              );
            })}
          </div>
        </header>

        {/* Masonry grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-12 md:gap-4">
          {visible.map((t, i) => {
            const motion = staggerRise(progress, 0.05 + i * 0.04);
            return (
              <Tile key={t.id} tile={t} motion={motion} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Tile({ tile, motion }: { tile: Tile; motion: React.CSSProperties }) {
  const inner = (
    <>
      <div className={`relative overflow-hidden ${SIZE_ASPECT[tile.size]} bg-v2ink`}>
        <Image
          src={tile.poster}
          alt={`Siffaat Gandhi — ${tile.title}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.03]"
        />
        {/* Always-on bottom scrim */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-v2bg via-v2bg/70 to-transparent" />

        {/* Category chip */}
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 border border-v2fg/30 bg-v2bg/70 px-2 py-1 font-inter text-[9px] font-bold uppercase tracking-[0.2em] text-v2fg backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 bg-v2acid" />
          {tile.category}
        </span>

        {/* Play affordance */}
        {tile.href && (
          <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 border border-v2fg/30 bg-v2bg/70 px-2 py-1 font-inter text-[9px] font-bold uppercase tracking-[0.2em] text-v2fg backdrop-blur-sm transition-colors group-hover/tile:border-v2acid group-hover/tile:bg-v2acid group-hover/tile:text-v2bg">
            PLAY ↗
          </span>
        )}

        {/* Bottom label block — flood-inverts on hover (acid yellow) */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t-2 border-v2fg/0 bg-v2bg/0 px-3 pb-3 pt-2 transition-all duration-100 group-hover/tile:border-v2bg group-hover/tile:bg-v2acid">
          <p className="font-inter text-base font-black uppercase tracking-[-0.01em] leading-tight text-v2fg group-hover/tile:text-v2bg md:text-lg">
            {tile.title}
          </p>
          <p className="mt-0.5 font-inter text-[10px] uppercase tracking-[0.15em] text-v2fg/65 group-hover/tile:text-v2bg/85">
            {tile.subtitle}
          </p>
        </div>
      </div>
    </>
  );

  const className =
    "group/tile relative block w-full overflow-hidden border-2 border-v2border bg-v2bg transition-colors duration-100 hover:border-v2acid focus-visible:border-v2acid focus-visible:outline-none " +
    SIZE_SPAN[tile.size];

  return tile.href ? (
    <a
      href={tile.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ ...motion, willChange: "transform, opacity" }}
    >
      {inner}
    </a>
  ) : (
    <div className={className} style={{ ...motion, willChange: "transform, opacity" }}>
      {inner}
    </div>
  );
}
