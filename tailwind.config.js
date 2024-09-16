/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors:{
        primary: '#0c1c2c',
        ternary: '#c0e863'
      },
      fontFamily:{
        medium: 'Poppins-Medium',
        regular: 'Poppins-Regular',
        bold: 'Poppins-Bold',
        semiBold: 'Poppins-SemiBold',
        light: 'Poppins-Light'
      }
    },
  },
  plugins: [],
};
