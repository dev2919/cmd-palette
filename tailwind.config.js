/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'shark': {
          DEFAULT: '#111317',
          '50': '#1C2027',
          '100': '#F3F4F6',
          '200': '#494D52',
          '300': '#B2B9C6',
          '400': '#929CAE',
          '500': '#727E97',
          '600': '#1A1E24',
          '700': '#111317',
          '800': '#1C2027',
          '900': '#111317'
        },
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
      })
    })
  ],
}