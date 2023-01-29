/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-exa": ["Lexend Exa"],
      },
    },
    screens: {
      sc3: "300px",
      sc4: "400px",
      sc5: "500px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
