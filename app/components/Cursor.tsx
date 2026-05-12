"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — a small dot that lerps toward the mouse position.
 * Expands and shows a label on hover for tiles that opt in with a
 * `data-cursor-label="..."` attribute. Hidden on touch / coarse pointer.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;
    setEnabled(true);

    target.current.x = window.innerWidth / 2;
    target.current.y = window.innerHeight / 2;
    current.current = { ...target.current };

    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        if (el.dataset?.cursorLabel) {
          setLabel(el.dataset.cursorLabel);
          setActive(true);
          return;
        }
        if (
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          el.getAttribute("role") === "button"
        ) {
          setLabel(null);
          setActive(true);
          return;
        }
        el = el.parentElement;
      }
      setActive(false);
      setLabel(null);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ mixBlendMode: "difference", willChange: "transform" }}
    >
      <div
        className={
          "flex items-center justify-center rounded-full bg-paper text-ink font-inter uppercase tracking-widest transition-all duration-300 ease-out " +
          (active
            ? label
              ? "h-12 w-12 text-[9px]"
              : "h-9 w-9 text-[0px]"
            : "h-2 w-2 text-[0px]")
        }
      >
        {active && label ? label : ""}
      </div>
    </div>
  );
}
