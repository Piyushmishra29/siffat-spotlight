"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  "/photos/bindi.jpg",
  "/photos/red-door.jpg",
  "/photos/vogue.jpg",
  "/photos/rose.jpg",
  "/photos/gold-crop.jpg",
  "/photos/sky-bangles.jpg",
  "/photos/cover-suit.jpg",
  "/photos/red-brick.jpg",
  "/photos/glass-lean.jpg",
  "/photos/pink-ck.jpg",
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

// 13 cols × 11 rows = 90 tile heart
const HEART: number[][] = [
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

const TILES: Tile[] = (() => {
  const list: Tile[] = [];
  let i = 0;
  HEART.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (!cell) return;
      list.push({
        row: rIdx,
        col: cIdx,
        sx: (seeded(i * 7 + 1) * 2 - 1) * 75,
        sy: (seeded(i * 7 + 2) * 2 - 1) * 55,
        sr: (seeded(i * 7 + 3) * 2 - 1) * 140,
        delay: seeded(i * 7 + 4) * 0.35,
        photo: PHOTOS[i % PHOTOS.length],
      });
      i++;
    });
  });
  return list;
})();

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type Props = {
  caption?: string;
};

export default function PhotoHeart({ caption }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) {
        setProgress(1);
        return;
      }
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
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
  }, []);

  const tiles = useMemo(() => TILES, []);

  return (
    <section
      ref={sectionRef}
      className="bg-olive relative"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-2 md:px-6">
        <div
          className="grid gap-[3px] md:gap-[5px] w-[min(92vw,820px)]"
          style={{
            gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
            gridTemplateRows: "repeat(11, auto)",
          }}
        >
          {tiles.map((tile, i) => {
            const span = Math.max(0.0001, 0.65 - tile.delay);
            const local = Math.max(
              0,
              Math.min(1, (progress - tile.delay) / span),
            );
            const e = easeOutCubic(local);
            const t = 1 - e;
            const opacity = 0.12 + e * 0.88;
            return (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden bg-ink/40"
                style={{
                  gridColumn: `${tile.col + 1} / span 1`,
                  gridRow: `${tile.row + 1}`,
                  transform: `translate3d(${tile.sx * t}vw, ${tile.sy * t}vh, 0) rotate(${tile.sr * t}deg) scale(${1 - 0.45 * t})`,
                  opacity,
                  willChange: "transform, opacity",
                  zIndex: Math.round((1 - t) * 50) + 1,
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
            );
          })}
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
