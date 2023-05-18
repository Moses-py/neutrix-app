/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "420px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1401px",
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
      primary: ["var(--font-source_sans_pro)"],
      secondary: ["var(--font-source_sans_pro)"],
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
        misc: "#121228",
        d_main: "#344767",
        green: "#07a83a",
        red: "#d6181e",
        blue: "#1824d6",
        pink: "#db277e",
        purple: "#8506c4",
        cyan: "#0ae8f0",
        orange: "#ed8309",
        yellow: "#f5f500",
      },
      backgroundImage: {
        dash_1: "url('/public/backgrounds/dash_1.jpg')",
        dash_2: "url('/public/backgrounds/dash_2.jpg')",
        dash_3: "url('/public/backgrounds/dash_3.jpg')",
        dash_4: "url('/public/backgrounds/dash_4.jpg')",
        dash_5: "url('/public/backgrounds/dash_5.jpg')",
        dash_6: "url('/public/backgrounds/dash_6.jpg')",
        dash_7: "url('/public/backgrounds/dash_7.jpg')",
        profile_bg: "url('/public/backgrounds/curved0.jpg')",
      },
    },
  },
};
