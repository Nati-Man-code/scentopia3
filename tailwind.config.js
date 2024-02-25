/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      // Color Variables
      colors: {
        "accentPink-dark": "#FF286A",
        "accentPink-medium": "#FD598B",
        "accentPink-light": "#FD6292",
        "text-black": "#000",
        "text-gray": "#333",
        "text-light-gray": "##F9F9F9",
        "text-white": "#FFF",
      },

      // Font Variables
      fontFamily: {
        LobsterTwo: ["Lobster Two", "sans-serif"],
        MiriamLibre: ["Miriam Libre", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
