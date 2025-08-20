/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03001C", // Dominant Color
        secondary: "#f9f8ff", // Complimentary Color
        accent: "#3b214a", // Accent Color
      },
      fontFamily: {
        heading: ["Lexend", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      fontSize: {
        heading: ["1.5rem", { lineHeight: "2rem" }], // 24px
        body: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      },
      fontWeight: {
        heading: "700", // Bold for heading
        subheading:'600',
        body: "500", // Medium for body
      },
      boxShadow: {
        light:"0 0 10px rgba(255,255,255,0.5)"
      }
    },

  },
  plugins: [],
};
