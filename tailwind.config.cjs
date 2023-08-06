/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2C1E4A",
        secondary: "#FFFFFF",
        tertiary: "##2C1E4A",
        "black-100": "#2C1E4A",
        "black-200": "#33092C",
        "white-100": "#FFFFFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
