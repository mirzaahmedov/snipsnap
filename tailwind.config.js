/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      colors: {
        background: "#18181B",
        "surface-1": "#27272A",
      },
    },
  },
  plugins: [],
};
