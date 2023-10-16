/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "2xl": ["24px", "29px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "5xl": ["58px", "68px"],
      "6xl": ["68px", "78px"],
      "7xl": ["88px", "98px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "slate-gray": "#6D6D6D",
      },
      screens: {
        wide: "1240px",
      },
    },
  },
  plugins: [],
};
