"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";

type Frame = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

const FRAMES: Frame[] = [
  {
    src: "/photos/sized/red-portrait-1280.jpg",
    alt: "Siffaat Gandhi — red-lit portrait, intensity",
    caption: "01 / CHAMBER",
    position: "center 25%",
  },
  {
    src: "/photos/sized/sundown-fabric-1280.jpg",
    alt: "Siffaat Gandhi — white sail, sundown",
    caption: "02 / SUNDOWN",
    position: "center 35%",
  },
  {
    src: "/photos/sized/red-bike-front-1280.jpg",
    alt: "Siffaat Gandhi — red lehenga, motorcycle",
    caption: "03 / METAL",
    position: "center 30%",
  },
  {
    src: "/photos/sized/vogue-side-1280.jpg",
    alt: "Siffaat Gandhi — Vogue blazer, side profile",
    caption: "04 / VOGUE",
    position: "center 20%",
  },
  {
    src: "/photos/sized/sheer-floral-1280.jpg",
    alt: "Siffaat Gandhi — sheer floral, candid",
    caption: "05 / DAYLIGHT",
    position: "center 20%",
  },
];

export default function V2PhotoStrip() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const x = -progress * 30; // horizontal scrub for desktop continuous reveal

  return (
    <section
      ref={ref}
      id="v2-range"
      className="relative overflow-hidden bg-v2bg py-16 md:py-24 text-v2fg"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <header className="border-b-2 border-v2border pb-8 md:pb-10">
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-v2acid">
            02 / RANGE
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="font-inter font-black uppercase leading-[0.86] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
            >
              FIVE
              <br />
              ROOMS.
            </h2>
            <p className="max-w-md font-inter text-sm uppercase tracking-[0.1em] text-v2fg/70 md:text-right">
              One actor.
              <br />
              <span className="text-v2acid">Five different stillnesses.</span>
            </p>
          </div>
        </header>
      </div>

      {/* Strip — desktop horizontal, mobile vertical */}
      <div
        className="mt-10 flex w-full snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-6 md:mt-14 md:gap-5 md:px-12"
        style={{
          transform: `translate3d(${x}px, 0, 0)`,
          willChange: "transform",
        }}
      >
        {FRAMES.map((f, i) => (
          <figure
            key={f.src}
            className="group/frame relative shrink-0 snap-start overflow-hidden border-2 border-v2border bg-v2ink transition-colors duration-100 hover:border-v2acid"
            style={{
              width: "min(80vw, 460px)",
              aspectRatio: "3 / 4",
            }}
          >
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="(min-width: 768px) 460px, 80vw"
              className="object-cover transition-transform duration-700 group-hover/frame:scale-[1.04]"
              style={{ objectPosition: f.position ?? "center" }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-v2bg via-v2bg/30 to-transparent" />
            <figcaption className="absolute left-3 bottom-3 z-10 border border-v2fg/40 bg-v2bg/70 px-2 py-1 font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-v2fg backdrop-blur-sm">
              {f.caption}
            </figcaption>
            <span className="absolute right-3 top-3 z-10 font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-v2fg/60">
              0{i + 1}
            </span>
          </figure>
        ))}
      </div>
    </section>
  );
}
