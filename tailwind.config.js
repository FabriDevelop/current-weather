const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/*/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      ...colors,
      background: {
        500: "#1A1C49",
        600: "#101039",
      },
    },
  },
  plugins: [],
};
