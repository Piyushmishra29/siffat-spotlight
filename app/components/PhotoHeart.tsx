"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  "/photos/sized/bindi-720.jpg",
  "/photos/sized/red-door-720.jpg",
  "/photos/vogue.jpg",
  "/photos/rose.jpg",
  "/photos/gold-crop.jpg",
  "/photos/sized/sky-bangles-720.jpg",
  "/photos/sized/red-brick-720.jpg",
  "/photos/sized/glass-lean-720.jpg",
  "/photos/sized/pink-ck-720.jpg",
  "/photos/sun-toh-na.jpg",
  "/photos/yaar-ka-sataya-hua.jpg",
  "/photos/brands/date-night.jpg",
  "/photos/brands/e3group-rishta.jpg",
  "/photos/brands/glow-tribe.jpg",
  "/photos/brands/jbl.jpg",
  "/photos/brands/jiomart.jpg",
  "/photos/brands/pureit.jpg",
  "/photos/brands/were-hooked.jpg",
  "/photos/films/bards-of-bollywood.jpg",
  "/photos/films/jawan.jpg",
  "/photos/films/kalamanch.jpg",
];

const HEART_LG: number[][] = [
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
];

const HEART_SM: number[][] = [
  [0, 1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
];

function seeded(n: number) {
  const x = Math.sin(n * 9301.31 + 49297.7) * 233280;
  return x - Math.floor(x);
}

type Tile = {
  row: number;
  col: number;
  sx: number;
  sy: number;
  sr: number;
  delay: number;
  photo: string;
};

function buildTiles(heart: number[][]): Tile[] {
  const list: Tile[] = [];
  let i = 0;
  heart.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (!cell) return;
      list.push({
        row: rIdx,
        col: cIdx,
        sx: (seeded(i * 7 + 1) * 2 - 1) * 55,
        sy: (seeded(i * 7 + 2) * 2 - 1) * 40,
        sr: (seeded(i * 7 + 3) * 2 - 1) * 100,
        delay: seeded(i * 7 + 4) * 0.16,
        photo: PHOTOS[i % PHOTOS.length],
      });
      i++;
    });
  });
  return list;
}

const TILES_LG = buildTiles(HEART_LG);
const TILES_SM = buildTiles(HEART_SM);

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type Props = {
  caption?: string;
};

/**
 * Scroll-assembled heart of every photo. Direct DOM mutation in rAF —
 * React renders the tile shells once; the scroll handler writes
 * style.transform/opacity to each tile element directly, so 50–60 Hz
 * displays don't pay the cost of re-rendering 90 React nodes per frame.
 */
export default function PhotoHeart({ caption }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const tiles = useMemo(
    () => (isMobile ? TILES_SM : TILES_LG),
    [isMobile],
  );

  useEffect(() => {
    tileRefs.current = tileRefs.current.slice(0, tiles.length);
  }, [tiles]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const applyAssembled = () => {
      tileRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "translate3d(0,0,0) scale(1)";
        el.style.opacity = "1";
        el.style.zIndex = "1";
      });
    };

    if (reduced) {
      applyAssembled();
      return;
    }

    const apply = (progress: number) => {
      const refs = tileRefs.current;
      for (let i = 0; i < tiles.length; i++) {
        const el = refs[i];
        if (!el) continue;
        const tile = tiles[i];
        const span = 0.42 - tile.delay;
        const local =
          span <= 0
            ? 1
            : Math.max(0, Math.min(1, (progress - tile.delay) / span));
        const e = easeOutCubic(local);
        const t = 1 - e;
        const opacity = 0.12 + e * 0.88;
        el.style.transform = `translate3d(${tile.sx * t}vw, ${tile.sy * t}vh, 0) rotate(${tile.sr * t}deg) scale(${1 - 0.45 * t})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.round((1 - t) * 50) + 1}`;
      }
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) {
        apply(1);
        return;
      }
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      apply(p);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [tiles]);

  const cols = isMobile ? 9 : 13;
  const rows = isMobile ? 7 : 11;

  return (
    <section
      ref={sectionRef}
      className="bg-olive relative"
      style={{ height: "180vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-2 md:px-6">
        <div
          className="grid gap-[3px] md:gap-[5px] w-[min(94vw,820px)]"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, auto)`,
          }}
        >
          {tiles.map((tile, i) => (
            <div
              key={i}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              className="relative aspect-[3/4] overflow-hidden bg-ink/40"
              style={{
                gridColumn: `${tile.col + 1} / span 1`,
                gridRow: `${tile.row + 1}`,
                willChange: "transform, opacity",
                opacity: 0.12,
              }}
            >
              <Image
                src={tile.photo}
                alt=""
                fill
                sizes="(min-width: 768px) 8vw, 11vw"
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
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
