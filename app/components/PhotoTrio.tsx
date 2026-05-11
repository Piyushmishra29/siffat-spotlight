"use client";

import Image from "next/image";
import { useFadeIn } from "@/lib/useFadeIn";

type Tile = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
};

type Props = {
  tiles: [Tile, Tile, Tile];
};

/**
 * Asymmetric 3-photo collage. Left: tall portrait. Right: 2 stacked tiles.
 * Olive bg fills the empty space.
 */
export default function PhotoTrio({ tiles }: Props) {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  const [left, topRight, bottomRight] = tiles;
  return (
    <section className="bg-olive">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1500px] px-3 md:px-6 py-10 md:py-16 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {/* Tall left */}
          <figure className="col-span-7 md:col-span-6 relative overflow-hidden bg-ink"
                  style={{ aspectRatio: "3/4" }}>
            <Image
              src={left.src}
              alt={left.alt}
              fill
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: left.position ?? "center" }}
            />
          </figure>

          {/* Right column with 2 tiles */}
          <div className="col-span-5 md:col-span-6 flex flex-col gap-3 md:gap-5">
            <figure className="relative overflow-hidden bg-ink"
                    style={{ aspectRatio: "4/3", flex: "0 0 auto" }}>
              <Image
                src={topRight.src}
                alt={topRight.alt}
                fill
                sizes="50vw"
                className="object-cover"
                style={{ objectPosition: topRight.position ?? "center" }}
              />
            </figure>
            <figure className="relative overflow-hidden bg-ink flex-1"
                    style={{ minHeight: 220 }}>
              <Image
                src={bottomRight.src}
                alt={bottomRight.alt}
                fill
                sizes="50vw"
                className="object-cover"
                style={{ objectPosition: bottomRight.position ?? "center" }}
              />
            </figure>
          </div>
        </div>

        {/* tiny tracked caps caption row */}
        <div className="mt-4 grid grid-cols-12 gap-3 md:gap-5">
          <p className="col-span-7 md:col-span-6 font-inter text-[10px] uppercase tracking-widest text-paper/80">
            {left.caption ?? ""}
          </p>
          <div className="col-span-5 md:col-span-6 flex flex-col gap-1">
            <p className="font-inter text-[10px] uppercase tracking-widest text-paper/80">
              {topRight.caption ?? ""}
            </p>
            <p className="font-inter text-[10px] uppercase tracking-widest text-paper/80">
              {bottomRight.caption ?? ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
