/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-background": "url('/landing-background.svg')",
      },
      colors: {
        "hero-pink": "#be2d61",
        "pink": "#be2d61",
        black: "#111111",
      },
      height: {
        ".25": ".0625rem",
      },
      fontSize: {
        xxs: ".625rem",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
