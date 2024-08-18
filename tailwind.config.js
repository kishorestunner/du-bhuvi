const { nextui } = require("@nextui-org/react");

const colors = {
  black: "#000000",
  white: "#ffffff",
  primary: {
    100: "#F6F2FF",
    200: "#E0D4FF",
    300: "#B186FF",
    400: "#8525F4",
    500: "#691BBC",
    600: "#360C69",
    DEFAULT: "#8525F4",
    foreground: "#ffffff",
  },
  gray: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    20: "#E7E7E7",
    30: "#D1D1D1",
    40: "#B0B0B0",
    50: "#888888",
    60: "#6D6D6D",
    70: "#5D5D5D",
    80: "#4F4F4F",
    90: "#454545",
    100: "#3D3D3D",
    110: "#202020",
  },
  danger: {
    10: "#FFF0EE",
    100: "#DE1135",
    DEFAULT: "#DE1135",
  },
  success: {
    10: "#EAF6ED",
    100: "#0E8345",
    DEFAULT: "#0E8345",
  },
  info: {
    10: "#EFF4FE",
    100: "#276EF1",
    DEFAULT: "#276EF1",
  },
  warning: {
    10: "#FDF2DC",
    100: "#9C7107",
    DEFAULT: "#9C7107",
  },
  foreground: "#243757",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components_v1/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "1024px",
      lg: "1400px",
    },
    colors,
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.375rem",
      "2xl": "1.5rem",
      "3xl": "1.625rem",
      "4xl": "1.75rem",
      "5xl": "1.875rem",
      "6xl": "2rem",
      "7xl": "2.125rem",
      "8xl": "2.25rem",
      10: "10px",
      11: "11px",
      12: "12px",
      13: "13px",
      15: "15px",
      16: "16px",
      19: "19px",
      21: "21px",
    },
    extend: {
      boxShadow: {
        glow: "4px 4px 12px 0px rgba(0, 0, 0, 0.05)",
        hover: "4px 4px 12px 0px rgba(0, 0, 0, 0.15)",
        xs: "1px 1px 8px 0px rgba(0, 0, 0, 0.10)",
        sm: "0px 4px 32px 0px rgba(32, 32, 32, 0.08)",
        md: "0px 2px 8px 0px rgba(136, 136, 136, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradiant-light": "linear-gradient(180deg, #F3EDFD -25.55%, #FFF 100%)",
      },
      animation: {
        shake: "shake 200ms",
        scroll: "scroll .5s linear 10",
        "scroll-text": "scroll-text 7s linear 0s infinite normal",
        'fade-in-1': 'fadeIn 0.5s ease-in forwards',
        'fade-in-2': 'fadeIn 0.5s ease-in 0.5s forwards',
        'fade-in-3': 'fadeIn 0.5s ease-in 1s forwards',
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
        scroll: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "scroll-text": {
          "0%": { transform: "translateX(0%)" },
          "90%": { transform: "translateX(-100%)" },
          "95%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors,
        },
      },
    }),
  ],
};
