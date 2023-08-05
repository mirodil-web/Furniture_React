/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'darkblue': ' #054C73',
        'gblack': '#333',
        'herodiv': '#DFE9F4'

      },

      fontFamily: {
        'montserrat': [ 'Montserrat',  'sans-serif'],
      },

      backgroundImage: {
        'herobg': "url('/assets/hero-pattern.png')"
      },

      maxWidth: {
        'herodivwidth': '643px'
      },
      backgroundSize: {
        '100%': '100%'
      }

    },
  },
  plugins: [],
}