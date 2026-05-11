"use client";

import { useState } from "react";

type Props = {
  ytId: string;
  title: string;
  poster: string; // /photos/... local poster (preferred for branding)
};

/**
 * Click-to-load YouTube facade. Saves a real iframe load until the user
 * actually clicks the still — preserves bundle size and editorial feel.
 */
export default function LiteYouTube({ ytId, title, poster }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink">
      {!active ? (
        <button
          type="button"
          aria-label={`Play ${title}`}
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/10" />
          <span className="relative z-10 flex h-16 w-16 items-center justify-center border border-cream/80 bg-ink/40 backdrop-blur-sm transition-colors group-hover:bg-ink/60">
            <svg
              aria-hidden
              width="20"
              height="22"
              viewBox="0 0 20 22"
              className="fill-cream"
            >
              <path d="M0 0v22l20-11z" />
            </svg>
          </span>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
