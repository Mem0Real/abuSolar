/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/images/hero2.jpg')",
        aboutBg: "url('/images/about2.jpg')",
      },
      fontFamily: {
        montserrat: ["MontserratLight"],
        sans: ["MontserratLight", "sans-serif"],
        rubik: ["Rubik"]
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
