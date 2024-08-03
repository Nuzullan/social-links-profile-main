/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        Inter: ['Inter','sans-serif'],
      },
      height: {
        '128': "32rem",
      },
      colors: {
        Grey900: "hsl(0, 0%, 8%)",
        Grey800: "hsl(0, 0%, 12%)",
        Grey700: "hsl(0, 0%, 20%)",
        Green: " hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",

      }
    },
  },
  plugins: [],
}