/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7ff",
          100: "#dce9ff",
          200: "#bfd6ff",
          300: "#93b7ff",
          400: "#6394ff",
          500: "#3a6cff",
          600: "#1f4cf6",
          700: "#1a3bd0",
          800: "#1b36a6",
          900: "#1c3484"
        }
      }
    }
  },
  plugins: []
};
