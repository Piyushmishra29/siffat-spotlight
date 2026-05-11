"use client";

import { useFadeIn } from "@/lib/useFadeIn";

type Props = {
  eyebrow?: string;
  children: React.ReactNode;
};

/**
 * Full-bleed olive-coloured section. Cream Garamond body. Optional small-caps
 * eyebrow above. Used for training / mentor / softer-rhythm passages.
 */
export default function OliveSection({ eyebrow, children }: Props) {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="bg-olive text-paper py-24 md:py-36">
      <div
        ref={ref}
        className={
          "mx-auto max-w-[1100px] px-6 md:pl-[180px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
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
