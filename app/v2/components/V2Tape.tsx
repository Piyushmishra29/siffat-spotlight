"use client";

import { auditionReels } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { staggerRise } from "@/lib/motion";
import AutoplayTape from "@/app/components/AutoplayTape";

export default function V2Tape() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section id="v2-tape" className="bg-v2bg text-v2fg">
      <div
        ref={ref}
        className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24"
      >
        <header className="border-b-2 border-v2border pb-8 md:pb-10">
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-v2acid">
            04 / TAPES
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="font-inter font-black uppercase leading-[0.86] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
            >
              THE TAPE.
            </h2>
            <p className="max-w-md font-inter text-sm uppercase tracking-[0.1em] text-v2fg/70 md:text-right">
              Vulnerability · intensity · softness · confidence · chaos.
              <br />
              <span className="text-v2acid">Six tapes. Click to watch.</span>
            </p>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
          {auditionReels.map((r, i) => {
            const motion = staggerRise(progress, 0.08 + i * 0.05);
            return (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/tape relative block border-2 border-v2border bg-v2ink transition-colors duration-100 hover:border-v2acid"
                style={{ ...motion, willChange: "transform, opacity" }}
              >
                <AutoplayTape
                  ytId={r.ytId}
                  number={`Nº ${r.id}`}
                  thumb={
                    r.poster ?? `https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`
                  }
                  thumbPosition={r.posterPosition}
                  alt={r.posterAlt ?? `Siffaat Gandhi — self-tape Nº ${r.id}`}
                />
                <p className="border-t-2 border-v2border px-3 py-2 font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-v2fg/70 transition-colors group-hover/tape:bg-v2acid group-hover/tape:text-v2bg">
                  TAPE Nº {r.id} · MUMBAI 24–26 · ▸ WATCH
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
