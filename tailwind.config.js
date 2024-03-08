/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-grey": "hsl(0, 0%, 86%)",
      "smokey-grey": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      sans: "Poppins",
    },
  },
  plugins: [],
};

// ### Primary

// - Purple: hsl(259, 100%, 65%)
// - Light red: hsl(0, 100%, 67%)

// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Off white: hsl(0, 0%, 94%)
// - Light grey: hsl(0, 0%, 86%)
// - Smokey grey: hsl(0, 1%, 44%)
// - Off black: hsl(0, 0%, 8%)
