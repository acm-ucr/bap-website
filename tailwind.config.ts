/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
