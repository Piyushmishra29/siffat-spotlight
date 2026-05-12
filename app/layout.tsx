import type { Metadata } from "next";
import { Inter, EB_Garamond, Archivo_Black } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import ScrollProgressBar from "./components/ScrollProgressBar";
import AnchorNav from "./components/AnchorNav";
import { bio, contact } from "@/lib/content";

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

const SITE_URL = "https://siffaatgandhi.online";
const TITLE = "Siffaat Gandhi — Actor · Mumbai · One Look. Every Role.";
const DESCRIPTION =
  "Siffaat Gandhi is a Mumbai-based actor with a portfolio spanning Hindi web series, TVCs, music videos, and short films. Trained under Saurabh Sachdeva at Antar Angan. View reel, brand work, and self-tapes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "Siffaat Gandhi",
    "actor",
    "actress",
    "Mumbai actor",
    "Bombay actor",
    "Mumbai actress",
    "Hindi web series",
    "OTT casting",
    "TVC actor",
    "Indian actress",
    "Saurabh Sachdeva",
    "Antar Angan",
    "self-tape",
    "audition reel",
    "music video actress",
    "brand campaign actor",
  ],
  authors: [{ name: "Siffaat Gandhi" }],
  creator: "Siffaat Gandhi",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Siffaat Gandhi — Spotlight",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Siffaat Gandhi — Actor, Mumbai",
      },
    ],
    type: "profile",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "One look. Every role. Mumbai-based actor.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: bio.name,
  jobTitle: "Actor",
  image: `${SITE_URL}/og-cover.jpg`,
  url: SITE_URL,
  sameAs: [contact.instagramUrl].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    addressLocality: bio.basedIn,
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "Organization",
    name: `${bio.training.school} (${bio.training.mentor})`,
  },
  memberOf: {
    "@type": "PerformingGroup",
    name: bio.theatre.company,
  },
  knowsLanguage: bio.languages,
  workLocation: { "@type": "Place", name: "Mumbai, India" },
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${garamond.variable} ${display.variable}`}
    >
      <head>
        <link rel="canonical" href={`${SITE_URL}/`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-paper text-ink font-garamond">
        <LenisProvider />
        <ScrollProgressBar />
        <AnchorNav />
        {children}
      </body>
    </html>
  );
}
