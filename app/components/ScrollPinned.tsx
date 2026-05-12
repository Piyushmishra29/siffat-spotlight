"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { useScrollProgress } from "@/lib/useScrollProgress";

type Props = {
  image: string;
  alt: string;
  caption?: string;
  position?: string;
  /** Side the sticky photo sits on (desktop). Mobile always stacks text-first. */
  side?: "left" | "right";
  /** Optional section min-height in vh. Omit to let content determine
   *  height — the sticky photo dwells across the text-column scroll
   *  naturally. Pass a value only when you want extra dwell after text. */
  heightVh?: number;
  className?: string;
  id?: string;
  children: ReactNode;
};

/**
 * Long-form text column beside a sticky photo column.
 * Desktop: two columns, photo column is sticky and parallaxes within its frame
 * as you scroll past. Mobile: stacks, photo first, then text — no sticky.
 */
export default function ScrollPinned({
  image,
  alt,
  caption,
  position = "center",
  side = "right",
  heightVh,
  className = "",
  id,
  children,
}: Props) {
  const { ref, progress } = useScrollProgress<HTMLElement>();

  const innerY = (progress - 0.5) * -90;
  const innerScale = 1.06 + Math.abs(progress - 0.5) * 0.04;

  const photoCol = (
    <div className="md:col-span-5">
      <div className="md:sticky md:top-0 md:h-screen md:flex md:items-center">
        <figure className="relative w-full aspect-[3/4] overflow-hidden bg-ink md:aspect-auto md:h-[78vh]">
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(0, ${innerY}px, 0) scale(${innerScale})`,
              willChange: "transform",
            }}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
              style={{ objectPosition: position }}
            />
          </div>
          {caption && (
            <figcaption className="absolute bottom-3 left-3 right-3 font-inter text-[9px] uppercase tracking-widest text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );

  const textCol = (
    <div className="md:col-span-7">{children}</div>
  );

  return (
    <section
      ref={ref}
      id={id}
      className={"relative " + className}
      style={heightVh ? { minHeight: `${heightVh}vh` } : undefined}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:pl-[180px] md:pr-12 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {side === "left" ? (
            <>
              {photoCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {photoCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
