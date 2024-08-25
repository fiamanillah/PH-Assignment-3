/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    



    extend: {
      colors: {
        "primary": "#ABEF5F",
        "primary-50": "#ABEF5F80",
        "primary-20": "#ABEF5F30",
        "primary-bg": "#f8f8f8",
        "secondary-bg": "#ebebeb",
        "text-primary": "#212121",
        "text-secondary": "#494949",
        "text-secondary-2": "#737373",
      },
      fontFamily: { 
        "manrope": ['Manrope', 'sans-serif'] 
    },

    screens: {
      '2xl-d': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl-l': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg-t': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md-p': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm-p': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
    },

  },
  plugins: [
  ],
}