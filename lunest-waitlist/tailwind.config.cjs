/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ['Aeonik_Pro', 'sans-serif'],
      },
      colors: {
      lunestBlue: '#010135',
      accessBlue: '#0308AC',
      reserveBtn: '#000CDFB2',
  
    },
    fontFamily: {
        custom: ['"Aeonik_Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}