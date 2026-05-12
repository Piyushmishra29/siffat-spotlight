import SGBlock from "./components/SGBlock";
import Hero from "./components/Hero";
import PinkBlockQuote from "./components/PinkBlockQuote";
import Story from "./components/Story";
import PhotoTrio from "./components/PhotoTrio";
import OnScreen from "./components/OnScreen";
import PhotoHeart from "./components/PhotoHeart";
import PinnedImage from "./components/PinnedImage";
import Marquee from "./components/Marquee";
import MusicVideos from "./components/MusicVideos";
import OliveSection from "./components/OliveSection";
import BrandWork from "./components/BrandWork";
import ShortFilms from "./components/ShortFilms";
import AuditionReels from "./components/AuditionReels";
import Gallery from "./components/Gallery";
import StickersScatter from "./components/StickersScatter";
import Contact from "./components/Contact";
import Fin from "./components/Fin";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <SGBlock />

      <Hero />

      <PinkBlockQuote attribution="— A PORTFOLIO, IN SEVEN SCENES.">
        <span className="font-display uppercase not-italic text-paper block tracking-tight2 leading-[0.88]" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
          PRESENCE
          <br />
          IN EVERY FRAME.
        </span>
        <span className="block mt-8 font-garamond italic text-ink/85" style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}>
          Versatility in every look.
        </span>
      </PinkBlockQuote>

      <Story />

      <PhotoTrio
        tiles={[
          {
            src: "/photos/sized/red-door-1280.jpg",
            alt: "Siffaat Gandhi — red door portrait, lehenga and leather, Mumbai editorial",
            caption: "RED DOOR · MUMBAI",
            position: "center",
          },
          {
            src: "/photos/sized/bindi-1280.jpg",
            alt: "Siffaat Gandhi — bindi close-up portrait, editorial",
            caption: "BINDI · CLOSE-UP",
            position: "center 25%",
          },
          {
            src: "/photos/sized/red-brick-1280.jpg",
            alt: "Siffaat Gandhi — red brick ethnic look, white and gold detailing",
            caption: "RED BRICK · ETHNIC",
            position: "center",
          },
        ]}
      />

      <PinkBlockQuote
        density="tight"
        attribution="— SIFFAAT GANDHI, ON HER PRACTICE"
      >
        It&rsquo;s not performance —
        <br />
        it&rsquo;s presence.
      </PinkBlockQuote>

      <OnScreen />

      <PhotoHeart caption="ONE FRAME. EIGHTY-FIVE TAKES." />

      <MusicVideos />

      <OliveSection id="training" eyebrow="04 / 08 — TRAINING · MENTOR · THEATRE">
        <p
          className="font-display uppercase leading-[0.9] tracking-tight2 text-paper"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          THE ACTOR&rsquo;S TRUTH,
          <br />
          UNDER SAURABH SACHDEVA.
        </p>
        <p
          className="mt-8 max-w-[760px] font-garamond italic text-paper/90"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
        >
          And theatre with him through{" "}
          <span className="text-pink not-italic font-display uppercase tracking-tight2">
            ANTAR ANGAN
          </span>{" "}
          — where the work is slower, harder, and more honest than any set
          she&rsquo;s been on.
        </p>
        <p className="mt-10 font-inter text-[10px] uppercase tracking-widest text-paper/70">
          MMA KEEPS HER SHARP · YOGA KEEPS HER OPEN · BOTH KEEP HER READY.
        </p>
      </OliveSection>

      <Marquee
        duration={32}
        items={[
          <>ON FILM</>,
          <>ON STAGE</>,
          <>ON TAPE</>,
          <>OFF SET</>,
          <span className="text-pink" key="m1">EVERY ROLE</span>,
          <>IN FRAME</>,
          <>NEW FACE</>,
          <span className="text-pink" key="m2">FULL RANGE</span>,
        ]}
      />

      <BrandWork />

      <ShortFilms />

      <PinnedImage
        src="/photos/sized/glass-lean-1280.jpg"
        alt="Siffaat Gandhi — off-set portrait, between takes"
        caption="OFF SET · BETWEEN TAKES."
        position="center 35%"
      />

      <AuditionReels />

      <Gallery />

      <StickersScatter />

      <PinkBlockQuote
        density="tight"
        attribution="— SIFFAAT GANDHI"
      >
        At the heart of it all,
        <br />
        I&rsquo;m just someone chasing stories, moments, and characters
        <br className="hidden md:block" />
        {" "}that leave people feeling something real.
      </PinkBlockQuote>

      <Contact />

      <Fin />

      <Footer />
    </main>
  );
}
