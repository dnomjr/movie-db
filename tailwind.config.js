/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layoutCols: "10rem 1fr",
        layoutColsMobile: "6rem 1fr",
      },
      gridTemplateRows: {
        layoutRows: "auto 1fr",
      },
      colors: {
        softBlueBg: "#18212f",
        darkBlueBg: "#111827",
        main: "#e5e7eb",
        border: "#1e2836",
      },
    },
  },
  plugins: [],
}
