import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F1",
        beige: "#F0E9DA",
        sand: "#E2D6BD",
        charcoal: "#2B2B2B",
        gold: { DEFAULT: "#A8884A", dark: "#8A6D35" },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Noto Serif KR", "serif"],
        sans: ["Inter", "Noto Sans KR", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
