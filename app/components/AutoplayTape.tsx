"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  ytId: string;
  /** Visible label inside the tile (e.g. "Nº 01"). */
  number: string;
  /** Thumbnail src to show while the tile is out of view. */
  thumb: string;
  alt: string;
};

/**
 * Self-tape tile that lazily mounts a muted YouTube iframe when in view,
 * looping a single video via `playlist=<sameId>`. Out of view → static
 * thumbnail (saves CPU + bandwidth). Click is handled by the parent <a>;
 * the iframe sits beneath a transparent overlay so the link wins.
 */
export default function AutoplayTape({ ytId, number, thumb, alt }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setInView(e.isIntersecting && e.intersectionRatio > 0.35);
        }
      },
      { threshold: [0, 0.35, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const src =
    "https://www.youtube-nocookie.com/embed/" +
    ytId +
    "?autoplay=1&mute=1&loop=1&playlist=" +
    ytId +
    "&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1";

  return (
    <div
      ref={ref}
      className="group/tape relative aspect-video w-full overflow-hidden bg-ink"
    >
      {/* Static thumbnail — always rendered as a base layer so a paused tile
          still looks finished. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={alt}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (!img.dataset.fallback) {
            img.dataset.fallback = "1";
            img.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
          }
        }}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-500 group-hover/tape:opacity-100"
      />

      {inView && (
        <iframe
          src={src}
          title={alt}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          // Scaled aggressively so the YouTube watermark, modestbranding
          // link, and any chrome live outside the visible aspect-video frame.
          className="pointer-events-none absolute left-1/2 top-1/2 h-[260%] w-[260%] -translate-x-1/2 -translate-y-1/2"
          style={{ border: 0 }}
        />
      )}

      {/* Belt-and-braces mask for the bottom-right area in case YT chrome
          still leaks past the oversized iframe — same ink as the tile bg. */}
      {inView && (
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-0 w-[26%] h-[18%] bg-ink"
        />
      )}

      {/* Tile labels live above both layers. */}
      <span className="pointer-events-none absolute left-3 top-3 font-display uppercase text-2xl md:text-3xl text-pink drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
        {number}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 font-inter text-[9px] uppercase tracking-widest text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover/tape:-translate-x-0.5">
        Play ↗
      </span>

      {/* Pink hover wash + left border slide (keeps existing affordance). */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-pink scale-y-0 origin-top transition-transform duration-300 group-hover/tape:scale-y-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-pink/0 transition-colors duration-300 group-hover/tape:bg-pink/15"
      />
    </div>
  );
}
