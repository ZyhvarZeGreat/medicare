/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT(
  {
    content: [
      "./index.html",
      './src/*.{js,jsx}',
      "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        'xs': { 'min': '480px' },
        'sm': { 'min': '600px' },
        'lg': { 'min': '768px' },
        'xl': { 'min': '1024px' },
        '2xl': { 'min': '1200px' },
        '3xl': { 'min': '1201px' },
  
        dropShadow:{
          'xl':['4px 4px 8px rgba(0, 0, 0, 0.2)','-6px -6px 9px #FFFFFF']
        },
        fontFamily: {
          'clash': ['"Clash Display"', 'sans-serif'],
          'graphik': ['Graphik', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif']
        },
      },
    },
    colors: {
      yellow: '#FFD037',
      grey: '#EDEDED'
    },
  
  }
)  


