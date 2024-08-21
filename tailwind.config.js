/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
      xlg: "22px",
      lg: "24px",
      elg: "34px",
      e2lg: "60px",
      mlg: "88px",
    },
    extend: {
      colors: {
        green: "hsla(124, 37%, 60%, 1)",
        grayLight: "hsla(252, 3%, 63%, 1)",
        grayUltraLight: "hsla(0, 0%, 98%, 1)",
        violStrong: "hsla(252, 35%, 19%, 1)",
        violLight: "hsla(240, 13%, 60%, 1)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        avant: ["ITC Avant Garde Gothic Pro font", "sans-serif"],
      },
    },
  },
  plugins: [],
};
