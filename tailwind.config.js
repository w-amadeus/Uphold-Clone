const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-uphold-light': '#eef0f5'
      },
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'tiny': '0.8rem'
      }
    },
  },
  plugins: [],
}
