import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c0f",
        gold: "#c5a46d",
        cream: "#f4f1ea",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
