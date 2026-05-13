"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

export default function V2Hero() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  // Hero parallax — image scale 1.0→1.3 + fade per skill recommendation
  const imgScale = 1 + progress * 0.3;
  const imgOpacity = Math.max(0, 1 - progress * 1.2);
  const titleY = -progress * 80;

  return (
    <section
      ref={ref}
      id="v2-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-v2bg text-v2fg"
    >
      {/* Background photo — quartered out, mostly black */}
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${imgScale})`,
          opacity: imgOpacity * 0.55,
          willChange: "transform, opacity",
          filter: "grayscale(0.6) contrast(1.05)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/sized/red-portrait-1280.jpg"
          alt="Siffaat Gandhi — actor portrait"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 30%" }}
          fetchPriority="high"
        />
      </div>

      {/* Crosshair grid lines — brutalist structural elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "8.333% 12.5%",
        }}
      />

      {/* Top meta strip */}
      <div className="absolute inset-x-0 top-0 z-10 border-b-2 border-v2border bg-v2bg/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.2em] text-v2fg/95">
            SG / SPOTLIGHT
            <span className="ml-2 text-v2acid">v2</span>
          </p>
          <p className="hidden md:block font-inter text-[10px] uppercase tracking-[0.2em] text-v2fg/65">
            MUMBAI · MMXXVI · INDEX → CREDITS → CONTACT
          </p>
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.2em] text-v2acid">
            ● ON STAGE
          </p>
        </div>
      </div>

      {/* Hero title block */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-24 md:px-12 md:pb-32"
        style={{
          transform: `translate3d(0, ${titleY}px, 0)`,
          willChange: "transform",
        }}
      >
        <p className="mb-3 font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-v2acid">
          Actor / Mumbai-based / Available
        </p>
        <h1
          className="font-inter font-black uppercase leading-[0.82] tracking-[-0.04em] text-v2fg"
          style={{ fontSize: "clamp(3rem, 14vw, 12rem)" }}
        >
          SIFFAAT
          <br />
          GANDHI.
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-3 md:max-w-[760px] md:grid-cols-4">
          <Stat n="06+" label="years training" />
          <Stat n="35" label="ad films" />
          <Stat n="02" label="web series" />
          <Stat n="∞" label="characters" />
        </div>
      </div>

      {/* Bottom edge tickers */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t-2 border-v2border bg-v2bg/95">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 md:px-12">
          <p className="font-inter text-[9px] uppercase tracking-[0.25em] text-v2fg/55">
            SCROLL ↓ FOR WORK
          </p>
          <p className="font-inter text-[9px] uppercase tracking-[0.25em] text-v2fg/55">
            siffaatgandhi.online
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-l-2 border-v2acid pl-3">
      <p className="font-inter text-2xl md:text-3xl font-black leading-none text-v2fg">
        {n}
      </p>
      <p className="mt-1 font-inter text-[9px] uppercase tracking-[0.22em] text-v2fg/70">
        {label}
      </p>
    </div>
  );
}
