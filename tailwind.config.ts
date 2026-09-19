import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          raised: "#141414",
        },
        canvas: {
          DEFAULT: "#FAFAF9",
          raised: "#FFFFFF",
          muted: "#F3F3F1",
        },
        cinema: {
          950: "#0A0A0A",
          900: "#141414",
          800: "#1F1F1F",
          700: "#2A2A2A",
          600: "#3D3D3D",
          500: "#6B6B6B",
          400: "#8A8A8A",
          300: "#A3A3A3",
          200: "#D4D4D4",
          100: "#F5F5F5",
        },
        snow: "#FAFAF9",
        accent: {
          DEFAULT: "#A855F7",
          muted: "#9333EA",
          soft: "#F3E8FF",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-inter)",
          "var(--font-plus-jakarta)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.06em",
        cinematic: "0.18em",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 10, 10, 0.06)",
        card: "0 1px 0 rgba(10, 10, 10, 0.04), 0 12px 40px rgba(10, 10, 10, 0.05)",
      },
    },
  },
};

export default config;
