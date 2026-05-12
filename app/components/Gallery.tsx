"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

const GALLERY: { src: string; alt: string }[] = [
  { src: "/photos/red-door.jpg", alt: "Red door — lehenga and leather" },
  { src: "/photos/bindi.jpg", alt: "Close-up portrait" },
  { src: "/photos/red-brick.jpg", alt: "Red brick — ethnic white-gold" },
  { src: "/photos/pink-ck.jpg", alt: "Pink lit — Calvin Klein" },
  { src: "/photos/rose.jpg", alt: "Rose — portrait" },
  { src: "/photos/gold-crop.jpg", alt: "Gold crop — editorial" },
  { src: "/photos/sky-bangles.jpg", alt: "Sunset bangles" },
  { src: "/photos/vogue.jpg", alt: "Vogue magazine portrait" },
];

export default function Gallery() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section className="bg-pink py-16 md:py-20">
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

        <div className="mt-12 columns-1 gap-3 md:columns-2 md:gap-5">
          {GALLERY.map((g, i) => {
            const motion = staggerRise(progress, 0.05 + i * 0.05);
            const drift = (progress - 0.5) * (i % 2 === 0 ? 14 : -14);
            return (
              <figure
                key={g.src}
                className="mb-3 break-inside-avoid md:mb-5 overflow-hidden"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    transform: `translate3d(0, ${drift}px, 0)`,
                    willChange: "transform",
                  }}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1200}
                    height={1600}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="block h-auto w-full object-cover"
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
