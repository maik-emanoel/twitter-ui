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
        bodyDark: '#000',
        tweetColor: '#E1E1E6',
        textDark: '#E7E9EA',
        mute: '#536471',
        muteDark: '#71767B',
        retweetGreen: 'rgb(0, 186, 124)',
        likePink: 'rgb(249, 24, 128)'
      },
      boxShadow: {
        floatButton: 'rgba(217, 217, 217, 0.2) 0px 0px 5px, rgba(217, 217, 217, 0.25) 0px 1px 4px 1px',
        menu: 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
        menuDark: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px'
      },
      animation: {
        fadeIn: 'fadeIn .2s ease-in-out backwards',
        fadeOut: 'fadeOut .2s ease-in-out forwards',
        fadeUp: 'fadeUp .4s backwards',
        fadeDown: 'fadeDown .3s backwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateX(-100%)' }
        },
        fadeOut: {
          '100%': { transform: 'translateX(-100%)' }
        },
        fadeUp: {
          '0%': { transform: 'translateY(60px)' }
        },
        fadeDown: {
          '0%': { transform: 'translateY(-10px)', opacity: .8 }
        }
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

