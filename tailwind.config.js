module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#14152C'
      },
      fontFamily: {
        'mont': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}