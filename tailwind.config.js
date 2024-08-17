import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        base: colors.green,
        text: colors.gray,
      }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Arvo', 'Cambria', 'serif'],
      'mono': ['Space Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      'noto': ['Noto Sans', 'sans'],
    }
  },
  plugins: [],
}
