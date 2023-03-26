/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "24px",
      lg: "28px",
      fallback: "36px",
      xl: "48px",
      "2xl": "56px",
    },
    fontFamily: {
      primary: ["var(--font-nunito)"],
      secondary: ["var(--font-nunitosans)"],
    },
    lineHeight: {
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      48: "48px",
      56: "56px",
      64: "64px",
    },
    fontWeight: {
      light: "200",
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/mesh-gradient.png')",
      },
      colors: {
        primary: "#54f2f2",
        slate: "#81AFDD",
        navbarDark: "#080818",
        textGrey: "#777777",
        textLight: "#F1F1F1",
        textDark: "#000000",
      },
    },
  },
  plugins: [],
};
