/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    
    extend: {
      colors:{
        primary:{
          50:'#f0f9ff',
          100:'#f0f3fa',
          200:'#d5deef',
          300:'#b1c9ef',
          400:'#8aaee0',
          500:'#395886',
          800:'##001149',
        },
        primaryDark:{
          100:'#006da4',
          200:'#006494',
          300:'#004d74',
          400:'#003554',
          500:'#022b42',
          600:'#032030',
          800:'#002138',
          900:'#011728',
        }
      },
      
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
  darkMode: "class"
}