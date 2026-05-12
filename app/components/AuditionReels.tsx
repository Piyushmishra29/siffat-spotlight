"use client";

import { auditionReels } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";

export default function AuditionReels() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section className="bg-paper py-16 md:py-20">
      <div
        ref={ref}
        className="mx-auto max-w-[1400px] px-6 md:pl-[180px] md:pr-12"
      >
        <ChapterEyebrow n="07" label="SELF-TAPES" className="mb-4" />
        <h2
          className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          THE TAPE.
        </h2>
        <p className="mt-4 font-garamond italic text-warmGrey text-base md:text-xl">
          Six self-tapes from the room.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {auditionReels.map((r, i) => {
            const motion = staggerRise(progress, 0.1 + i * 0.06);
            return (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <figure className="relative aspect-video overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`}
                    alt={`Self-tape Nº ${r.id}`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${r.ytId}/hqdefault.jpg`;
                    }}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-px bg-pink scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <span className="absolute left-3 top-3 font-display uppercase text-2xl md:text-3xl text-pink drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                    Nº {r.id}
                  </span>
                  <span className="absolute right-3 top-3 font-inter text-[9px] uppercase tracking-widest text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-x-0.5">
                    Play ↗
                  </span>
                </figure>
                <p className="mt-2 font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                  Self-tape · Mumbai · 2024–2026
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
