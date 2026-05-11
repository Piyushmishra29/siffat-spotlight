"use client";

import { storyCopy } from "@/lib/content";
import { useFadeIn } from "@/lib/useFadeIn";

export default function Story() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  const [first, ...rest] = storyCopy.bodyParagraphs;

  return (
    <section className="bg-paper py-24 md:py-36">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1280px] px-6 md:pl-[180px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <p className="font-inter text-[10px] uppercase tracking-widest text-pink">
          STORY.
        </p>

        <h2
          className="mt-6 font-display uppercase leading-[0.88] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          FROM LUDHIANA,
          <br />
          TO BOMBAY.
        </h2>

        <p
          className="mt-10 max-w-[720px] font-garamond italic text-warmGrey"
          style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.4rem)" }}
        >
          {storyCopy.dek}
        </p>

        {/* First paragraph — wide single column with drop cap */}
        <div className="mt-12 max-w-[760px] font-garamond text-ink leading-[1.55] text-[19px] md:text-[22px]">
          <p className="drop-cap">{first}</p>
        </div>

        {/* Subsequent paragraphs in 2 columns on md+ */}
        <div className="mt-10 max-w-[1100px] font-garamond text-ink leading-[1.6] text-[17px] md:text-[18px] md:columns-2 md:gap-12 md:[column-fill:_balance]">
          {rest.map((p, i) => (
            <p key={i} className="mt-0 mb-6 break-inside-avoid">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-12 font-garamond italic text-pink text-lg md:text-xl tracking-wide">
          {storyCopy.signature}
        </p>
      </div>
    </section>
  );
}
