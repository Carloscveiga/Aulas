/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      'sm': '414px',
      'md': '768px',
      'lg': '1440px',
    },
    colors: {
      'gray-light': '#F9F9FC',
      purple: '#5E3BEE',
      white: '#fff',
      brown: '#333333',
      'border-color': '#404040',
      green: '#004e00',
      'gray-dark': '#C4C4C4',
      

    },
    boxShadow: {
      'my-shadow': '37px 37px 80px rgba(0, 0, 0, 0.1)',
    },
  },
  variants: {},
  plugins: [],
}

