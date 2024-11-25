/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-right": "fadeRight 0.5s ease-in-out",
      },
      keyframes: {
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
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
