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
          "relative mx-auto max-w-[1500px] px-6 md:pl-[180px] md:pr-12 py-16 md:py-20 scroll-fade min-h-[560px] md:min-h-[720px] " +
          (isVisible ? "is-visible" : "")
        }
      >
        <p className="font-inter text-[10px] uppercase tracking-widest text-pink">
          SCENES, AT REST.
        </p>
        <h2
          className="mt-3 font-display uppercase leading-[0.9] tracking-tight2 text-ink relative z-10"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          STICKERS
          <br />
          FROM THE ROOM.
        </h2>
        <p className="mt-6 max-w-md font-garamond italic text-warmGrey text-lg md:text-xl relative z-10">
          A few things she carries around — between takes, between cities.
        </p>

        {/* Mobile sticker scatter — clustered at the bottom of the section */}
        <div className="relative mt-8 h-[300px] md:hidden">
          <StickerWiggle bottom={140} left={"4%"} rotate={-8} width={92}>
            <MumbaiHeart className="block w-full h-auto" />
          </StickerWiggle>
          <StickerWiggle bottom={200} right={"6%"} rotate={12} width={78}>
            <Bindi className="block w-full h-auto" />
          </StickerWiggle>
          <StickerWiggle bottom={20} left={"32%"} rotate={-14} width={120}>
            <Clapperboard className="block w-full h-auto" />
          </StickerWiggle>
          <StickerWiggle bottom={40} right={"8%"} rotate={9} width={80}>
            <ChaiCup className="block w-full h-auto" />
          </StickerWiggle>
          <StickerWiggle bottom={140} left={"40%"} rotate={-5} width={80}>
            <IndiaMap className="block w-full h-auto" />
          </StickerWiggle>
        </div>

        {/* Desktop sticker scatter — positioned across the right & middle */}
        <div className="hidden md:block">
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
      </div>
    </section>
  );
}
