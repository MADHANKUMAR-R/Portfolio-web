/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monot: ["Monoton"],
        bubble: ["Fuzzy Bubbles"],
      },
    },
  },
  plugins: [],
};
