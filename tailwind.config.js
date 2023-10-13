/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,css}', 
    './node_modules/@gordo-d/d-d-ui-components/**/*.{css,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-background": "url('/landing-background.svg')",
      },
      colors: {
        "hero-pink": "#be2d61",
        "pink": "#be2d61",
        black: "#000000",
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
