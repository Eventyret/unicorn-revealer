/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        unicorn: {
          pink: '#E91E63',
          hover: '#D81B60'
        }
      }
    }
  },
  plugins: []
}
