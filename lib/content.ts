// Canonical content for the Siffaat Gandhi Spotlight site.
// Ported from /Users/piyushmishra/Desktop/siffat-portfolio/build/v3-content.json

export type Bio = {
  name: string;
  tagline: string;
  age: number;
  height: string;
  hometown: string;
  basedIn: string;
  inMumbaiSince: number;
  yearsInMumbai: number;
  languages: string[];
  skills: string[];
  training: { school: string; city: string; mentor: string };
  theatre: { company: string; mentor: string };
};

export type Contact = {
  phone: string;
  email: string;
  instagram: string;
  instagramUrl: string;
};

export type StoryCopy = {
  headlinePrimary: string;
  headlineItalic: string;
  dek: string;
  dropCap: string;
  bodyParagraphs: string[];
  signature: string;
};

export type WebSeries = {
  title: string;
  production: string;
  year?: string;
  isAnchor?: boolean;
  url: string | null;
  platform?: string;
  note?: string;
};

export type ShortFilm = {
  title: string;
  credit: string;
  logline: string | null;
  url?: string;
};

export type MusicVideo = {
  title: string;
  artist?: string;
  feature?: string;
  label?: string;
  timestamp?: string;
  url: string;
};

export type Brand = {
  name: string;
  url: string;
  production?: string;
};

export type AuditionReel = {
  id: string;
  url: string;
  label: string;
  ytId: string;
};

export const bio: Bio = {
  name: "Siffaat Gandhi",
  tagline: "Presence in every frame. Versatility in every look.",
  age: 25,
  height: "5'5\"",
  hometown: "Ludhiana, Punjab",
  basedIn: "Mumbai",
  inMumbaiSince: 2018,
  yearsInMumbai: 7,
  languages: ["Hindi", "English", "Punjabi"],
  skills: ["Acting", "Dancing", "MMA", "Yoga"],
  training: {
    school: "The Actor's Truth",
    city: "Bombay",
    mentor: "Saurabh Sachdeva",
  },
  theatre: {
    company: "Anterang",
    mentor: "Saurabh Sachdeva",
  },
};

export const contact: Contact = {
  phone: "+91 95922 76888",
  email: "siffatgandhi@gmail.com",
  instagram: "@siffat.gandhi",
  instagramUrl: "https://instagram.com/siffat.gandhi",
};

export const storyCopy: StoryCopy = {
  headlinePrimary: "FROM LUDHIANA,",
  headlineItalic: "to Bombay.",
  dek: "For me, acting has never just been about performing — it's about feeling things deeply, observing people, understanding emotions, and bringing honesty to every character I play.",
  dropCap: "S",
  bodyParagraphs: [
    "Siffaat Gandhi, an actor based in Mumbai, originally from Ludhiana, Punjab.",
  ],
  signature: "",
};

export const webSeries: WebSeries[] = [
  {
    title: "VIMAL KHANNA",
    production: "MX / Amazon",
    year: "Recent",
    isAnchor: true,
    url: null,
    note: "Title voice-transcribed; verify spelling with Siffaat",
  },
  {
    title: "KALAMANCH",
    production: "KNVR Productions",
    platform: "Amazon Prime",
    url: "https://www.amazon.co.uk/gp/video/detail/B0BZM675KS/ref=atv_dp_share_cu_r",
  },
];

export const shortFilmsProduced: ShortFilm[] = [
  {
    title: "LOVE DELIVERED",
    credit: "Produced & performed by Siffaat Gandhi",
    logline: null,
  },
  {
    title: "BEST IN THE GAME",
    credit: "Produced & performed by Siffaat Gandhi",
    logline: null,
  },
];

export const musicVideos: MusicVideo[] = [
  {
    title: "SUN TOH NA",
    artist: "Sanveet Singh",
    url: "https://youtu.be/eiczvMI00N0",
  },
  {
    title: "YAAR KA SATAYA HUA",
    feature: "ft. Nawazuddin Siddiqui",
    label: "Desi Melodies",
    timestamp: "3:11–3:40",
    url: "https://youtu.be/OBEOPnAO1hc",
  },
];

