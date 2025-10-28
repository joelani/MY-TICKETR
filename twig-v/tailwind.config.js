/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates//*.twig",
    "./public//*.js", // if you’ll add JS for interactivity
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e8f1ff",
          100: "#c7dbff",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};
