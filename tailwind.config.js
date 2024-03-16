/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '10rem 1fr',
        layoutMobile: '6rem 1fr',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      colors: {
        'secondary-dark': '#18212f',
        'primary-darker': '#111827',
        'border-dark': '#1e2836',

        'primary-lighter': '#a8dadc',
        'secondary-light': '#f1faee',
        'text-light': '#1d3557',
        logo: '#e63946',
      },
      backgroundImage: {
        register:
          "linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url('public/images/login-bg.jpg')",
      },
    },
  },
  plugins: [],
}
