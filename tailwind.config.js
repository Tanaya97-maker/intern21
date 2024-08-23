module.exports = {
  content: ['./pages/**/*.{html,js,jsx,ts,tsx}', './components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        red: '0 4px 20px 0 rgba(0, 0, 0,0.14), 0 7px 10px -5px rgba(244, 67, 54,0.4)',
        cyan: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 172, 193,0.4)',
        amber:'0 4px 20px 0 rgba(0, 0, 0,0.14), 0 7px 10px -5px rgba(255, 152, 0,0.4)',
        green: '0 4px 20px 0 rgba(0, 0, 0,0.14), 0 7px 10px -5px rgba(76,175,80,0.4)',
        fuchsia: '0 4px 20px 0 rgba(0, 0, 0,0.14), 0 7px 10px -5px rgb(242, 146, 233 ,0.4)',
        gray: '0 0 4px 0 rgba(0, 0, 0,0.14)'
      },
      
    },
  },
  plugins: [],
}

/*colors: {
      primary: '#800080', // Your custom primary color
    },*/