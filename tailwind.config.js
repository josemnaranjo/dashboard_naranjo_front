/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        width:{
            workerList: '30rem'
        },
      colors: {
        "primary-light": "rgba(252, 187, 20, 0.58)",
        "primary-middle": "rgba(255, 191, 26, 0.85)",
        "primary-dark": "rgba(255, 191, 24, 1)",

        "secondary-light": "rgba(98, 114, 238, 1)",
        "secondary-middle": "rgba(55, 75, 229, 0.97)",
        "secondary-dark": "rgba(34, 54, 214, 1)",

        "frame" :"rgba(238,238,238,1)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        biggest: "36px",
        xl: "26px",
        lg: "14px",
        base: "12px",
        label: "10px",
      },
      dropShadow: {
        sidebar: "8px 9px 4px rgb(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
