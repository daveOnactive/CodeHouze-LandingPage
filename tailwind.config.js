module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#EE6923',
        secondary: '#680E2E',
      },
      boxShadow: {
        btnShadow: '0px 4px 5px 0px rgba(238,105,35,0.2), 0px 3px 14px 0px rgba(238,105,35,0.12), 0px 8px 10px 0px rgba(238,105,35,0.14)',
        cardShadow: '0px 0px 18px 2px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  variants: {},
  plugins: [],
};
