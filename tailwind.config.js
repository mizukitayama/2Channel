/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue' : '#005AB5',
      'white' : '#FFF',
      'gray' : '#D6D5D5',
      'black' : '#000',
    },
    extend: {
      keyframes: {
        fadeout: {
          '0%': { opacity: 1 },
          '30%': {opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        fadeout: 'fadeout 3s 1 ease-out',
      }
    },
  },
  plugins: [],
};
