/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "1000px" },
        smartPhone: { max: "435px" },
      },
    },
  },
  plugins: [],
};
