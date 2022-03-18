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
        'venetian-red': '#920300',
        'yankees-blue': '#222345',
        'black-transparent': 'rgba(0,0,0,.45)'
      },
      fontFamily: {
        'mont': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}