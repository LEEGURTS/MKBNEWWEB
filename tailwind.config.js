/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-exa": ["Lexend Exa"],
        "comic-sans": ["Comic Sans MS", "Comic Sans"],
        pretendard: ["Pretendard-Regular"],
      },
      boxShadow: {
        "3xl": "0px 0px 2px 2px  rgba(232, 232, 232, 1)",
      },
    },
    screens: {
      sc3: "300px",
      sc4: "400px",
      sc5: "500px",
      sm: "640px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
