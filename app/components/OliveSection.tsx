"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";
import { easeOutCubic, tileLocal } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  children: React.ReactNode;
};

export default function OliveSection({ eyebrow, children }: Props) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const e = easeOutCubic(tileLocal(progress, 0.05, 0.6));
  const motion = {
    transform: `translate3d(0, ${(1 - e) * 28}px, 0)`,
    opacity: 0.0 + e,
    willChange: "transform, opacity",
  } as const;

  return (
    <section className="bg-olive text-paper py-24 md:py-36">
      <div
        ref={ref}
        className="mx-auto max-w-[1100px] px-6 md:pl-[180px] md:pr-12"
        style={motion}
      >
        {eyebrow && (
          <p className="mb-8 font-inter text-[10px] uppercase tracking-widest text-paper/75">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
