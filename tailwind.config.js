/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jevon-dark-bg': '#211f1f', 
        'jevon-gold':'#ffd700',
        'jevon-dark-tx': '#d1d1d1'
      },
      fontFamily: {        
        'mont': ['Montserrat Alternates', 'sans-serif'],
        'latin': ['Anek Latin', 'sans-serif'],
      }     
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
