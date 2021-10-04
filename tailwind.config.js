const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1160px",
      },
    },

    extend: {
      colors: {
        orange: "#F65C44",
        purple: "#302033",
      },
      fontSize: {
        "main-heading": ["3rem"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        p: { fontSize: "1.4rem", marginBottom: "2rem" },
        li: { fontSize: "1.4rem", marginBottom: "2rem" },
      });
    }),
  ],
};
