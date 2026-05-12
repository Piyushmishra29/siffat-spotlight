"use client";

import { auditionReels } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import ChapterEyebrow from "./ChapterEyebrow";
import AutoplayTape from "./AutoplayTape";

export default function AuditionReels() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section
      id="tape"
      className="bg-paper py-16 md:py-20"
    >
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
          Six self-tapes from the room. Playing live.
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
                <AutoplayTape
                  ytId={r.ytId}
                  number={`Nº ${r.id}`}
                  thumb={`https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`}
                  alt={`Siffaat Gandhi — self-tape Nº ${r.id} · Mumbai`}
                />
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
