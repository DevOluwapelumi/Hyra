import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1569cc",
          200: "#0802a3",
          300: "#3935b5",
        },
        secondary: {
          100: "#ffcd4b",
          200: "#ff7676",
          300: "#ff4b91",
        },
        tertiary: {
          100: "#3C2B00",
          200: "#4F0101",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
