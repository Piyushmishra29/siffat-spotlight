export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-10 md:pl-[180px] md:pr-12">
        <p className="text-center font-garamond italic text-warmGrey text-sm md:text-base">
          A Siffaat Gandhi Spotlight
          <span className="mx-2 text-pink">·</span>
          Mumbai
          <span className="mx-2 text-pink">·</span>
          MMXXVI
        </p>
        <p
          className="mt-3 text-center font-inter text-[10px] uppercase tracking-widest text-warmGrey/70"
          style={{ lineHeight: "1.2" }}
        >
          <span className="inline-flex items-baseline justify-center gap-1.5">
            <span>built with</span>
            <span
              aria-label="love"
              className="text-pink"
              style={{ transform: "translateY(0.5px)", display: "inline-block" }}
            >
              ♥
            </span>
            <span>by</span>
            <span
              className="font-garamond text-ink normal-case tracking-normal"
              title="Piyush"
              style={{
                fontStyle: "italic",
                fontSize: "13px",
                lineHeight: 1,
                transform: "translateY(1.5px)",
                display: "inline-block",
              }}
            >
              π
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
}
