import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        cream: "#F4F1EC",
        paper: "#FFFFFF",
        warmGrey: "#666666",
        midGrey: "#444444",
        pink: "#FF2D9B",
        pinkSoft: "#FFD9EC",
        olive: "#5C5A45",
        cyan: "#9BE8E8",
        // legacy alias so anything missed still has a defined value
        oxblood: "#FF2D9B",
        // v2 brutalist palette
        v2bg: "#0A0A0B",
        v2fg: "#FAFAFA",
        v2ink: "#18181B",
        v2muted: "#3F3F46",
        v2border: "#27272A",
        v2acid: "#DFE104",
        v2blue: "#2563EB",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
        bodoni: ["var(--font-garamond)", "Georgia", "serif"],
        italiana: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight2: "-0.02em",
        widest: "0.18em",
        ultra: "0.28em",
      },
      maxWidth: {
        readable: "660px",
        column: "660px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(var(--rot, 0deg))" },
          "50%": {
            transform: "rotate(calc(var(--rot, 0deg) + 6deg))",
          },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
