"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  height?: string;
};

export default function Interstitial({
  src,
  alt,
  caption,
  position = "center",
  height = "h-[44vh] md:h-[58vh]",
}: Props) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const y = (progress - 0.5) * 40;
  const scale = 1.05 + Math.abs(progress - 0.5) * 0.04;

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden bg-ink ${height}`}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
          willChange: "transform",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {caption && (
        <p className="absolute left-6 bottom-5 z-10 font-inter text-[10px] uppercase tracking-widest text-paper/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {caption}
        </p>
      )}
    </section>
  );
}