export const brands: Brand[] = [
  { name: "IND Money", url: "https://youtu.be/CKfXB8RSrGU" },
  { name: "Pure It", url: "https://youtu.be/3QNk5ejimSA" },
  { name: "Mortein", url: "https://www.instagram.com/reel/DAY0wXSuXlR/" },
  { name: "NDTV Profit", url: "https://youtu.be/I4qty0FjzW4" },
  { name: "Philips", url: "https://www.instagram.com/reel/CofTQRdhxPn/" },
  { name: "Sixam Glow", url: "https://youtu.be/Ek2Zi4SrHp0" },
  { name: "Cornitos", url: "https://youtu.be/HKyYmMovDjE" },
  { name: "Refresh Mattress", url: "https://youtu.be/GUcqs2LF1lY" },
  { name: "KFC", url: "https://youtu.be/ubC7ObD4lco" },
  { name: "Super4 Cricket", url: "https://www.instagram.com/tv/CdQCJRFJfqP/" },
  {
    name: "Maggi",
    production: "Collective Art",
    url: "https://www.instagram.com/p/CcsNFmBsMrW/",
  },
  { name: "JBL", url: "https://www.instagram.com/tv/CVUjZ0woHoq/" },
  { name: "McCaffeine", url: "https://www.instagram.com/p/CTcfua0IK0h/" },
  { name: "Flipkart", url: "https://www.instagram.com/reel/CbP2y1sJgPq/" },
  { name: "VIVO Diwali", url: "https://youtu.be/nBV3w12Lx4A" },
];

// Top-row wordmark display + URLs (i-D style tracked caps lines)
export type BrandWordmark = { name: string; url: string };
export const brandWordmarkLines: BrandWordmark[][] = [
  [
    { name: "IND MONEY", url: "https://youtu.be/CKfXB8RSrGU" },
    { name: "PURE IT", url: "https://youtu.be/3QNk5ejimSA" },
    { name: "MORTEIN", url: "https://www.instagram.com/reel/DAY0wXSuXlR/" },
    { name: "NDTV PROFIT", url: "https://youtu.be/I4qty0FjzW4" },
    { name: "PHILIPS", url: "https://www.instagram.com/reel/CofTQRdhxPn/" },
    { name: "SIXAM GLOW", url: "https://youtu.be/Ek2Zi4SrHp0" },
    { name: "CORNITOS", url: "https://youtu.be/HKyYmMovDjE" },
    { name: "REFRESH MATTRESS", url: "https://youtu.be/GUcqs2LF1lY" },
  ],
  [
    { name: "KFC", url: "https://youtu.be/ubC7ObD4lco" },
    { name: "SUPER4", url: "https://www.instagram.com/tv/CdQCJRFJfqP/" },
    { name: "MAGGI", url: "https://www.instagram.com/p/CcsNFmBsMrW/" },
    { name: "JBL", url: "https://www.instagram.com/tv/CVUjZ0woHoq/" },
    { name: "McCAFFEINE", url: "https://www.instagram.com/p/CTcfua0IK0h/" },
    { name: "FLIPKART", url: "https://www.instagram.com/reel/CbP2y1sJgPq/" },
    { name: "VIVO DIWALI", url: "https://youtu.be/nBV3w12Lx4A" },
  ],
];

// 4-up brand still grid (uses files in /public/photos/brands)
export const brandStills: { file: string; caption: string }[] = [
  { file: "/photos/brands/pureit.jpg", caption: "PURE IT · TVC" },
  { file: "/photos/brands/glow-tribe.jpg", caption: "SIXAM GLOW · CAMPAIGN" },
  { file: "/photos/brands/jbl.jpg", caption: "JBL · BRAND FILM" },
  { file: "/photos/brands/e3group-rishta.jpg", caption: "E3 GROUP · RISHTA" },
];

export const auditionReels: AuditionReel[] = [
  {
    id: "01",
    url: "https://youtu.be/w9h9y2KO6nI",
    label: "Self-tape · Mumbai",
    ytId: "w9h9y2KO6nI",
  },
  {
    id: "02",
    url: "https://youtu.be/A3CqO5h0VC8",
    label: "Self-tape · Mumbai",
    ytId: "A3CqO5h0VC8",
  },
  {
    id: "03",
    url: "https://youtu.be/4d2XPyANI_w",
    label: "Self-tape · Mumbai",
    ytId: "4d2XPyANI_w",
  },
  {
    id: "04",
    url: "https://youtu.be/yvjh7cFBg2I",
    label: "Self-tape · Mumbai",
    ytId: "yvjh7cFBg2I",
  },
  {
    id: "05",
    url: "https://youtu.be/ug79QZwhD44",
    label: "Self-tape · Mumbai",
    ytId: "ug79QZwhD44",
  },
  {
    id: "06",
    url: "https://youtu.be/hCo24KnA6r4",
    label: "Self-tape · Mumbai",
    ytId: "hCo24KnA6r4",
  },
];

// Helper to extract YouTube ID from a youtu.be or full URL.
export function youtubeId(url: string): string | null {
  const short = url.match(/youtu\.be\/([\w-]{6,})/);
  if (short) return short[1];
  const full = url.match(/youtube\.com\/watch\?v=([\w-]{6,})/);
  if (full) return full[1];
  return null;
}
