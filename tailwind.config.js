module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#14152C',
        'byzantine': '#AA33B5',
        'granite-gray': '#646464',
      },
      fontFamily: {
        'mont': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}