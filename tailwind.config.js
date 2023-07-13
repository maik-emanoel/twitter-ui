/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitterBlue: '#1da1f2',
        grayBorder: '#ebeef0',
        separatorColor: '#f7f9fa'
      }
    },
  },
  plugins: [],
}

