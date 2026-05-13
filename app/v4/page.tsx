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
  title: "Siffaat Gandhi — Spotlight v4 (Vintage Analog)",
  description:
    "Film-roll portfolio for actor Siffaat Gandhi. Sepia, light leaks, polaroid frames, VHS tracking.",
  robots: { index: false, follow: false },
};

const POLAROIDS = [
  { src: "/photos/sized/red-portrait-1280.jpg", caption: "Red room", rot: -3 },
  { src: "/photos/sized/cream-sweater-1280.jpg", caption: "Chamber", rot: 2 },
  { src: "/photos/sized/sundown-fabric-1280.jpg", caption: "Sundown", rot: -1.5 },
  { src: "/photos/sized/red-bike-front-1280.jpg", caption: "Metal", rot: 3 },
  { src: "/photos/sized/vogue-side-1280.jpg", caption: "Vogue", rot: -2 },
  { src: "/photos/sized/sheer-floral-1280.jpg", caption: "Daylight", rot: 1.5 },
];

function ytPoster(url: string | null | undefined) {
  if (!url) return null;
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

// SVG film-grain noise + light-leak overlay (fixed across the page)
function FilmOverlay() {
  return (
    <>
      <svg className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.16] mix-blend-multiply" aria-hidden>
        <filter id="v4grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#v4grain)" />
      </svg>
      {/* Soft warm light leak top-left */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55] mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 10% 5%, rgba(255,200,100,0.22) 0%, transparent 35%), radial-gradient(circle at 90% 95%, rgba(232,180,184,0.18) 0%, transparent 40%)",
        }}
      />
    </>
  );
}

