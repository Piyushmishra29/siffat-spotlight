"use client";

import { useEffect, useState } from "react";

const SEEN_KEY = "sg-splash-seen";
const HARD_CAP_MS = 2600;
const MIN_VISIBLE_MS = 1700;
const HERO_SRC = "/photos/sized/red-door-1280.jpg";

/**
 * First-paint splash. Hides after the hero photo decodes + fonts are ready,
 * or at HARD_CAP_MS — whichever comes first. Only shows on hard refresh /
 * fresh tab open (sessionStorage gates repeat displays in the same session).
 */
export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(SEEN_KEY)) {
      setShow(false);
      return;
    }

    const start = performance.now();
    let timeoutId = 0;

    const dismiss = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      timeoutId = window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => {
          setShow(false);
          sessionStorage.setItem(SEEN_KEY, "1");
        }, 600);
      }, remaining);
    };

    const fontsReady =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();

    const heroReady = new Promise<void>((resolve) => {
      const img = new window.Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = HERO_SRC;
    });

    Promise.race([
      Promise.all([fontsReady, heroReady]).then(dismiss),
      new Promise<void>((resolve) =>
        window.setTimeout(() => {
          dismiss();
          resolve();
        }, HARD_CAP_MS),
      ),
    ]).catch(() => dismiss());

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={
        "fixed inset-0 z-[120] flex items-center justify-center bg-paper transition-opacity duration-[600ms] ease-out " +
        (leaving ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      <div className="splash-stack flex flex-col items-center">
        <div
          className="splash-square flex items-center justify-center bg-cyan text-ink"
          style={{ width: 130, height: 130 }}
        >
          <span
            className="font-garamond italic leading-none"
            style={{ fontSize: 84, letterSpacing: "-0.04em" }}
          >
            SG
          </span>
        </div>
        <div
          className="splash-band overflow-hidden bg-pink text-paper"
          style={{ width: 130 }}
        >
          <div className="splash-band-inner flex items-end justify-center" style={{ height: 130, paddingBottom: 14 }}>
            <span
              className="font-display lowercase leading-none"
              style={{ fontSize: 42, letterSpacing: "-0.04em" }}
            >
              siffaat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
