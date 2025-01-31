/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        Softred: "hsl(10, 79%, 65%)",
        softredhover: "hsla(10, 79%, 65%,0.7)",
        Cyan: "hsl(186, 34%, 60%)",
        Darkbrown: "hsl(25, 47%, 15%)",
        Mediumbrown: "hsl(28, 10%, 53%)",
        Cream: "hsl(27, 66%, 92%)",
        Verypaleorange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
