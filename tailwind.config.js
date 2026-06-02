/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir:      "#0A0806",
        surface:   "#110E0A",
        elevated:  "#1A1510",
        gold:      "#C9A84C",
        "gold-light": "#DEB96A",
        cream:     "#EDE0D0",
        nude:      "#D4B896",
        // legacy
        accent:    "#C9A84C",
        canvas:    "#0A0806",
        ink:       "#120F0B",
        blush:     "#110E0A",
        pearl:     "#1A1510",
        rosewood:  "#D4B896",
      },
      fontFamily: {
        sans:  ['"DM Sans"',          "system-ui",   "sans-serif"],
        serif: ['"Cormorant Garamond"',"Georgia",     "serif"],
        mono:  ['"Inconsolata"',       "ui-monospace","monospace"],
      },
      boxShadow: {
        glow:   "0 0 60px rgba(201,168,76,.12)",
        card:   "0 24px 64px rgba(10,8,6,.6)",
        subtle: "0 8px 32px rgba(10,8,6,.4)",
        bloom:  "0 24px 70px rgba(201,168,76,.10), 0 10px 30px rgba(10,8,6,.40)",
        silk:   "0 16px 50px rgba(10,8,6,.35)",
        gold:   "0 0 40px rgba(201,168,76,.20)",
      },
      borderRadius: {
        bloom:  "1.5rem",
        flower: "2.5rem",
      },
    },
  },
  plugins: [],
};
