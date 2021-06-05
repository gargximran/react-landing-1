module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontfamily: {
        openSanse: ['Open Sans', 'roboto']
      },
      colors: {
        'secondary': '#FCF8F5',
        'blueWhite': '#f5f9fa'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
