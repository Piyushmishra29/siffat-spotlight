import Image from "next/image";

/**
 * Hero — i-D style.
 * Full-bleed cover-suit portrait on right. Massive pink display caps overlay
 * "SIFFAT, BY SIFFAT, FOR SIFFAT." Credit stack sits in the negative space
 * next to the SGBlock badge.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper text-ink"
    >
      {/* Photo */}
      <div className="absolute inset-0">
        <Image
          src="/photos/cover-suit.jpg"
          alt="Siffat Gandhi — Spotlight cover"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* Credit stack — sits to the right of the SGBlock badge */}
      <div
        className="absolute left-4 right-4 z-10 md:left-[170px] md:right-auto md:top-6"
        style={{ top: 18 }}
      >
        <p className="font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-ink/85 leading-[1.55]">
          WRITTEN BY SIFFAT GANDHI
          <br />
          PHOTOGRAPHY VARIOUS
          <br />
          MUMBAI · MMXXVI
        </p>
        <p className="mt-5 font-inter text-[10px] md:text-[11px] uppercase tracking-widest text-ink/65">
          SIFFATGANDHI.COM / SPOTLIGHT
        </p>
      </div>

      {/* Massive pink display caps — hangs off the right edge */}
      <h1
        className="absolute right-0 z-10 font-display uppercase text-pink leading-[0.86] tracking-tight2 text-stroke-hero"
        style={{
          fontSize: "clamp(2.75rem, 9.5vw, 9.5rem)",
          top: "clamp(100px, 16vh, 200px)",
          paddingRight: "clamp(0.75rem, 2vw, 2rem)",
          textAlign: "right",
        }}
      >
        SIFFAT,
        <br />
        BY SIFFAT,
        <br />
        FOR SIFFAT.
      </h1>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center text-ink/85">
        <span className="font-inter text-[10px] uppercase tracking-widest mb-2">
          Scroll
        </span>
        <svg
          aria-hidden
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-current"
        >
          <path d="M5 9 0 4h10z" />
        </svg>
      </div>
    </section>
  );
}
