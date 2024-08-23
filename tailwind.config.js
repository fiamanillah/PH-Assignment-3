/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },



    extend: {
      colors: {
        "primary": "#ABEF5F",
        "primary-50": "#ABEF5F80",
        "primary-20": "#ABEF5F30",
        "secondary-bg": "#f4f4f4",
        "text-primary": "#212121",
        "text-secondary": "#494949",
        "text-secondary-2": "#737373",
      },
      fontFamily: { 
        "manrope": ['Manrope', 'sans-serif'] 
    } 
    },
  },
  plugins: [],
}