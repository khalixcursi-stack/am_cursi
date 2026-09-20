import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Palette or — de l'or pâle au bronze sombre */
        gold: {
          50: "#FBF6E9",
          100: "#F6EDD2",
          200: "#EEDFA9",
          300: "#E3CB7D",
          400: "#D9B855",
          500: "#D4AF37",
          600: "#B08E2A",
          700: "#8A6D20",
          800: "#5F4B16",
          900: "#3A2F0E",
        },
        /* Noirs chauds, légèrement teintés de brun */
        nuit: {
          800: "#14120D",
          900: "#0B0A08",
          950: "#050505",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Playfair Display",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      boxShadow: {
        or: "0 12px 44px -12px rgba(212, 175, 55, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
