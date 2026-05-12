"use client";

import { storyCopy } from "@/lib/content";
import ChapterEyebrow from "./ChapterEyebrow";
import ScrollPinned from "./ScrollPinned";

export default function Story() {
  const [first, ...rest] = storyCopy.bodyParagraphs;

  return (
    <ScrollPinned
      id="story"
      image="/photos/sized/red-door-1280.jpg"
      alt="Siffaat Gandhi — red door portrait, lehenga and leather, Mumbai"
      caption="RED DOOR · MUMBAI"
      side="right"
      className="bg-paper"
    >
      <ChapterEyebrow n="01" label="STORY" />

      <h2
        className="mt-6 font-display uppercase leading-[0.88] tracking-tight2 text-ink"
        style={{ fontSize: "clamp(2.4rem, 6.2vw, 5.25rem)" }}
      >
        FROM LUDHIANA,
        <br />
        TO BOMBAY.
      </h2>

      <p
        className="mt-10 max-w-[560px] font-garamond italic text-warmGrey"
        style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)" }}
      >
        {storyCopy.dek}
      </p>

      <div className="mt-12 max-w-[560px] font-garamond text-ink leading-[1.55] text-[19px] md:text-[20px]">
        <p className="drop-cap">{first}</p>
      </div>

      <div className="mt-10 max-w-[560px] font-garamond text-ink leading-[1.65] text-[17px] md:text-[18px]">
        {rest.map((p, i) => (
          <p key={i} className="mt-0 mb-6">
            {p}
          </p>
        ))}
      </div>

      {storyCopy.signature && (
        <p className="mt-12 font-garamond italic text-pink text-lg md:text-xl tracking-wide">
          {storyCopy.signature}
        </p>
      )}
    </ScrollPinned>
  );
}
