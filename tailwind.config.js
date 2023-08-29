/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
        "primary-light": "#FCBB14",
        "primary-middle": "#FFBF1A",
        "primary-dark": "#FFBF18",
        "secondary-light": "#6272EE",
        "secondary-middle": "#374BE5",
        "secondary-dark": "#2236D6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xl: "40px",
        lg: "28px",
        base: "14px",
      },
    },
    extend: {},
  },
  plugins: [],
};
