/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'fullscreenhome': "url('./img/fullscreendark.jpg')",
      },
      colors: {
        'ffb' : "#ffb400",
      }
      
    },
    fontFamily: {
        pops: ["Poppins", 'sans-serif'],
        open: ["Open Sans", 'sans-serif'],
    },
  },
  plugins: [],
}

