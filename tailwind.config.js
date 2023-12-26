/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '350px',
        hd: '1980',
        t2k: '2560',
        t4k: '3840',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
      colors: {
        'back-dark': '#1c1917',
        'back-light': '#fafaf9',
        'primary-lm': '#008fff',
        'primary-dm': '#45adff',
        'error-lm': '#e23d4d',
        'error-dm': '#ec6170',
      },
    },
  },
  plugins: [],
};
