/** @type {import('tailwindcss').Config} */
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
          '200': '#D3D6DE',
          '300': '#B2B9C6',
          '400': '#929CAE',
          '500': '#727E97',
          '600': '#596378',
          '700': '#414858',
          '800': '#292E37',
          '900': '#111317'
        },
      }
    },
  },
  plugins: [],
}