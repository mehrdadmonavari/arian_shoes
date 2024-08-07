/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["iranyekan"],
         },
      },
   },
   plugins: [
      require("@tailwindcss/forms")({
         strategy: "class", // only generate classes
      }),
   ],
};
