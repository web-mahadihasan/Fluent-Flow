/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        authbg: "url('./assets/loginBg.png')",
        bannerBlue: "url('https://i.ibb.co.com/Hpmpc94/bannerbg-blue.png')",
        bgShadow: "url('./assets/bgShadow.svg')",
        aboutBg: "url('./assets/bgAbout.svg')",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
    // flowbite.plugin(),
  ],
});

