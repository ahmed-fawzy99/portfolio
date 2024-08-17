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
        base: colors.green,
      }
    },
    fontFamily: {
      'mono': ['Space Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    }
  },
  plugins: [],
}
