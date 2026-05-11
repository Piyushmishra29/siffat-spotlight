"use client";

import { auditionReels } from "@/lib/content";
import { useFadeIn } from "@/lib/useFadeIn";

export default function AuditionReels() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="bg-paper py-16 md:py-20">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1400px] px-6 md:pl-[180px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <p className="mb-4 font-inter text-[10px] uppercase tracking-widest text-pink">
          THE TAPE.
        </p>
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
          {auditionReels.map((r) => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
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
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-pink/30" />
                <span className="absolute left-3 top-3 font-display uppercase text-2xl md:text-3xl text-pink drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                  Nº {r.id}
                </span>
                <span className="absolute right-3 top-3 font-inter text-[9px] uppercase tracking-widest text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                  Play ↗
                </span>
              </figure>
              <p className="mt-2 font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                Self-tape · Mumbai · 2024–2026
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
