import type { Metadata } from "next";
import Image from "next/image";
import {
  bio,
  contact,
  brands,
  webSeries,
  musicVideos,
  shortFilmsProduced,
  auditionReels,
  youtubeId,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Siffaat Gandhi — Spotlight v5 (Couture)",
  description:
    "Pure monochrome couture portfolio. Oversized serif, asymmetric grid, zero radius.",
  robots: { index: false, follow: false },
};

function ytPoster(url: string | null | undefined) {
  if (!url) return null;
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

const PORTRAITS: Array<{ src: string; label: string; year: string }> = [
  { src: "/photos/sized/red-portrait-1280.jpg", label: "Crimson", year: "MMXXVI" },
  { src: "/photos/sized/cream-sweater-1280.jpg", label: "Chamber", year: "MMXXVI" },
  { src: "/photos/sized/vogue-side-1280.jpg", label: "Profile", year: "MMXXV" },
  { src: "/photos/sized/red-bike-front-1280.jpg", label: "Metal", year: "MMXXV" },
  { src: "/photos/sized/sundown-fabric-1280.jpg", label: "Sundown", year: "MMXXVI" },
  { src: "/photos/sized/sheer-floral-1280.jpg", label: "Daylight", year: "MMXXVI" },
];

export default function V5Page() {
  return (
    <main className="min-h-screen bg-v5bg text-v5ink font-garamond">
      {/* Top spec line — couture invoice header */}
      <header className="border-b border-v5ink">
        <div className="mx-auto flex max-w-[1600px] items-baseline justify-between px-6 py-4 md:px-12">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em]">
            SIFFAAT GANDHI <span className="text-v5mute">/</span> SPOTLIGHT V <span className="text-v5mute">·</span> Nº 05
          </p>
          <p className="hidden md:block font-inter text-[10px] uppercase tracking-[0.3em] text-v5mute">
            COUTURE EDITION — MUMBAI — MMXXVI
          </p>
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-v5mute">
            FOLIO 01 / 05
          </p>
        </div>
      </header>

      {/* ===== I. HERO — asymmetric oversized type ===== */}
      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6 md:gap-8">
          {/* Roman numeral column */}
          <p className="col-span-12 md:col-span-1 font-garamond italic text-2xl text-v5mute md:text-3xl md:[writing-mode:vertical-lr]">
            I — COVER
          </p>

          {/* Display block */}
          <div className="col-span-12 md:col-span-7">
            <p className="mb-6 font-inter text-[10px] uppercase tracking-[0.32em] text-v5ink">
              An actor &middot; presented in five folios &middot; from Mumbai
            </p>
            <h1
              className="font-garamond leading-[0.86] tracking-[-0.025em] text-v5ink"
              style={{ fontSize: "clamp(3rem, 13vw, 11rem)" }}
            >
              Siffaat
              <br />
              <span className="italic font-light">Gandhi.</span>
            </h1>
            <p className="mt-10 max-w-md font-garamond text-xl leading-snug text-v5ink md:text-2xl">
              Web series, TVCs, music videos, short films, theatre, the occasional self-tape — and the room that goes still when the camera rolls.
            </p>
            <div className="mt-10 flex items-center gap-6 border-t border-v5ink pt-4">
              <a
                href={`mailto:${contact.email}`}
                className="font-inter text-[11px] uppercase tracking-[0.28em] text-v5ink underline-offset-4 hover:underline"
              >
                Casting enquiries →
              </a>
              <a
                href="#tape"
                className="font-inter text-[11px] uppercase tracking-[0.28em] text-v5mute hover:text-v5ink"
              >
                The tape ↓
              </a>
            </div>
          </div>

          {/* Hero portrait — single, oversized */}
          <figure className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden grayscale">
              <Image
                src="/photos/sized/red-portrait-1280.jpg"
                alt="Siffaat Gandhi — cover portrait"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority
                style={{ objectPosition: "center 25%" }}
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between border-t border-v5ink pt-3">
              <span className="font-garamond italic text-base">Plate I — Crimson</span>
              <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-v5mute">2026 / Mumbai</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <RuleBreak />

      {/* ===== II. WORK ===== */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <FolioEyebrow numeral="II" label="WORK · SELECT REEL" />
          <h2
            className="mt-6 font-garamond leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            <span className="italic font-light">A reel,</span>
            <br />
            in eighteen cards.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {[
              ...webSeries.map((w, i) => ({
                title: w.title,
                sub: w.production,
                href: w.url,
                poster: ytPoster(w.url) ?? "/photos/films/kalamanch.jpg",
                tag: "Series",
                seq: 1 + i,
              })),
              ...musicVideos.map((m, i) => ({
                title: m.title,
                sub: m.artist ?? m.feature ?? "Music video",
                href: m.url,
                poster: ytPoster(m.url),
                tag: "Music",
                seq: 3 + i,
              })),
              ...shortFilmsProduced.map((f, i) => ({
                title: f.title,
                sub: f.credit,
                href: f.url ?? null,
                poster: ytPoster(f.url) ?? "/photos/sized/vogue-front-1280.jpg",
                tag: "Film",
                seq: 5 + i,
              })),
              ...brands.slice(0, 9).map((b, i) => ({
                title: b.name,
                sub: "TVC / Campaign",
                href: b.url,
                poster:
                  ytPoster(b.url) ??
                  (b.name === "Pure It"
                    ? "/photos/brands/pureit.jpg"
                    : b.name === "Sixam Glow"
                      ? "/photos/brands/glow-tribe.jpg"
                      : b.name === "JBL"
                        ? "/photos/brands/jbl.jpg"
                        : "/photos/sized/floral-saree-1280.jpg"),
                tag: "TVC",
                seq: 7 + i,
              })),
            ].map((w, i) => (
              <WorkPlate key={i} {...w} />
            ))}
          </div>
        </div>
      </section>

      <RuleBreak />

      {/* ===== III. PORTRAIT INDEX ===== */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <FolioEyebrow numeral="III" label="RANGE · PORTRAIT INDEX" />
          <h2
            className="mt-6 font-garamond leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            One actor,
            <br />
            <span className="italic font-light">six plates.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
            {PORTRAITS.map((p, i) => {
              // asymmetric grid — alternates 7 / 5 / 5 / 7 column spans
              const span =
                i === 0 || i === 5 ? "md:col-span-7" : i === 1 || i === 4 ? "md:col-span-5" : "md:col-span-6";
              return (
                <figure key={p.src} className={`${span}`}>
                  <div className="relative aspect-[4/5] overflow-hidden grayscale">
                    <Image
                      src={p.src}
                      alt={p.label}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      style={{ objectPosition: "center 25%" }}
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between border-t border-v5ink pt-3">
                    <span className="font-garamond italic text-lg text-v5ink">
                      Plate {romanize(i + 1)} <span className="text-v5mute">— {p.label}</span>
                    </span>
                    <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-v5mute">{p.year}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <RuleBreak />

      {/* ===== IV. LETTER ===== */}
      <section className="px-6 py-16 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <FolioEyebrow numeral="IV" label="STORY · LETTER FROM LUDHIANA" />

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
            <article className="md:col-span-8">
              <p className="font-garamond text-2xl leading-[1.5] text-v5ink md:text-3xl">
                <span className="float-left mr-4 pt-2 font-garamond text-7xl italic leading-[0.85] text-v5ink md:text-8xl">F</span>
                or me, acting has never been about performing — it&rsquo;s about feeling things deeply, observing people, understanding emotions, and bringing honesty to every character I play.
              </p>
              <p className="mt-8 font-garamond italic text-base text-v5mute">
                — Siffaat Gandhi, Mumbai, MMXXVI
              </p>
            </article>

            <aside className="md:col-span-4">
              <div className="border-t border-b border-v5ink">
                {[
                  ["From", bio.hometown],
                  ["Based", bio.basedIn],
                  ["Since", `${bio.inMumbaiSince}`],
                  ["Tongue", bio.languages.join(" · ")],
                  ["Practice", bio.skills.join(" · ")],
                  ["Stature", bio.height],
                  ["Trained at", bio.training.school],
                  ["Mentor", bio.training.mentor],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-v5line py-3 last:border-0">
                    <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-v5mute">{k}</span>
                    <span className="font-garamond italic text-base text-v5ink">{v}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <RuleBreak />

      {/* ===== V. THE TAPE ===== */}
      <section id="tape" className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <FolioEyebrow numeral="V" label="TAPE · THE ARCHIVE" />
          <h2
            className="mt-6 font-garamond leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            <span className="italic font-light">The tape.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-14 md:grid-cols-3">
            {auditionReels.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden bg-v5wash grayscale">
                  <Image
                    src={r.poster ?? `https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`}
                    alt={r.posterAlt ?? `Tape ${r.id}`}
                    fill
                    unoptimized={!r.poster}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={r.posterPosition ? { objectPosition: r.posterPosition } : undefined}
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t border-v5ink pt-3">
                  <span className="font-garamond italic text-base">
                    Tape Nº {r.id}
                    <span className="text-v5mute"> — Mumbai</span>
                  </span>
                  <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-v5mute group-hover:text-v5ink">Play ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RuleBreak />

      {/* ===== CONTACT / FIN ===== */}
      <section className="bg-v5ink text-v5bg px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-v5bg/70">
            COLOPHON · CONTACT
          </p>
          <h2
            className="mt-6 font-garamond leading-[0.88] tracking-[-0.025em] text-v5bg"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
          >
            Write,
            <br />
            <span className="italic font-light">or call.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            {[
              { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
              { label: "Instagram", value: contact.instagram, href: contact.instagramUrl },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group block border-t border-v5bg pt-4"
              >
                <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-v5bg/70">{c.label}</p>
                <p className="mt-3 break-all font-garamond text-2xl leading-snug text-v5bg md:text-3xl">
                  {c.value}
                </p>
                <p className="mt-4 font-inter text-[10px] uppercase tracking-[0.3em] text-v5bg/70 group-hover:text-v5bg">Open ↗</p>
              </a>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-v5bg/40 pt-6 md:flex-row md:items-end">
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-v5bg/65">
              SIFFAATGANDHI.ONLINE · V5 COUTURE EDITION · END OF FOLIO
            </p>
            <a href="/" className="font-inter text-[10px] uppercase tracking-[0.25em] text-v5bg/85 hover:text-v5bg">
              ← BACK TO V1
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FolioEyebrow({ numeral, label }: { numeral: string; label: string }) {
  return (
    <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-v5ink">
      FOLIO {numeral} <span className="text-v5mute">— {label}</span>
    </p>
  );
}

function RuleBreak() {
  return (
    <div className="mx-auto h-px max-w-[1600px] bg-v5ink" />
  );
}

function WorkPlate({
  title,
  sub,
  href,
  poster,
  tag,
  seq,
}: {
  title: string;
  sub: string;
  href: string | null;
  poster: string | null;
  tag: string;
  seq: number;
}) {
  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-v5wash grayscale">
        {poster ? (
          <Image
            src={poster}
            alt={title}
            fill
            unoptimized
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-garamond italic text-lg text-v5mute">{title}</span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-v5ink pt-3">
        <p className="font-garamond text-lg leading-snug text-v5ink">
          <span className="text-v5mute">№{String(seq).padStart(2, "0")} ·</span>{" "}
          <span className="italic font-light">{title}</span>
        </p>
        <p className="shrink-0 font-inter text-[10px] uppercase tracking-[0.22em] text-v5mute">
          {tag}
        </p>
      </div>
      <p className="mt-1 font-garamond italic text-sm text-v5mute">{sub}</p>
    </>
  );
  const className = "group block";
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

function romanize(n: number) {
  const r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return r[n - 1] ?? `${n}`;
}
