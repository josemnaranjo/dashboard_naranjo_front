/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "rgba(252, 187, 20, 0.58)",
        "primary-middle": "rgba(255, 191, 26, 0.85)",
        "primary-dark": "rgba(255, 191, 24, 1)",

        "secondary-light": "rgba(98, 114, 238, 1)",
        "secondary-middle": "rgba(55, 75, 229, 0.97)",
        "secondary-dark": "rgba(34, 54, 214, 1)",
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
  },
  plugins: [],
};
