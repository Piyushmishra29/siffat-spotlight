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
  title: "Siffaat Gandhi — Spotlight v6 (Exaggerated Minimalism)",
  description:
    "Agency-portfolio v6. White ground, oversized headline-as-art, one vivid accent.",
  robots: { index: false, follow: false },
};

function ytPoster(url: string | null | undefined) {
  if (!url) return null;
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

const STRIP_PORTRAITS = [
  "/photos/sized/red-portrait-1280.jpg",
  "/photos/sized/sundown-fabric-1280.jpg",
  "/photos/sized/cream-sweater-1280.jpg",
  "/photos/sized/red-bike-front-1280.jpg",
  "/photos/sized/vogue-side-1280.jpg",
  "/photos/sized/sheer-floral-1280.jpg",
];

export default function V6Page() {
  return (
    <main className="min-h-screen bg-v6bg text-v6ink font-inter">
      {/* Top contract bar */}
      <nav className="border-b-2 border-v6ink">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.22em]">
            <span className="inline-block h-2 w-2 translate-y-[-2px] bg-v6pop mr-2" />
            SG / v6
          </p>
          <div className="hidden md:flex items-center gap-8">
            {["WORK", "FRAMES", "ABOUT", "TAPE", "CONTACT"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-v6ink hover:text-v6pop transition-colors">
                {l}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="border-2 border-v6ink bg-v6ink px-4 py-2 font-inter text-[10px] font-bold uppercase tracking-[0.22em] text-v6bg transition-colors hover:bg-v6pop hover:border-v6pop"
          >
            HIRE HER →
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className="relative overflow-hidden px-6 pt-12 pb-0 md:px-12 md:pt-20">
        <div className="mx-auto max-w-[1800px]">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-v6pop">
            ACTOR · MUMBAI · OPEN TO WORK
          </p>

          <h1
            className="mt-6 font-inter font-black uppercase leading-[0.82] tracking-[-0.05em] text-v6ink"
            style={{ fontSize: "clamp(4rem, 19vw, 22rem)" }}
          >
            SIFFAAT
            <br />
            GANDHI<span className="text-v6pop">.</span>
          </h1>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:mt-16 md:flex-row md:items-end">
            <p className="max-w-xl font-inter text-base font-medium leading-snug text-v6ink md:text-lg">
              Web series. TVCs. Music videos. Short films. Theatre.
              <br />
              <span className="text-v6mute">Trained under Saurabh Sachdeva. {bio.yearsInMumbai}+ years in Mumbai.</span>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#work"
                className="border-2 border-v6ink bg-v6ink px-5 py-3 font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-v6bg transition-colors hover:bg-v6pop hover:border-v6pop"
              >
                SEE THE WORK →
              </a>
              <a
                href="#tape"
                className="border-2 border-v6ink bg-v6bg px-5 py-3 font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-v6ink transition-colors hover:bg-v6ink hover:text-v6bg"
              >
                THE TAPE ▸
              </a>
            </div>
          </div>
        </div>

        {/* Edge-to-edge photo strip */}
        <div className="-mx-6 mt-16 md:-mx-12 md:mt-24">
          <div className="flex w-full snap-x snap-mandatory gap-0 overflow-x-auto">
            {STRIP_PORTRAITS.map((src, i) => (
              <figure
                key={src}
                className="relative shrink-0 snap-start border-r-2 border-v6ink last:border-r-0"
                style={{
                  width: "min(76vw, 22rem)",
                  aspectRatio: "3 / 4",
                }}
              >
                <Image
                  src={src}
                  alt={`Portrait ${i + 1}`}
                  fill
                  sizes="22rem"
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
                <span className="absolute left-3 bottom-3 border border-v6bg bg-v6ink px-2 py-1 font-inter text-[9px] font-bold uppercase tracking-[0.22em] text-v6bg">
                  Nº{String(i + 1).padStart(2, "0")}
                </span>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-y-2 border-v6ink bg-v6bg">
        <div className="mx-auto grid max-w-[1800px] grid-cols-2 md:grid-cols-4">
          {[
            { n: brands.length, l: "TVCs" },
            { n: webSeries.length, l: "Series" },
            { n: musicVideos.length, l: "MV" },
            { n: auditionReels.length, l: "Tapes" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`flex items-baseline justify-between px-6 py-8 md:px-10 md:py-12 ${i < 3 ? "border-r-0 md:border-r-2 border-v6ink" : ""} ${i < 2 ? "border-b-2 border-v6ink md:border-b-0" : ""} ${i % 2 === 0 ? "border-r-2 md:border-r-2" : ""}`}
            >
              <span className="font-inter font-black leading-none text-v6ink" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                {s.n}
              </span>
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-v6mute">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1800px]">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-v6pop">01 / WORK</p>
          <h2
            className="mt-6 font-inter font-black uppercase leading-[0.84] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            WORK<span className="text-v6pop">,</span>
            <br />
            UP CLOSE.
          </h2>
          <p className="mt-6 max-w-xl font-inter text-base text-v6mute">
            18 pieces across web series, music videos, short films, and TVCs.
            Tap any tile to play.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
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
                sub: m.artist ?? m.feature ?? "Music video",
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
              })),
            ].map((w, i) => (
              <WorkCard key={i} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRAMES ===== */}
      <section id="frames" className="bg-v6ink text-v6bg px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1800px]">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-v6pop">02 / FRAMES</p>
          <h2
            className="mt-6 font-inter font-black uppercase leading-[0.84] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            SIX ROOMS<span className="text-v6pop">.</span>
            <br />
            ONE ACTOR.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-6 md:gap-4">
            {STRIP_PORTRAITS.map((src, i) => (
              <figure key={src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`Frame ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 16vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                  style={{ objectPosition: "center 25%" }}
                />
                <span className="absolute left-2 top-2 border border-v6bg bg-v6ink px-1.5 py-0.5 font-inter text-[9px] font-bold uppercase tracking-[0.2em] text-v6bg">
                  0{i + 1}
                </span>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-v6pop">03 / ABOUT</p>
          <h2
            className="mt-6 font-inter font-black uppercase leading-[0.84] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
          >
            HONEST WORK<span className="text-v6pop">.</span>
            <br />
            NOTHING ELSE.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
            <p className="md:col-span-7 font-inter text-xl font-medium leading-[1.45] text-v6ink md:text-2xl">
              For me, acting has never been about performing — it&rsquo;s about feeling things deeply, observing people, understanding emotions, and bringing honesty to every character I play.
              <br />
              <br />
              <span className="text-v6mute">Mumbai. Originally Ludhiana, Punjab.</span>
            </p>

            <aside className="md:col-span-5">
              <div className="border-2 border-v6ink">
                {[
                  ["HOMETOWN", bio.hometown],
                  ["BASED", bio.basedIn],
                  ["SINCE", `${bio.inMumbaiSince}`],
                  ["LANGUAGES", bio.languages.join(" · ")],
                  ["SKILLS", bio.skills.join(" · ")],
                  ["HEIGHT", bio.height],
                  ["TRAINING", bio.training.school],
                  ["MENTOR", bio.training.mentor],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-baseline justify-between gap-4 px-4 py-3 ${i < 7 ? "border-b-2 border-v6ink" : ""}`}
                  >
                    <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-v6mute">{k}</span>
                    <span className="font-inter text-sm font-bold uppercase text-v6ink">{v}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== TAPE ===== */}
      <section id="tape" className="bg-v6popDim px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1800px]">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-v6pop">04 / TAPE</p>
          <h2
            className="mt-6 font-inter font-black uppercase leading-[0.84] tracking-[-0.04em] text-v6ink"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            SIX TAPES<span className="text-v6pop">.</span>
          </h2>
          <p className="mt-6 max-w-xl font-inter text-base font-medium text-v6ink/70">
            Vulnerability · intensity · softness · confidence · chaos.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
            {auditionReels.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-2 border-v6ink bg-v6bg transition-colors hover:border-v6pop"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={r.poster ?? `https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`}
                    alt={r.posterAlt ?? `Tape ${r.id}`}
                    fill
                    unoptimized={!r.poster}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={r.posterPosition ? { objectPosition: r.posterPosition } : undefined}
                  />
                </div>
                <div className="flex items-baseline justify-between border-t-2 border-v6ink px-3 py-2 transition-colors group-hover:bg-v6pop">
                  <p className="font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-v6ink group-hover:text-v6bg">
                    TAPE Nº {r.id}
                  </p>
                  <p className="font-inter text-[10px] font-bold uppercase tracking-[0.22em] text-v6mute group-hover:text-v6bg">
                    PLAY ▸
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-v6bg px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1800px]">
          <p className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-v6pop">05 / CONTACT</p>
          <h2
            className="mt-6 font-inter font-black uppercase leading-[0.82] tracking-[-0.05em]"
            style={{ fontSize: "clamp(4rem, 18vw, 20rem)" }}
          >
            HIRE
            <br />
            <span className="text-v6pop">HER.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-6">
            {[
              { label: "EMAIL", value: contact.email, href: `mailto:${contact.email}` },
              { label: "PHONE", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
              { label: "INSTAGRAM", value: contact.instagram, href: contact.instagramUrl },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group block border-2 border-v6ink p-5 transition-colors hover:bg-v6pop"
              >
                <p className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-v6mute group-hover:text-v6bg">{c.label}</p>
                <p className="mt-4 break-all font-inter text-lg font-black uppercase tracking-[-0.02em] text-v6ink group-hover:text-v6bg md:text-2xl">
                  {c.value}
                </p>
                <p className="mt-6 font-inter text-[10px] font-bold uppercase tracking-[0.22em] text-v6mute group-hover:text-v6bg">OPEN ↗</p>
              </a>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-3 border-t-2 border-v6ink pt-6 md:flex-row md:items-end">
            <p className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-v6mute">
              SIFFAATGANDHI.ONLINE · v6 EXAGGERATED MINIMALISM · MUMBAI MMXXVI
            </p>
            <a href="/" className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-v6ink hover:text-v6pop">
              ← BACK TO v1
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkCard({
  title,
  sub,
  href,
  poster,
  tag,
}: {
  title: string;
  sub: string;
  href: string | null;
  poster: string | null;
  tag: string;
}) {
  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden border-2 border-v6ink bg-v6bg">
        {poster ? (
          <Image
            src={poster}
            alt={title}
            fill
            unoptimized
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-inter text-lg font-bold uppercase text-v6mute">{title}</span>
          </div>
        )}
        <span className="absolute left-2 top-2 border-2 border-v6bg bg-v6ink px-2 py-1 font-inter text-[9px] font-bold uppercase tracking-[0.22em] text-v6bg">
          {tag}
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <p className="font-inter text-lg font-black uppercase leading-tight text-v6ink">{title}</p>
        <p className="shrink-0 font-inter text-[9px] font-bold uppercase tracking-[0.2em] text-v6pop">↗</p>
      </div>
      <p className="mt-1 font-inter text-[11px] uppercase tracking-[0.15em] text-v6mute">{sub}</p>
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
