/** @type {import('tailwindcss').Config} */
import { theme } from '@gordo-d/d-d-ui-components';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,css}', 
    './node_modules/@gordo-d/d-d-ui-components/**/*.{css,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [
  ],
};
