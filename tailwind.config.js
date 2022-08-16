/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'icon_background': 'var(--color-icon_background)',
        'background': 'var(--color-background)',
        'active': 'var(--color-active)',
        'text': 'var(--color-text)',
        'icon_color': 'var(--color-icon_color)',
        'input_border': 'var(--color-input_border)',
        'input_border_inactive': 'var(--color-input_border_inactive)',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
      })
    })
  ],
}