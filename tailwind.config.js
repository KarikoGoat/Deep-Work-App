/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'brandYellow': '#ffd369',
      'veryDarkGrey': '#222831',
      'veryLightGrey': '#9ca0a9',
      'almostWhite': '#eeeeee',
      'almostVeryDarkGrey': '#7f838a',
      'darkishGrey': '#4f535b',
      'veryDarkishGrey': '#393e46',
      'lightestGrey': '#b0b3ba',
      'almostVeryDarkishGrey': '#262b33',
      'red': '#e82929',
      'grey': '#474c53'
    }
  },
  plugins: [],
}
