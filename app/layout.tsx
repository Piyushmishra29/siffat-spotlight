import type { Metadata } from "next";
import { Inter, EB_Garamond, Archivo_Black } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import ScrollProgressBar from "./components/ScrollProgressBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const display = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siffaat Gandhi — Spotlight",
  description:
    "Spotlight — Siffaat Gandhi. A long-form editorial portfolio: from Ludhiana to Bombay. Web shows, films, music videos, brand work, and self-tapes.",
  metadataBase: new URL("https://siffaatgandhi.com"),
  openGraph: {
    title: "Siffaat Gandhi — Spotlight",
    description:
      "Presence in every frame. Versatility in every look. A single-page editorial portfolio for actor Siffaat Gandhi.",
    images: ["/photos/cover-suit.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siffaat Gandhi — Spotlight",
    description: "Presence in every frame. Versatility in every look.",
    images: ["/photos/cover-suit.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${garamond.variable} ${display.variable}`}
    >
      <body className="bg-paper text-ink font-garamond">
        <LenisProvider />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
