/* eslint-disable global-require */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
