/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(0px, 0px) scale(1.05)",
          },
        },
      },
      backgroundImage: {
        "landing-background": "url('/landing-background.svg')",
      },
      colors: {
        "hero-pink": "#be2d61",
        "pink": "#be2d61",
        black: "#111111",
        "dark-gray": "#202020",
        "light-gray": "#EFEFEF",
      },
      height: {
        ".25": ".0625rem",
      },
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      variants: {
        fill: ['hover']
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
