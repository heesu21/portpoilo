/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        line: ["var(--font-line)", "sans-serif"],
      },
      fontSize: {
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
      screens: {
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        ml: { max: "1299px" },
        s: { max: "1023px" },
        xs: { max: "767px" },
      },
      maxWidth: {
        "container-l": "1440px",
        "container-ml": "1300px",
        "container-m": "1024px",
        "container-s": "768px",
        "container-xs": "100%",
      },
      backgroundImage: {
        "header-bg": "url('/assets/images/background.jpg')",
      },
      borderColor: {
        border: "#171717", // 'border-border' 클래스 정의
      },
    },
  },
  plugins: [],
};
