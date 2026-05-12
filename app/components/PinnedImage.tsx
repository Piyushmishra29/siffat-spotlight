"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  /** Section height as a vh multiple. Default 140 — leaves runway for the
   *  sticky frame to dwell while we scroll. */
  heightVh?: number;
};

/**
 * Full-bleed pinned image break. Image is sticky to the top while the section
 * scrolls past; gentle scale + parallax within the frame keeps it alive.
 */
export default function PinnedImage({
  src,
  alt,
  caption,
  position = "center",
  heightVh = 140,
}: Props) {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const scale = 1 + progress * 0.1;
  const innerY = (progress - 0.5) * -40;

  return (
    <section
      ref={ref}
      className="relative bg-ink"
      style={{ height: `${heightVh}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(0, ${innerY}px, 0) scale(${scale})`,
            willChange: "transform",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: position }}
          />
        </div>

        {caption && (
          <p className="absolute bottom-6 left-6 md:bottom-8 md:left-[200px] font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
