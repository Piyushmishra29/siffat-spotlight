import type { Metadata } from "next";
import V2Hero from "./components/V2Hero";
import V2Marquee from "./components/V2Marquee";
import V2PortfolioGrid from "./components/V2PortfolioGrid";
import V2PhotoStrip from "./components/V2PhotoStrip";
import V2Philosophy from "./components/V2Philosophy";
import V2Tape from "./components/V2Tape";
import V2Contact from "./components/V2Contact";

export const metadata: Metadata = {
  title: "Siffaat Gandhi — Spotlight v2 (Kinetic Brutalism)",
  description:
    "Mumbai-based actor portfolio — v2 design pass. Kinetic brutalist edition: portfolio grid masonry, acid yellow flood, Inter mono-family.",
  robots: { index: false, follow: false },
};

export default function V2Page() {
  return (
    <main className="min-h-screen bg-v2bg text-v2fg font-inter">
      <V2Hero />
      <V2Marquee bg="acid" />
      <V2PortfolioGrid />
      <V2Marquee
        bg="ink"
        items={[
          "WEB SERIES",
          "TVCs",
          "MUSIC VIDEOS",
          "SHORT FILMS",
          "THEATRE",
          "SELF-TAPES",
          "OPEN TO WORK",
        ]}
        speed={28}
      />
      <V2PhotoStrip />
      <V2Philosophy />
      <V2Tape />
      <V2Marquee bg="blue" items={["AVAILABLE", "MUMBAI", "ON SET", "ON STAGE", "ON CALL", "EVERY ROLE"]} speed={36} />
      <V2Contact />
    </main>
  );
}
