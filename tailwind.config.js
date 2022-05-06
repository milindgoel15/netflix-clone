module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to top, rgba(0, 0, 0, .8) 0, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, .9) 100%),url('./assets/images/background.jpg')"
      }
    },
  },
  plugins: [],
}
