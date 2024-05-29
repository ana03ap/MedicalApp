/** @type {import('tailwindcss').Config} */
export default {
  fontFamily: {
    'sans': ['Poppins', 'sans-serif'],
  },
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  colors: {
    'customIndigo': '#03707F',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
