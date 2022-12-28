/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F1F1F1",
        brand: {
          100: "#141414",
          200: "#232121",
          300: "#312E2E",
          400: "#575151",
          500: "#706868",
          600: "#9C9292",
          700: "#C3BDBD",
          800: "#E3E0E0",
          900: "#F1F0F0",
        },
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      display: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
