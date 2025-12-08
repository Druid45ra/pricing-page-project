/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aici indicăm lui Tailwind unde să caute clasele (pentru purging)
  content: ["./*.html", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo-500
        darkcard: "#111827", // Gray-900
        darkbg: "#000000", // Negru pur
      },
    },
  },
  plugins: [],
};
