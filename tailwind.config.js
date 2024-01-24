/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-background": "url('/public/hero-background.png')",
      }),
      fontFamily: {
        gothic: ['"Old London"', "serif"],
        messiri: ["El Messiri", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
