/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      Celedon:"#BDE4A8",
      purple: '#9333ea',
      Olivin: '#9AB973',
      Cambridge: '#79B4A9'

    },
    fontFamily:{
      'sans':['ui-sans-seriff']
    }
  },
  plugins: [],
}

