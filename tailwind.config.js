/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      vazir: [
        '"Vazirmatn", sans-serif',
        {
          fontFeatureSettings: ' "ss01"',
        },
      ],
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#E0F2FE',
          200: '#BAE2FD',
          300: '#7DC9FC',
          400: '#38ABF8',
          500: '#0E91E9',
          600: '#0278C7',
          700: '#0362A1',
          800: '#075385',
          900: '#0c476e',
          950: '#082F49',
          975: '#011728'
        },
        primaryDark: {
          100: '#006da4',
          200: '#006494',
          300: '#004d74',
          400: '#003554',
          500: '#022b42',
          600: '#032030',
          800: '#002138',
          900: '#011728',
        },
        secondary:{
          50:'#f6f6f6',
          100:'#E7E7E7',
          200:'#D1D1D1',
          300:'#B0B0B0',
          400:'#888888',
          500:'#6D6D6D',
          600:'#5D5D5D',
          700:'#4F4F4F',
          800:'#454545',
          900:'#3D3D3D',
          950:'#000000',
        },
      },

    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
  darkMode: "class"
}