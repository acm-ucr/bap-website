/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },

          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-down": "fadeDown .7s ease-in-out",
        "fade-right": "fadeRight 0.5s ease-in-out",
      },
      boxShadow: {
        "3xl": "0px 8px 20px 8px #1C090A80;",
      },
      colors: {
        bap: {
          "brown-100": "#C5C19D",
          "brown-400": "#1C090A", // background color
          "red-200": "#AF272F",
          "red-800": "#491014", // calendar text color, used nowhere else
        },
      },
    },
  },
  plugins: [tailwindcssAnimated],
};
