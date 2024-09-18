/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px"
      },
      screens: {
        sm: "320px",
        sml: "375px",
        md: "500px",
        mdl: "667px",
        lg: "768px",
        "1g": "960px",
        "1gl": "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
      colors: {
        amazonBlue: "#131921",
        amazonLight: "#232F3E",
        amazonYellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_Box: "#F0F2F2",
        footerBottom: "#131A22",
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
      }
    },
  },
  plugins: [],
};

export default config;
