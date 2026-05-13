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
  title: "Siffaat Gandhi — Spotlight v3 (Cinema Dark)",
  description: "OTT-grade dark cinema portfolio. Modern dark, indigo glow, glassmorphism.",
  robots: { index: false, follow: false },
};

const PORTRAITS = [
  "/photos/sized/red-portrait-1280.jpg",
  "/photos/sized/cream-sweater-1280.jpg",
  "/photos/sized/vogue-side-1280.jpg",
  "/photos/sized/red-bike-front-1280.jpg",
  "/photos/sized/sundown-fabric-1280.jpg",
];

function ytPoster(url: string | null | undefined) {
  if (!url) return null;
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export default function V3Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-v3deep text-v3fg font-inter">
      {/* Ambient blobs — fixed, parallax-free, decorative */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #5E6AD2 0%, transparent 60%)",
            animation: "v3blob 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 60%)",
            animation: "v3blob 28s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 60%)",
            animation: "v3blob 32s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes v3blob {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(40px, -30px, 0) scale(1.1); }
        }
      `}</style>

      <div className="relative z-10">
        {/* ===== HERO ===== */}
        <section className="relative min-h-[100svh] px-6 py-8 md:px-12 md:py-12">
          {/* Top glass nav */}
          <nav
            className="sticky top-4 z-20 mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border px-4 py-3 md:px-6 md:py-4"
            style={{
              backgroundColor: "rgba(10,10,12,0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-v3fg/90">
              SG <span className="text-v3accent">·</span> v3 CINEMA
            </p>
            <div className="hidden md:flex items-center gap-6">
              {["WORK", "RANGE", "STORY", "TAPE", "CONTACT"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="font-inter text-[11px] uppercase tracking-[0.18em] text-v3mute hover:text-v3fg transition-colors">
                  {l}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-xl border px-3 py-1.5 font-inter text-[10px] uppercase tracking-[0.18em] text-v3fg hover:bg-v3accent/20 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              GET IN TOUCH →
            </a>
          </nav>

          {/* Hero content */}
          <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-v3accent/40 bg-v3accent/10 px-3 py-1.5 font-inter text-[10px] uppercase tracking-[0.2em] text-v3accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-v3accent" />
                Available · Mumbai
              </p>
              <h1
                className="mt-6 font-inter font-light leading-[0.95] tracking-[-0.04em] text-v3fg"
                style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
              >
                <span className="font-medium">Siffaat</span>
                <br />
                <span className="bg-gradient-to-r from-v3fg via-v3accent to-v3fg bg-clip-text text-transparent">Gandhi</span>
              </h1>
              <p className="mt-6 max-w-xl font-inter text-base md:text-lg text-v3mute leading-relaxed">
                Actor across web series, TVCs, music videos, and short films.
                Trained under <span className="text-v3fg">Saurabh Sachdeva</span> at The Actor&rsquo;s Truth.
                {bio.yearsInMumbai}+ years in Mumbai. Punjab roots, screen present.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#work" className="group inline-flex items-center gap-2 rounded-xl bg-v3accent px-5 py-3 font-inter text-sm font-medium text-v3fg shadow-[0_0_40px_-10px_rgba(94,106,210,0.6)] transition-transform hover:scale-[1.02]">
                  Watch the reel
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#tape" className="rounded-xl border border-v3border bg-v3surf px-5 py-3 font-inter text-sm text-v3fg backdrop-blur-md transition-colors hover:bg-white/10">
                  Self-tapes
                </a>
              </div>
            </div>

            {/* Hero portrait card */}
            <div className="md:col-span-5">
              <div
                className="relative overflow-hidden rounded-3xl border"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/photos/sized/red-portrait-1280.jpg"
                    alt="Siffaat Gandhi — red-lit portrait"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    priority
                    style={{ objectPosition: "center 25%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-v3deep via-v3deep/40 to-transparent" />
                </div>
                {/* Glass strip */}
                <div
                  className="absolute inset-x-3 bottom-3 rounded-2xl border px-4 py-3"
                  style={{
                    backgroundColor: "rgba(10,10,12,0.55)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-v3mute">Now on screen</p>
                  <p className="mt-1 font-inter text-base font-medium text-v3fg">{webSeries[0].title}</p>
                  <p className="font-inter text-xs text-v3mute">{webSeries[0].production}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-3 md:mt-24 md:grid-cols-4">
            {[
              { n: brands.length, l: "TVCs" },
              { n: webSeries.length, l: "Web series" },
              { n: musicVideos.length, l: "Music videos" },
              { n: auditionReels.length, l: "Self-tapes" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border bg-v3surf px-5 py-5 backdrop-blur-md"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p className="font-inter text-4xl font-light text-v3fg md:text-5xl">{s.n}</p>
                <p className="mt-2 font-inter text-[11px] uppercase tracking-[0.2em] text-v3mute">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WORK ===== */}
        <section id="work" className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeader eyebrow="01 · WORK" title="Select Reel" sub="Latest across series, TVCs, music videos." />
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
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
                  sub: m.artist ?? m.feature ?? m.label ?? "MV",
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

        {/* ===== RANGE (PHOTOS) ===== */}
        <section id="range" className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeader eyebrow="02 · RANGE" title="Five Frames" sub="One actor across five different rooms." />
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {PORTRAITS.map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl border bg-v3elev"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <Image
                    src={src}
                    alt={`Siffaat Gandhi — frame ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ objectPosition: "center 25%" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-v3deep/80 via-transparent to-transparent" />
                  <span className="absolute left-3 bottom-3 font-inter text-[10px] uppercase tracking-[0.2em] text-v3fg/90">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STORY ===== */}
        <section id="story" className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader eyebrow="03 · STORY" title="The practice." />
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <p className="font-inter text-lg md:text-xl font-light leading-[1.55] text-v3fg/90">
                  For me, acting has never been about performing — it&rsquo;s about feeling things deeply, observing people, understanding emotions, and bringing honesty to every character I play.
                </p>
                <p className="mt-6 font-inter text-sm text-v3mute leading-relaxed">
                  Siffaat Gandhi — actor based in Mumbai, originally from Ludhiana, Punjab. Training at The Actor&rsquo;s Truth under Saurabh Sachdeva. Theatre with Antar Angan.
                </p>
              </div>
              <div className="md:col-span-5">
                <div
                  className="rounded-2xl border bg-v3surf p-5 backdrop-blur-md"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {[
                    ["Hometown", bio.hometown],
                    ["Based in", bio.basedIn],
                    ["In Mumbai since", `${bio.inMumbaiSince}`],
                    ["Languages", bio.languages.join(" · ")],
                    ["Skills", bio.skills.join(" · ")],
                    ["Height", bio.height],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 border-b border-v3border py-2.5 last:border-0">
                      <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-v3mute">{k}</span>
                      <span className="font-inter text-sm text-v3fg">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TAPE ===== */}
        <section id="tape" className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeader eyebrow="04 · TAPE" title="The Tape." sub="Vulnerability · intensity · softness · confidence · chaos." />
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {auditionReels.map((r) => (
                <a
                  key={r.id}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border bg-v3elev transition-all hover:border-v3accent/60 hover:shadow-[0_0_40px_-10px_rgba(94,106,210,0.5)]"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={r.poster ?? `https://img.youtube.com/vi/${r.ytId}/maxresdefault.jpg`}
                      alt={r.posterAlt ?? `Tape Nº ${r.id}`}
                      fill
                      unoptimized={!r.poster}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      style={r.posterPosition ? { objectPosition: r.posterPosition } : undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-v3deep/70 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-v3accent/40 bg-v3accent/15 px-2.5 py-1 font-inter text-[9px] uppercase tracking-[0.2em] text-v3accent">
                      Nº {r.id}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-inter text-[9px] uppercase tracking-[0.2em] text-v3fg backdrop-blur">
                      Play ▸
                    </span>
                  </div>
                  <div className="border-t border-v3border px-4 py-3">
                    <p className="font-inter text-sm text-v3fg">Self-tape Nº {r.id}</p>
                    <p className="font-inter text-[11px] text-v3mute">Mumbai · 2024–2026</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="px-6 py-20 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1100px]">
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-v3accent">05 · CONTACT</p>
            <h2
              className="mt-4 font-inter font-light leading-[0.95] tracking-[-0.04em] text-v3fg"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              Let&rsquo;s build
              <br />
              <span className="bg-gradient-to-r from-v3accent to-v3fg bg-clip-text text-transparent">something honest.</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {[
                { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
                { label: "Instagram", value: contact.instagram, href: contact.instagramUrl },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group rounded-2xl border bg-v3surf p-5 backdrop-blur-md transition-all hover:border-v3accent/60 hover:bg-v3accent/10"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-v3mute">{c.label}</p>
                  <p className="mt-3 break-all font-inter text-base font-medium text-v3fg">{c.value}</p>
                  <p className="mt-4 font-inter text-[10px] uppercase tracking-[0.2em] text-v3accent">
                    Open <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Fin */}
          <div className="mx-auto mt-24 flex max-w-[1400px] items-end justify-between border-t border-v3border pt-8">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-v3mute">
              siffaatgandhi.online · v3 cinema · Mumbai mmxxvi
            </p>
            <a href="/" className="font-inter text-[10px] uppercase tracking-[0.2em] text-v3accent hover:text-v3fg transition-colors">
              ← back to v1
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <header>
      <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-v3accent">{eyebrow}</p>
      <h2
        className="mt-4 font-inter font-light leading-[0.95] tracking-[-0.03em] text-v3fg"
        style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
      >
        {title}
      </h2>
      {sub && <p className="mt-3 max-w-xl font-inter text-sm text-v3mute md:text-base">{sub}</p>}
    </header>
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
      <div className="relative aspect-[4/5] overflow-hidden">
        {poster ? (
          <Image src={poster} alt={title} fill unoptimized sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-v3elev">
            <span className="font-inter text-lg font-medium text-v3fg/60">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-v3deep/95 via-v3deep/30 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-v3accent/40 bg-v3accent/15 px-2.5 py-1 font-inter text-[9px] uppercase tracking-[0.2em] text-v3accent">
          {tag}
        </span>
        <div className="absolute inset-x-3 bottom-3">
          <p className="font-inter text-base font-medium leading-tight text-v3fg">{title}</p>
          <p className="font-inter text-xs text-v3mute mt-0.5">{sub}</p>
        </div>
      </div>
    </>
  );
  const className =
    "group relative block overflow-hidden rounded-2xl border bg-v3elev transition-all hover:border-v3accent/40 hover:shadow-[0_0_40px_-10px_rgba(94,106,210,0.5)]";
  const style = { borderColor: "rgba(255,255,255,0.08)" } as const;
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
