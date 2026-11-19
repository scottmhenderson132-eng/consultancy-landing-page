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
          // Small labels on light backgrounds. #8B8B84 is only about 3.3:1 on
          // paper; this keeps the same hue at about 5:1 (4.7:1 on panel).
          label: "#6B6B65",
        },
        hairline: "#DAD8D0",
        panel: "#F1F0EA",
      },
    },
    fontFamily: {
      sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      display: ["var(--font-noto-sans)", ...defaultTheme.fontFamily.sans],    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
