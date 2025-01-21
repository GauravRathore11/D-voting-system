/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      colors: {
        "nav1-color" : "#84BC9C",
        "nav2-color" : "#2CA58D",
        "button1-color" : "#0A2342",
        "para-color" : "#FFFDF7"
      }
    },
  },
  plugins: [],
};
