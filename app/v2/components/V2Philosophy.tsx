"use client";

import { bio } from "@/lib/content";
import { useScrollProgress } from "@/lib/useScrollProgress";

export default function V2Philosophy() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const e = Math.max(0, Math.min(1, progress * 1.4));

  return (
    <section
      ref={ref}
      id="v2-about"
      className="bg-v2acid text-v2bg"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <header className="border-b-2 border-v2bg pb-8 md:pb-10">
          <p className="font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-v2bg">
            03 / PHILOSOPHY
          </p>
          <h2
            className="mt-3 font-inter font-black uppercase leading-[0.86] tracking-[-0.03em] text-v2bg"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            IT&rsquo;S NOT
            <br />
            PERFORMANCE.
            <br />
            <span className="text-v2bg/60">IT&rsquo;S PRESENCE.</span>
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
          <div
            className="md:col-span-7"
            style={{
              opacity: e,
              transform: `translate3d(0, ${(1 - e) * 24}px, 0)`,
              transition: "opacity .05s linear, transform .05s linear",
            }}
          >
            <p className="font-inter text-xl md:text-3xl font-medium uppercase leading-[1.2] tracking-[-0.01em] text-v2bg">
              For me, acting has never been about performing — it&rsquo;s about feeling things deeply, observing people, understanding emotions, and bringing honesty to every character I play.
            </p>
            <p className="mt-8 font-inter text-base uppercase tracking-[0.1em] text-v2bg/75">
              Siffaat Gandhi — actor based in Mumbai, originally from Ludhiana, Punjab.
            </p>
          </div>

          <aside className="md:col-span-5 border-2 border-v2bg bg-v2acid">
            <Row label="Hometown" value={bio.hometown} />
            <Row label="Based in" value={bio.basedIn} />
            <Row label="Years in MMR" value={`${bio.yearsInMumbai}+`} />
            <Row label="Height" value={bio.height} />
            <Row label="Languages" value={bio.languages.join(" · ")} />
            <Row label="Skills" value={bio.skills.join(" · ")} />
            <Row label="Training" value={`${bio.training.school} — ${bio.training.mentor}`} />
            <Row label="Theatre" value={`${bio.theatre.company} — ${bio.theatre.mentor}`} last />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 px-4 py-3 ${last ? "" : "border-b-2 border-v2bg/85"}`}
    >
      <p className="font-inter text-[10px] font-medium uppercase tracking-[0.22em] text-v2bg/70">
        {label}
      </p>
      <p className="font-inter text-right text-sm font-bold uppercase tracking-[-0.01em] text-v2bg md:text-base">
        {value}
      </p>
    </div>
  );
}