export default function V4Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-v4paper text-v4ink font-garamond">
      <FilmOverlay />

      <div className="relative z-10">
        {/* Top film-strip header */}
        <header className="border-b-2 border-v4ink/85">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 md:px-12">
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-v4ink">
              ROLL Nº 04 · MUMBAI · 2026
            </p>
            <p className="hidden md:block font-inter text-[10px] uppercase tracking-[0.25em] text-v4mute">
              SHOT WITH KODAK PORTRA — DEVELOPED FOR CASTING
            </p>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-v4teal">
              SG · SPOTLIGHT v4
            </p>
          </div>
          {/* Sprocket holes strip */}
          <div className="h-4 border-y-2 border-v4ink/85 bg-v4ink/85"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, #2E2419 0 24px, #F5E6C8 24px 40px)",
            }}
          />
        </header>

        {/* ===== HERO ===== */}
        <section className="px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-v4teal">A spotlight in seven exposures — Roll Nº 04</p>
            <h1
              className="mt-6 font-garamond italic leading-[0.92] tracking-[-0.02em] text-v4ink"
              style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
            >
              Siffaat Gandhi.
            </h1>
            <p className="mt-3 max-w-2xl font-garamond text-xl md:text-2xl text-v4ink/85 leading-snug">
              Actor — based in Mumbai, originally from Ludhiana. Web series, TVCs, music videos, short films, and a thousand frames you haven&rsquo;t cast yet.
            </p>

            {/* Hero polaroid wall */}
            <div className="mt-10 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4 md:gap-8">
              {POLAROIDS.slice(0, 4).map((p, i) => (
                <Polaroid key={p.src} {...p} delay={i} />
              ))}
            </div>

            {/* Caption row */}
            <div className="mt-12 grid max-w-3xl grid-cols-3 gap-6">
              {[
                { n: brands.length, l: "TVCs", t: "Campaigns shot" },
                { n: webSeries.length + shortFilmsProduced.length, l: "Films", t: "Across formats" },
                { n: auditionReels.length, l: "Tapes", t: "Self-tapes in archive" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-v4sepia pl-3">
                  <p className="font-garamond text-4xl text-v4ink md:text-5xl">{s.n}</p>
                  <p className="mt-1 font-inter text-[10px] uppercase tracking-[0.25em] text-v4mute">{s.l}</p>
                  <p className="font-garamond italic text-sm text-v4mute">{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FilmDivider eyebrow="EXPOSURE I" title="THE FILMSTRIP" />

        {/* ===== WORK ===== */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <SectionEyebrow n="01" label="WORK / REEL" />
            <h2
              className="mt-4 font-garamond italic leading-[0.92] tracking-[-0.01em] text-v4ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              Things she&rsquo;s been in.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
              {[
                ...webSeries.map((w) => ({
                  title: w.title,
                  sub: w.production,
                  href: w.url,
                  poster: ytPoster(w.url) ?? "/photos/films/kalamanch.jpg",
                  tag: "SERIES",
                })),
                ...musicVideos.map((m) => ({
                  title: m.title,
                  sub: m.artist ?? m.feature ?? "MV",
                  href: m.url,
                  poster: ytPoster(m.url),
                  tag: "MUSIC",
                })),
                ...shortFilmsProduced.map((f) => ({
                  title: f.title,
                  sub: f.credit,
                  href: f.url ?? null,
                  poster: ytPoster(f.url) ?? "/photos/sized/vogue-front-1280.jpg",
                  tag: "FILM",
                })),
                ...brands.slice(0, 9).map((b) => ({
                  title: b.name.toUpperCase(),
                  sub: "TVC · Campaign",
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
                })),
              ].map((w, i) => (
                <WorkCell key={i} {...w} idx={i} />
              ))}
            </div>
          </div>
        </section>

        <FilmDivider eyebrow="EXPOSURE II" title="ROLL OF FACES" />

        {/* ===== POLAROID WALL ===== */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <SectionEyebrow n="02" label="RANGE / POLAROIDS" />
            <h2
              className="mt-4 font-garamond italic leading-[0.92] tracking-[-0.01em] text-v4ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              Six different rooms.
            </h2>
            <div className="relative mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-16 md:grid-cols-3 md:gap-x-10 md:gap-y-16">
              {POLAROIDS.map((p, i) => (
                <Polaroid key={p.src + "wall"} {...p} delay={i} />
              ))}
            </div>
          </div>
        </section>

        <FilmDivider eyebrow="EXPOSURE III" title="THE LETTER" />

        {/* ===== STORY ===== */}
        <section className="bg-v4cream px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow n="03" label="STORY / LETTER" />
            <h2
              className="mt-4 font-garamond italic leading-[0.92] tracking-[-0.01em] text-v4ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              From Ludhiana, with feeling.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <p className="font-garamond text-xl md:text-2xl leading-[1.55] text-v4ink">
                  <span className="float-left mr-3 pt-1 font-garamond text-7xl leading-[0.85] text-v4teal md:text-8xl">F</span>
                  or me, acting has never been about performing — it&rsquo;s about feeling things deeply, observing people, understanding emotions, and bringing honesty to every character I play.
                </p>
                <p className="mt-6 font-garamond italic text-base text-v4mute">
                  — Siffaat
                </p>
              </div>
              <aside className="md:col-span-5 border-2 border-v4ink/85 bg-v4paper p-5">
                {[
                  ["Hometown", bio.hometown],
                  ["Based in", bio.basedIn],
                  ["In Mumbai since", `${bio.inMumbaiSince}`],
                  ["Languages", bio.languages.join(" · ")],
                  ["Skills", bio.skills.join(" · ")],
                  ["Height", bio.height],
                  ["Training", `${bio.training.school}`],
                  ["Mentor", bio.training.mentor],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-dashed border-v4ink/40 py-2 last:border-0">
                    <span className="font-inter text-[10px] uppercase tracking-[0.22em] text-v4mute">{k}</span>
                    <span className="font-garamond text-sm italic text-v4ink">{v}</span>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <FilmDivider eyebrow="EXPOSURE IV" title="THE TAPES" />

        {/* ===== TAPE ===== */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <SectionEyebrow n="04" label="THE TAPE" />
            <h2
              className="mt-4 font-garamond italic leading-[0.92] tracking-[-0.01em] text-v4ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Six self-tapes. One actor.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
              {auditionReels.map((r) => (
                <a
                  key={r.id}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block border-2 border-v4ink/85 bg-v4paper p-3 transition-transform hover:rotate-0"
                  style={{ transform: `rotate(${(parseInt(r.id) % 2 === 0 ? -1 : 1) * 1.2}deg)` }}
                >
                  <div className="relative aspect-video overflow-hidden bg-v4ink/10">
                    <Image
                      src={r.poster ?? `https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`}
                      alt={r.posterAlt ?? `Tape ${r.id}`}
                      fill
                      unoptimized={!r.poster}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      style={{
                        filter: "sepia(0.3) contrast(1.05) saturate(0.85)",
                        ...(r.posterPosition ? { objectPosition: r.posterPosition } : {}),
                      }}
                    />
                  </div>
                  <div className="flex items-baseline justify-between pt-3">
                    <p className="font-garamond italic text-base text-v4ink">Tape Nº {r.id}</p>
                    <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-v4mute">Mumbai · 24–26</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FilmDivider eyebrow="EXPOSURE V" title="LET'S TALK" />

        {/* ===== CONTACT ===== */}
        <section className="bg-v4sepia px-6 py-20 md:px-12 md:py-32 text-v4ink">
          <div className="mx-auto max-w-[1100px]">
            <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-v4ink">05 · CONTACT</p>
            <h2
              className="mt-4 font-garamond italic leading-[0.92] tracking-[-0.02em] text-v4ink"
              style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
            >
              Write to her.
            </h2>
            <p className="mt-6 max-w-xl font-garamond text-lg italic text-v4ink/85 md:text-xl">
              Open to web series, films, TVCs, music videos, theatre. Mumbai-based. Available for travel. Self-tape on request.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
              {[
                { label: "Email", value: contact.email, href: `mailto:${contact.email}`, glyph: "✉" },
                { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}`, glyph: "☎" },
                { label: "Instagram", value: contact.instagram, href: contact.instagramUrl, glyph: "◉" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group block border-2 border-v4ink bg-v4paper p-5 transition-transform hover:-translate-y-1"
                >
                  <p className="font-garamond italic text-3xl text-v4ink">{c.glyph}</p>
                  <p className="mt-4 font-inter text-[10px] uppercase tracking-[0.22em] text-v4mute">{c.label}</p>
                  <p className="mt-2 break-all font-garamond text-base text-v4ink md:text-lg">{c.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t-2 border-v4ink/85 pt-6 md:flex-row md:items-end">
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-v4ink/85">
                ROLL Nº 04 / END · siffaatgandhi.online · v4 vintage edition
              </p>
              <a href="/" className="font-inter text-[10px] uppercase tracking-[0.25em] text-v4teal hover:text-v4ink">
                ← BACK TO v1
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Polaroid({ src, caption, rot, delay }: { src: string; caption: string; rot: number; delay: number }) {
  return (
    <figure
      className="group relative block border-[10px] border-v4paper bg-v4paper shadow-[6px_8px_0_rgba(46,36,25,0.85)] transition-transform duration-300 hover:rotate-0"
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-v4ink/10">
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(min-width: 768px) 22vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          style={{
            filter: "sepia(0.22) contrast(1.05) saturate(0.85)",
            objectPosition: "center 25%",
          }}
        />
      </div>
      <figcaption
        className="pt-3 pb-2 text-center font-garamond italic text-base text-v4ink"
        style={{ animationDelay: `${delay * 0.08}s` }}
      >
        — {caption} —
      </figcaption>
    </figure>
  );
}

function FilmDivider({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-y-2 border-v4ink/85 bg-v4ink text-v4paper">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3 md:px-12">
        <p className="font-inter text-[10px] uppercase tracking-[0.3em]">{eyebrow}</p>
        <p className="font-garamond italic text-base md:text-lg">{title}</p>
        <p className="font-inter text-[10px] uppercase tracking-[0.3em]">◆ ◆ ◆</p>
      </div>
      <div
        className="h-3"
        style={{
          backgroundImage: "repeating-linear-gradient(to right, #2E2419 0 18px, #F5E6C8 18px 30px)",
        }}
      />
    </div>
  );
}

function SectionEyebrow({ n, label }: { n: string; label: string }) {
  return (
    <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-v4teal">
      <span className="text-v4ink">{n}</span> · {label}
    </p>
  );
}

function WorkCell({
  title,
  sub,
  href,
  poster,
  tag,
  idx,
}: {
  title: string;
  sub: string;
  href: string | null;
  poster: string | null;
  tag: string;
  idx: number;
}) {
  const rot = ((idx % 3) - 1) * 0.6;
  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden border-2 border-v4ink/85 bg-v4ink/10">
        {poster ? (
          <Image
            src={poster}
            alt={title}
            fill
            unoptimized
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
            style={{ filter: "sepia(0.18) contrast(1.05) saturate(0.85)" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-v4cream">
            <span className="font-garamond italic text-lg text-v4mute">{title}</span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <p className="font-garamond italic text-lg leading-snug text-v4ink">{title}</p>
        <p className="shrink-0 font-inter text-[9px] uppercase tracking-[0.22em] text-v4teal">{tag}</p>
      </div>
      <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-v4mute">{sub}</p>
    </>
  );
  const className = "group block transition-transform duration-300 hover:rotate-0";
  const style = { transform: `rotate(${rot}deg)` };
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {inner}
    </a>
  ) : (
    <div className={className} style={style}>
      {inner}
    </div>
  );
}
