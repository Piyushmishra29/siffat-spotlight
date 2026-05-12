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
        <p className="mt-3 text-center font-inter text-[10px] uppercase tracking-widest text-warmGrey/70">
          built with{" "}
          <span aria-label="love" className="text-pink">
            ♥
          </span>{" "}
          by{" "}
          <span className="font-garamond italic text-ink" title="π — Piyush">
            π
          </span>
        </p>
      </div>
    </footer>
  );
}
