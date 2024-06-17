/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "bg-gradient-start": "#F6DBC0",
        "bg-gradient-end": "#F5D3B2",
        primary: "#441f05",
      },
    },
  },
  plugins: [],
};
