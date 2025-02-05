/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#53937b",
        secondary: "#ebf1f4",
      },
    },
  },
  plugins: [],
};
