/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        layoutCols: '10rem 1fr',
        layoutColsMobile: '6rem 1fr',
      },
      gridTemplateRows: {
        layoutRows: 'auto 1fr',
      },
      colors: {
        softBlueBg: '#18212f',
        darkBlueBg: '#111827',
        logoColor: "#e63946",

        lightSoftBg: '#a8dadc',
        lighterSoftBg: '#f1faee',
        lightIcons: "#1d3557",

        main: '#e5e7eb',
        border: '#1e2836',
      },
      backgroundImage: {
        register:
          "linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url('public/images/login-bg.jpg')",
      },
    },
  },
  plugins: [],
}
