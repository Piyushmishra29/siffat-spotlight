"use client";

import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Tailwind-able position class names, e.g. "top-6 left-10" — optional. */
  className?: string;
  rotate?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: number;
  zIndex?: number;
};

/**
 * Wraps a sticker SVG and absolutely positions it with a wiggle animation.
 * The wiggle reads the --rot CSS var so the resting angle is preserved.
 */
export default function StickerWiggle({
  children,
  className = "",
  rotate = 0,
  top,
  left,
  right,
  bottom,
  width = 96,
  zIndex = 30,
}: Props) {
  const style: CSSProperties = {
    position: "absolute",
    top,
    left,
    right,
    bottom,
    width,
    zIndex,
    ["--rot" as string]: `${rotate}deg`,
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <div
      style={style}
      className={`sticker-wiggle pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
