/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "questrial": ['Questrial', "sans-serif"],
        "poppins": ['Poppins', "sans-serif"],
        "lspartan": ['League Spartan', "sans-serif"],
      }
    },
  },
  plugins: [],
}

