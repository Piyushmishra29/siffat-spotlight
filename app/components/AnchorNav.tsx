"use client";

import { useEffect, useState } from "react";

const NAV: { id: string; label: string }[] = [
  { id: "story", label: "STORY" },
  { id: "series", label: "SERIES" },
  { id: "motion", label: "MOTION" },
  { id: "campaigns", label: "CAMPAIGNS" },
  { id: "tape", label: "TAPE" },
  { id: "range", label: "RANGE" },
  { id: "contact", label: "CONTACT" },
];

export default function AnchorNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const update = () => {
      raf = 0;
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most-visible section as the active one
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRect.height * b.intersectionRect.width -
              a.intersectionRect.height * a.intersectionRect.width,
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 8;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop: thin top-centered bar */}
      <nav
        aria-label="Section navigation"
        className={
          "hidden md:flex fixed left-1/2 -translate-x-1/2 z-40 items-center gap-6 px-5 py-2 rounded-full bg-ink/85 backdrop-blur-md shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-all duration-500 " +
          (visible
            ? "top-4 opacity-100"
            : "top-0 opacity-0 -translate-y-6 pointer-events-none")
        }
        style={{ willChange: "transform, opacity" }}
      >
        {NAV.map((n) => {
          const isActive = active === n.id;
          return (
            <button
              key={n.id}
              type="button"
              onClick={() => scrollTo(n.id)}
              className={
                "relative font-inter text-[10px] uppercase tracking-widest transition-colors " +
                (isActive ? "text-pink" : "text-paper/70 hover:text-paper")
              }
            >
              {n.label}
              <span
                aria-hidden
                className={
                  "absolute -bottom-1 left-1/2 h-px bg-pink transition-all duration-300 " +
                  (isActive ? "w-full -translate-x-1/2" : "w-0 translate-x-0")
                }
              />
            </button>
          );
        })}
      </nav>

      {/* Mobile: floating "Index" button + sheet */}
      <button
        type="button"
        aria-label="Open section index"
        onClick={() => setOpen((v) => !v)}
        className={
          "md:hidden fixed right-3 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-ink/85 backdrop-blur-md text-paper font-inter text-[10px] uppercase tracking-widest shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-all duration-500 " +
          (visible ? "top-3 opacity-100" : "top-0 opacity-0 pointer-events-none")
        }
      >
        Index <span className="text-pink">{open ? "↑" : "↓"}</span>
      </button>

      <div
        aria-hidden={!open}
        className={
          "md:hidden fixed inset-x-3 z-40 origin-top transition-all duration-300 " +
          (open && visible
            ? "top-14 opacity-100 scale-100"
            : "top-14 opacity-0 scale-95 pointer-events-none")
        }
      >
        <ul className="rounded-2xl bg-ink/95 backdrop-blur-md p-2 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(n.id)}
                  className={
                    "block w-full text-left px-4 py-2.5 rounded-xl font-inter text-[11px] uppercase tracking-widest transition-colors " +
                    (isActive
                      ? "text-pink bg-paper/[0.04]"
                      : "text-paper/80 hover:text-paper")
                  }
                >
                  {n.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
