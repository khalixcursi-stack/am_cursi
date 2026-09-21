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
      },
      animation: {
        "apparition-menu": "apparition-menu 200ms ease-out both",
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
