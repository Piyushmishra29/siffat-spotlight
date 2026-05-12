"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

export default function Hero() {
  const { ref, progress } = useScrollProgress<HTMLElement>();

  // Parallax: image drifts up slower than scroll; title floats up a touch
  const imgY = -progress * 18; // %
  const imgScale = 1 + progress * 0.08;
  const titleY = -progress * 60; // px
  const titleOpacity = Math.max(0, 1 - progress * 1.6);
  const cueOpacity = Math.max(0, 1 - progress * 4);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper text-ink"
    >
      <div
        className="absolute inset-0 editorial-treatment"
        style={{
          transform: `translate3d(0, ${imgY}%, 0) scale(${imgScale})`,
          willChange: "transform",
        }}
      >
        <picture>
          {/* Mobile uses pink-ck.jpg — tall portrait (5344x9504) fits the
              mobile aspect ratio much better than red-door, which gets
              cropped awkwardly at narrow viewports. */}
          <source
            media="(max-width: 768px) and (max-resolution: 1.5dppx)"
            srcSet="/photos/sized/pink-ck-720.jpg"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/photos/sized/pink-ck-1280.jpg"
          />
          <source
            media="(max-width: 1280px)"
            srcSet="/photos/sized/red-door-1280.jpg"
          />
          <source
            media="(max-width: 1920px)"
            srcSet="/photos/sized/red-door-1920.jpg"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/sized/red-door-1920.jpg"
            alt="Siffaat Gandhi — actor portfolio cover, Mumbai"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
        </picture>
      </div>

      <div
        className="absolute left-[68px] right-4 z-10 md:left-[170px] md:right-auto md:top-6"
        style={{ top: 18 }}
      >
        <p className="font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-paper/95 leading-[1.55] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
          WRITTEN BY SIFFAAT GANDHI
          <br />
          PHOTOGRAPHY VARIOUS
          <br />
          MUMBAI · MMXXVI
        </p>
        <p className="mt-5 font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-paper/75 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
          SIFFAATGANDHI.ONLINE / SPOTLIGHT
        </p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] hero-top-scrim"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-[60%] hero-title-side-scrim"
      />

      <h1
        className="absolute right-0 z-10 font-display uppercase text-pink leading-[0.86] tracking-tight2 hero-title-shadow"
        style={{
          fontSize: "clamp(3.25rem, 11vw, 9.5rem)",
          top: "clamp(110px, 16vh, 200px)",
          paddingRight: "clamp(0.75rem, 2vw, 2rem)",
          textAlign: "right",
          transform: `translate3d(0, ${titleY}px, 0)`,
          opacity: titleOpacity,
          willChange: "transform, opacity",
        }}
      >
        {[
          ["SIFFAAT", "GANDHI."],
          ["ONE", "LOOK."],
          ["EVERY", "ROLE."],
        ].map((line, li) => (
          <span key={li} className="block">
            {line.map((word, wi) => {
              const idx = li * 2 + wi;
              return (
                <span
                  key={wi}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <span
                    className="hero-word"
                    style={{ animationDelay: `${0.18 + idx * 0.08}s` }}
                  >
                    {word}
                  </span>
                  {wi === 0 ? <span className="inline-block w-[0.25em]">{" "}</span> : null}
                </span>
              );
            })}
          </span>
        ))}
      </h1>

      <div
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center text-paper/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
        style={{ opacity: cueOpacity }}
      >
        <span className="font-inter text-[10px] uppercase tracking-widest mb-2">
          Scroll
        </span>
        <svg
          aria-hidden
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-current"
        >
          <path d="M5 9 0 4h10z" />
        </svg>
      </div>
    </section>
  );
}
