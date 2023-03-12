/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main': '#682d63',
        'secondary': '#7576bd',
        'success': '#5fb49c',
        'warning': '#ffff70',
        'error': '#e6614c',
        'neutral': '#2c2c2c',
        'white': '#fff',
        'black': '#000',
        'grey': '#d9d9d9',
      },
    },
  },
  plugins: [],
}
