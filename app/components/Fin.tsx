"use client";

import { useFadeIn } from "@/lib/useFadeIn";
import Bindi from "./stickers/Bindi";
import MumbaiHeart from "./stickers/MumbaiHeart";
import ChaiCup from "./stickers/ChaiCup";
import StickerWiggle from "./stickers/StickerWiggle";

/**
 * Closing block. Mirror of i-D's "BACK TO i-D".
 * Big black slab with "FIN." in white display caps + pink "SG" sticker square
 * hanging off the right. Scattered stickers float around it.
 * Whole slab is a button → scroll to top.
 */
export default function Fin() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  const onClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <section className="relative bg-paper py-24 md:py-32 overflow-hidden">
      <div
        ref={ref}
        className={
          "relative mx-auto max-w-[1400px] px-6 md:pl-[180px] md:pr-12 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
      >
        <div className="relative flex items-stretch justify-center">
          <button
            type="button"
            onClick={onClick}
            aria-label="Back to top"
            className="group relative flex items-center justify-center bg-ink px-8 md:px-16 transition-transform duration-300 hover:scale-[1.01]"
            style={{ height: "clamp(180px, 28vw, 280px)" }}
          >
            <span
              className="font-display uppercase text-paper leading-none tracking-tight2"
              style={{ fontSize: "clamp(5rem, 18vw, 14rem)" }}
            >
              FIN.
            </span>
            {/* Cyan SG box hanging off right */}
            <span
              className="absolute right-[-1px] top-0 hidden md:flex items-center justify-center bg-pink text-paper"
              style={{ width: 140, height: "100%" }}
            >
              <span
                className="font-garamond italic leading-none text-paper"
                style={{ fontSize: 88 }}
              >
                SG
              </span>
            </span>
          </button>

          {/* Scattered stickers around the slab */}
          <StickerWiggle top={-30} right={"18%"} rotate={-15} width={90} zIndex={20}>
            <MumbaiHeart className="block w-full h-auto" />
          </StickerWiggle>
          <StickerWiggle bottom={-30} left={"22%"} rotate={20} width={80} zIndex={20}>
            <Bindi className="block w-full h-auto" />
          </StickerWiggle>
          <StickerWiggle bottom={-20} right={"30%"} rotate={-10} width={70} zIndex={20}>
            <ChaiCup className="block w-full h-auto" />
          </StickerWiggle>
        </div>

        <p className="mt-12 text-center font-inter text-[10px] uppercase tracking-widest text-warmGrey">
          Back to top — siffatgandhi.com / spotlight
        </p>
      </div>
    </section>
  );
}
