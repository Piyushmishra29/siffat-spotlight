"use client";

import { useFadeIn } from "@/lib/useFadeIn";
import Bindi from "./stickers/Bindi";
import ChaiCup from "./stickers/ChaiCup";
import Clapperboard from "./stickers/Clapperboard";
import MumbaiHeart from "./stickers/MumbaiHeart";
import IndiaMap from "./stickers/IndiaMap";
import StickerWiggle from "./stickers/StickerWiggle";

/**
 * White section. Five hand-drawn stickers scattered with tuned positions
 * and rotations. Tracked-caps caption top-left.
 */
export default function StickersScatter() {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  return (
    <section className="relative bg-paper overflow-hidden">
      <div
        ref={ref}
        className={
          "relative mx-auto max-w-[1500px] px-6 md:pl-[180px] md:pr-12 py-16 md:py-20 scroll-fade " +
          (isVisible ? "is-visible" : "")
        }
        style={{ minHeight: 720 }}
      >
        <p className="font-inter text-[10px] uppercase tracking-widest text-pink">
          SCENES, AT REST.
        </p>
        <h2
          className="mt-3 font-display uppercase leading-[0.9] tracking-tight2 text-ink"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          STICKERS
          <br />
          FROM THE ROOM.
        </h2>
        <p className="mt-6 max-w-md font-garamond italic text-warmGrey text-lg md:text-xl">
          A few things she carries around — between takes, between cities.
        </p>

        {/* sticker scatter — positioned across the right & middle of the
            section so they read as a cluster next to the heading */}
        <StickerWiggle top={60} right={"6%"} rotate={-8} width={140}>
          <MumbaiHeart className="block w-full h-auto" />
        </StickerWiggle>
        <StickerWiggle top={220} right={"24%"} rotate={12} width={110}>
          <Bindi className="block w-full h-auto" />
        </StickerWiggle>
        <StickerWiggle bottom={120} right={"40%"} rotate={-14} width={160}>
          <Clapperboard className="block w-full h-auto" />
        </StickerWiggle>
        <StickerWiggle bottom={70} right={"12%"} rotate={9} width={120}>
          <ChaiCup className="block w-full h-auto" />
        </StickerWiggle>
        <StickerWiggle top={350} right={"50%"} rotate={-5} width={120}>
          <IndiaMap className="block w-full h-auto" />
        </StickerWiggle>
      </div>
    </section>
  );
}
