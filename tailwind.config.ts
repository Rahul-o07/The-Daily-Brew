import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#4B3025",
        coffee: "#76513D",
        mocha: "#8B6248",
        warmBeige: "#D9C3A5",
        cream: "#F8F3EA",
        softWhite: "#FFFCF7",
        darkText: "#30241F",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(75, 48, 37, 0.08), 0 4px 6px -2px rgba(75, 48, 37, 0.04)",
        cardHover: "0 20px 40px -5px rgba(75, 48, 37, 0.16), 0 8px 12px -3px rgba(75, 48, 37, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
