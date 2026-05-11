"use client";

import { shortFilmsProduced } from "@/lib/content";
import { useFadeIn } from "@/lib/useFadeIn";

export default function ShortFilms() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="bg-paper py-24 md:py-36">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1400px] px-6 md:pl-[180px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <p className="mb-4 font-inter text-[10px] uppercase tracking-widest text-pink">
          PRODUCED & PERFORMED.
        </p>
        <h2
          className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          PRODUCED &<br />
          PERFORMED.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {shortFilmsProduced.map((f, i) => (
            <article
              key={f.title}
              className="relative overflow-hidden border hairline bg-paper p-8 md:p-12 min-h-[260px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <span className="font-display uppercase text-2xl md:text-3xl text-pink">
                  Nº {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                  Short film
                </span>
              </div>
              <h3
                className="mt-10 font-display uppercase leading-[0.9] tracking-tight2 text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                {f.title}
              </h3>
              <p className="mt-6 font-inter text-[10px] uppercase tracking-widest text-warmGrey">
                Produced &amp; performed by Siffat Gandhi
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 font-garamond italic text-warmGrey text-base md:text-lg">
          Two films · Two stories chosen, not received.
        </p>
      </div>
    </section>
  );
}
