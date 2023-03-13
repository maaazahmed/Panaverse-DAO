/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './componant/**/*.{html,js,jsx,tsx}',
    './sections/**/*.{html,js,jsx, tsx}',
    './styles/**/*.{js,jsx, tsx}',
     
  ],
  mode: 'jit',

  theme: {


    fontFamily: {
      'audiowide': ['Audiowide', "cursive"],
      "ShareTech":["Share Tech"],
      "WireOne":["Faster One"],
      'Italianno':['Italianno', "cursive"]
    },
    extend: {
        colors: {
          "logo-light":"#e6ef29",
          "logo-dark":"#1b7890",
        },
        // colors: {
        //   "logo-light":"#c43a30",
        //   "logo-dark":"#874da2",
        // },
  
     },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };