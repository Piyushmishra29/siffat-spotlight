"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

type Tile = {
  src: string;
  alt: string;
  span: string;
  aspect: string;
  position?: string;
};

const GALLERY: Tile[] = [
  {
    src: "/photos/sized/red-door-1280.jpg",
    alt: "Siffaat Gandhi — red door portrait, lehenga and leather, Mumbai",
    span: "md:col-span-7",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/photos/sized/bindi-1280.jpg",
    alt: "Siffaat Gandhi — bindi close-up portrait, editorial",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    position: "center 25%",
  },
  {
    src: "/photos/sized/red-brick-1280.jpg",
    alt: "Siffaat Gandhi — red brick ethnic look, white and gold",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/photos/sized/pink-ck-1280.jpg",
    alt: "Siffaat Gandhi — pink-lit Calvin Klein editorial",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    position: "center 30%",
  },
  {
    src: "/photos/rose.jpg",
    alt: "Siffaat Gandhi — rose portrait, soft beauty editorial",
    span: "md:col-span-6",
    aspect: "aspect-[1/1]",
  },
  {
    src: "/photos/gold-crop.jpg",
    alt: "Siffaat Gandhi — gold crop top, editorial portrait",
    span: "md:col-span-6",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/photos/sized/sky-bangles-1280.jpg",
    alt: "Siffaat Gandhi — sunset rooftop with traditional bangles",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/photos/vogue.jpg",
    alt: "Siffaat Gandhi — Vogue-style cover portrait",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/photos/sized/red-bike-front-1280.jpg",
    alt: "Siffaat Gandhi — red lehenga at a motorcycle, Mumbai brick wall",
    span: "md:col-span-7",
    aspect: "aspect-[1/1]",
    position: "center 30%",
  },
  {
    src: "/photos/sized/floral-saree-1280.jpg",
    alt: "Siffaat Gandhi — sheer floral saree, soft daylight, smile",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
    position: "center 20%",
  },
  {
    src: "/photos/sized/sheer-floral-1280.jpg",
    alt: "Siffaat Gandhi — sheer black-print blouse, candid daylight portrait",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    position: "center 20%",
  },
];

export default function Gallery() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section id="range" className="bg-pink py-16 md:py-20">
      <div
        ref={ref}
        className="mx-auto max-w-[1600px] px-6 md:pl-[180px] md:pr-12"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <ChapterEyebrow n="08" label="RANGE" tone="ink" className="mb-4" />
            <h2
              className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              RANGE.
            </h2>
          </div>
          <p className="max-w-sm font-garamond italic text-ink/75 text-base md:text-right md:text-lg">
            Six years of frames. Six different rooms.
            <br />
            One presence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-5">
          {GALLERY.map((g, i) => {
            const motion = staggerRise(progress, 0.05 + i * 0.05);
            const drift = (progress - 0.5) * (i % 2 === 0 ? 18 : -18);
            return (
              <figure
                key={g.src}
                className={`group/tile relative overflow-hidden bg-pink/40 editorial-treatment ${g.span} ${g.aspect}`}
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
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover/tile:scale-[1.02]"
                    style={{ objectPosition: g.position ?? "center" }}
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
