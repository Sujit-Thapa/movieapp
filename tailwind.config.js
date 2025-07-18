/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#123123",
        bg:"#F0F0F0",
        secondary: "#000000",
        accent: "#AB8BFF",
        text: "#ffffff",
    },
  },
  plugins: [],
  }
};