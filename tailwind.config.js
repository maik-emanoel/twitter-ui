/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        twitterBlue: '#1da1f2',
        grayBorder: '#ebeef0',
        grayBorderDark: '#2F2F2F',
        separatorColor: '#f7f9fa',
        bodyDark: '#121214',
        tweetColor: '#E1E1E6'
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '425px'},
      // => @media (max-width: 425px) { ... }
    }
  },
  plugins: [],
}

