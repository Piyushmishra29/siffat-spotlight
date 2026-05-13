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
        // v4 vintage analog palette — faded film stock
        v4paper: "#F5E6C8",
        v4cream: "#EFDFC0",
        v4sepia: "#D4A574",
        v4ink: "#2E2419",
        v4mute: "#6B5A48",
        v4teal: "#4A7B7C",
        v4rose: "#E8B4B8",
        v4leak: "rgba(255,200,100,0.18)",
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
