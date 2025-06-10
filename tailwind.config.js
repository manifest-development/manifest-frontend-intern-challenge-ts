/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: '#3B968B',
        lightPeach: '#FFF6EF'

      },
      textColor: {
        disabled: '#2E2D2980'
      },
      backgroundImage: {          
          'hover-overlay': 'linear-gradient(180deg, rgba(46,45,41,0) 0%, rgba(46,45,41,0.05) 100%)',
      },
      fontFamily: {
        work: ['Work Sans']
      }
    },
  },
  plugins: [],
}

