/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '.25': '.0625rem',
      },
      fontSize: {
        'xxs': '.625rem',
      },
    },
  },
  plugins: [],
}
