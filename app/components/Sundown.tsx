"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";

type Tile = {
  src: string;
  alt: string;
  span: string;
  aspect: string;
  position?: string;
  caption?: string;
};

const TILES: Tile[] = [
  {
    src: "/photos/sized/sundown-fabric-1280.jpg",
    alt: "Siffaat Gandhi — white drape lifted against the setting sun, coastal sundown",
    span: "md:col-span-7",
    aspect: "aspect-[3/4]",
    position: "center 35%",
    caption: "I · THE SAIL",
  },
  {
    src: "/photos/sized/sundown-joy-1280.jpg",
    alt: "Siffaat Gandhi — joyful turn, sea breeze and chiffon",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
    position: "center 25%",
    caption: "II · THE TURN",
  },
  {
    src: "/photos/sized/sundown-shore-1280.jpg",
    alt: "Siffaat Gandhi — resting on tide rocks, ocean behind",
    span: "md:col-span-12",
    aspect: "aspect-[16/9]",
    position: "center 40%",
    caption: "III · THE TIDE",
  },
  {
    src: "/photos/sized/sundown-rocks-1280.jpg",
    alt: "Siffaat Gandhi — still figure, dusk sun and tidepool",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
    position: "center 30%",
    caption: "IV · THE STILL",
  },
  {
    src: "/photos/sized/sundown-tide-1280.jpg",
    alt: "Siffaat Gandhi — black rocks, white drape, evening",
    span: "md:col-span-4",
    aspect: "aspect-[5/6]",
    position: "center 45%",
    caption: "V · THE FOLD",
  },
  {
    src: "/photos/sized/sundown-glance-1280.jpg",
    alt: "Siffaat Gandhi — sunset close, glance back",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    position: "center 30%",
    caption: "VI · THE GLANCE",
  },
];

export default function Sundown() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section
      id="sundown"
      className="bg-cream py-16 md:py-24"
    >
      <div
        ref={ref}
        className="mx-auto max-w-[1600px] px-6 md:pl-[180px] md:pr-12"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-widest text-pink mb-4">
              <span>INTERLUDE</span>
              <span className="text-pink/55"> — </span>
              <span>ELEMENTAL</span>
            </p>
            <h2
              className="font-display uppercase leading-[0.88] tracking-tight2 text-ink"
              style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
            >
              SUNDOWN,
              <br />
              IN SIX FRAMES.
            </h2>
          </div>
          <p
            className="max-w-sm font-garamond italic text-warmGrey text-base md:text-right md:text-lg leading-[1.5]"
          >
            White on rock, salt on skin.
            <br />
            One light, six different stillnesses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-5">
          {TILES.map((t, i) => {
            const motion = staggerRise(progress, 0.05 + i * 0.07);
            const drift = (progress - 0.5) * (i % 2 === 0 ? 16 : -16);
            return (
              <figure
                key={t.src}
                className={`group/tile relative overflow-hidden bg-ink/85 editorial-treatment ${t.span} ${t.aspect}`}
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `translate3d(0, ${drift}px, 0) scale(1.06)`,
                    willChange: "transform",
                  }}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.02]"
                    style={{ objectPosition: t.position ?? "center" }}
                  />
                </div>
                {t.caption && (
                  <figcaption className="absolute left-3 bottom-3 z-10 font-inter text-[9px] md:text-[10px] uppercase tracking-widest text-paper/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                    {t.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
