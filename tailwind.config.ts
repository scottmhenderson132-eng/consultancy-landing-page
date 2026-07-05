import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        ink: "#191919",
        paper: "#FAFAF7",
        slate: {
          DEFAULT: "#54544F",
          soft: "#8B8B84",
        },
        hairline: "#DAD8D0",
        panel: "#F1F0EA",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      display: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-plex-mono)", ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
