"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";

type Tile = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
};

type Props = {
  tiles: [Tile, Tile, Tile];
};

export default function PhotoTrio({ tiles }: Props) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const [left, topRight, bottomRight] = tiles;

  // Eased entry: tiles slide+scale in from below as section enters viewport
  const enter = Math.min(1, Math.max(0, (progress - 0.05) * 1.6));
  const e = 1 - Math.pow(1 - enter, 3);

  const tileStyle = (delay: number) => {
    const local = Math.max(0, Math.min(1, (e - delay) / (1 - delay || 1)));
    return {
      transform: `translate3d(0, ${(1 - local) * 48}px, 0) scale(${0.94 + local * 0.06})`,
      opacity: 0.0 + local,
      transition: "transform 0.05s linear, opacity 0.05s linear",
      willChange: "transform, opacity",
    } as const;
  };

  // Inner photo parallax — photo drifts within frame as section travels
  const parallaxY = (mult: number) => ({
    transform: `translate3d(0, ${(progress - 0.5) * mult}px, 0)`,
    willChange: "transform",
  });

  return (
    <section className="bg-olive">
      <div ref={ref} className="mx-auto max-w-[1500px] px-3 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <figure
            className="col-span-7 md:col-span-6 relative overflow-hidden bg-ink"
            style={{ aspectRatio: "3/4", ...tileStyle(0) }}
          >
            <div className="absolute inset-0" style={parallaxY(-40)}>
              <Image
                src={left.src}
                alt={left.alt}
                fill
                sizes="50vw"
                className="object-cover scale-[1.08]"
                style={{ objectPosition: left.position ?? "center" }}
              />
            </div>
          </figure>

          <div className="col-span-5 md:col-span-6 flex flex-col gap-3 md:gap-5">
            <figure
              className="relative overflow-hidden bg-ink"
              style={{ aspectRatio: "4/3", flex: "0 0 auto", ...tileStyle(0.12) }}
            >
              <div className="absolute inset-0" style={parallaxY(-30)}>
                <Image
                  src={topRight.src}
                  alt={topRight.alt}
                  fill
                  sizes="50vw"
                  className="object-cover scale-[1.08]"
                  style={{ objectPosition: topRight.position ?? "center" }}
                />
              </div>
            </figure>
            <figure
              className="relative overflow-hidden bg-ink flex-1"
              style={{ minHeight: 220, ...tileStyle(0.22) }}
            >
              <div className="absolute inset-0" style={parallaxY(-30)}>
                <Image
                  src={bottomRight.src}
                  alt={bottomRight.alt}
                  fill
                  sizes="50vw"
                  className="object-cover scale-[1.08]"
                  style={{ objectPosition: bottomRight.position ?? "center" }}
                />
              </div>
            </figure>
          </div>
        </div>

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
