/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "hsl(14, 86%, 42%)",
        customGreen: "hsl(159, 69%, 38%)",
        customRose50: "hsl(20, 50%, 98%)",
        customRose100: "hsl(13, 31%, 94%)",
        customRose300: "hsl(14, 25%, 72%)",
        customRose400: "hsl(7, 20%, 60%)",
        customRose500: "hsl(12, 20%, 44%)",
        customRose900: "hsl(14, 65%, 9%)",
      },
    },
  },
  plugins: [],
};
