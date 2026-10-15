import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#d3a94f",
        golddeep: "#8a6a1f",
        /* Or assombri : contraste AA sur les fonds clairs du thème clair. */
        orgrave: "#8a6519",
        nuit: "#0d0c0a",
        encre: "#12100c",
        ivoire: "#f6f2e9",
        parchemin: "#ece5d8",
      },
      fontFamily: {
        sans: ["Jost", "system-ui", "Segoe UI", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      keyframes: {
        "apparition-menu": {
          from: { opacity: "0", transform: "translateY(-0.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        montee: {
          from: { opacity: "0", transform: "translateY(1.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fondu-or": {
          from: { opacity: "0", transform: "scaleX(0)" },
          to: { opacity: "1", transform: "scaleX(1)" },
        },
        "flottement": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "apparition-menu": "apparition-menu 200ms ease-out both",
        montee: "montee 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fondu-or": "fondu-or 1100ms cubic-bezier(0.22, 1, 0.36, 1) both",
        flottement: "flottement 6s ease-in-out infinite",
      },
      backgroundImage: {
        "halo-or":
          "radial-gradient(60% 45% at 50% 15%, rgb(211 169 79 / 0.16), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
