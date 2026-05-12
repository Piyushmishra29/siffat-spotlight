"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";
import Bindi from "./stickers/Bindi";
import ChaiCup from "./stickers/ChaiCup";
import Clapperboard from "./stickers/Clapperboard";
import MumbaiHeart from "./stickers/MumbaiHeart";
import IndiaMap from "./stickers/IndiaMap";
import StickerWiggle from "./stickers/StickerWiggle";

function Drift({
  progress,
  multiplier,
  children,
}: {
  progress: number;
  multiplier: number;
  children: React.ReactNode;
}) {
  const y = (progress - 0.5) * multiplier;
  return (
    <div
      className="pointer-events-none"
      style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
}

/** Tilted polaroid anchor — a "thing she carries" focal point so the
 *  sticker scatter has something to compose around. */
function Polaroid({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <figure
      className={`absolute bg-paper p-3 pb-10 shadow-[0_18px_40px_rgba(0,0,0,0.18)] ${className ?? ""}`}
      style={style}
    >
      <div className="relative w-full aspect-square overflow-hidden bg-ink">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 240px, 160px"
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
        />
      </div>
      <figcaption className="absolute bottom-2 inset-x-3 text-center font-garamond italic text-ink/75 text-[11px]">
        between takes.
      </figcaption>
    </figure>
  );
}

export default function StickersScatter() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section
      id="stickers"
      className="relative bg-paper overflow-hidden"
    >
      <div
        ref={ref}
        className="relative mx-auto max-w-[1500px] px-6 md:pl-[180px] md:pr-12 py-14 md:py-20 min-h-[440px] md:min-h-[600px]"
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

        {/* Mobile: polaroid + clustered stickers */}
        <div className="relative mt-10 h-[340px] md:hidden">
          <Drift progress={progress} multiplier={20}>
            <Polaroid
              src="/photos/sized/bindi-720.jpg"
              alt="Siffaat Gandhi — bindi portrait, between takes"
              className="right-2 top-6 z-[1]"
              style={{ width: 160, transform: "rotate(6deg)" }}
            />
          </Drift>

          <Drift progress={progress} multiplier={-30}>
            <StickerWiggle top={20} left={"6%"} rotate={-10} width={92}>
              <MumbaiHeart className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={28}>
            <StickerWiggle top={160} left={"4%"} rotate={9} width={86}>
              <Clapperboard className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={-20}>
            <StickerWiggle top={210} left={"40%"} rotate={-12} width={74}>
              <ChaiCup className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={32}>
            <StickerWiggle bottom={-10} right={"5%"} rotate={8} width={72}>
              <IndiaMap className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={-26}>
            <StickerWiggle top={4} right={"40%"} rotate={14} width={56}>
              <Bindi className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
        </div>

        {/* Desktop: polaroid center-right, stickers clustered around it */}
        <div className="hidden md:block">
          <Drift progress={progress} multiplier={20}>
            <Polaroid
              src="/photos/sized/bindi-720.jpg"
              alt="Siffaat Gandhi — bindi portrait, between takes"
              className="top-12 right-[20%] z-[1]"
              style={{ width: 240, transform: "rotate(6deg)" }}
            />
          </Drift>

          <Drift progress={progress} multiplier={-40}>
            <StickerWiggle top={40} right={"8%"} rotate={-10} width={130}>
              <MumbaiHeart className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={36}>
            <StickerWiggle top={160} right={"42%"} rotate={12} width={96}>
              <Bindi className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={-28}>
            <StickerWiggle bottom={60} right={"38%"} rotate={-14} width={150}>
              <Clapperboard className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={44}>
            <StickerWiggle bottom={40} right={"10%"} rotate={9} width={108}>
              <ChaiCup className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
          <Drift progress={progress} multiplier={-32}>
            <StickerWiggle top={240} right={"18%"} rotate={-6} width={96}>
              <IndiaMap className="block w-full h-auto" />
            </StickerWiggle>
          </Drift>
        </div>
      </div>
    </section>
  );
}
