"use client";

import { musicVideos, youtubeId } from "@/lib/content";
import { useFadeIn } from "@/lib/useFadeIn";
import LiteYouTube from "./LiteYouTube";

const POSTERS: Record<string, string> = {
  "SUN TOH NA": "/photos/sun-toh-na.jpg",
  "YAAR KA SATAYA HUA": "/photos/yaar-ka-sataya-hua.jpg",
};

export default function MusicVideos() {
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
          IN MOTION.
        </p>
        <h2
          className="font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          ON SCREEN,
          <br />
          IN MOTION.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {musicVideos.map((mv) => {
            const id = youtubeId(mv.url) ?? "";
            const poster = POSTERS[mv.title] ?? "/photos/cover-suit.jpg";
            return (
              <figure key={mv.title} className="flex flex-col">
                <LiteYouTube ytId={id} title={mv.title} poster={poster} />
                <figcaption className="mt-4 flex items-baseline justify-between border-t hairline pt-4">
                  <div>
                    <h3 className="font-display uppercase text-xl md:text-2xl tracking-tight2 text-ink">
                      {mv.title}
                    </h3>
                    <p className="mt-1 font-inter text-[11px] uppercase tracking-widest text-warmGrey">
                      {mv.artist ? mv.artist : mv.feature}
                      {mv.label ? ` · ${mv.label}` : ""}
                      {mv.timestamp ? ` · ${mv.timestamp}` : ""}
                    </p>
                  </div>
                  <a
                    href={mv.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[10px] uppercase tracking-widest text-pink whitespace-nowrap"
                  >
                    YouTube →
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
