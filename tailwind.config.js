/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      task: "Roboto Condensed",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
