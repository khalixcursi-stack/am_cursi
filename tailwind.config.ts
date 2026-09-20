import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#d3a94f",
        golddeep: "#8a6a1f",
        nuit: "#0d0c0a",
        encre: "#12100c",
        ivoire: "#f6f2e9",
        parchemin: "#ece5d8",
      },
      fontFamily: {
        sans: ["Jost", "system-ui", "Segoe UI", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
