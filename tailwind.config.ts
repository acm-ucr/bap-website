/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "drop-in": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },

          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "drop-in": "drop-in 0.5s ease-in-out",
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
  plugins: [],
};
