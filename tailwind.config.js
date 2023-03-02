/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        klever: {
          'enabled-button': '#AA33B5',
          'disabled-button': '#501c56',
          'remove-button': '#920000',
          'back-button': '#646464',
          'background': '#13152A',
        },
      }
    },
  },
  plugins: [],
}