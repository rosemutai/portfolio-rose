/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#344563',
        'secondary': '#6070ff;',
        'navyBlue': '#091E42',
        'greyish': '#505F79',
        'lightBlue': '#7F8CFF',
        'lightGrey': '#EBEBFF',
        'darkBlue': '#253858',
        'E34F26': '#E34F26',
        '0074D9': '#0074D9',
        'F7DF1E': '#F7DF1E',
      },

      backgroundImage: {
        'desktop-herosection': 'url("./images/Headerdesktopbg.svg")',
        'mobile-herosection': 'url("./images/headershapesmobile.svg")',
        'card-bg': 'linear-gradient(to bottom right, #FFFFFF, #ECECEC)',
        'contact-formbg': 'url("./images/contactformbg.svg")',
        'contact-formbgmobile': 'url("./images/contactformbgmobile.svg")',
      },

    },
  },
  plugins: [],
}