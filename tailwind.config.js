module.exports = {
  purge: ['./pages/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
