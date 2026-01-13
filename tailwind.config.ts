import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // 'media'로 설정하면 시스템 설정을 따르고, 'class'로 설정하면 직접 제어할 수 있습니다.
  darkMode: "media", 
  theme: {
    extend: {
      colors: {
        grayscale: {
          white: "var(--grayscale-white)",
          50: "var(--grayscale-50)",
          100: "var(--grayscale-100)",
          200: "var(--grayscale-200)",
          300: "var(--grayscale-300)",
          400: "var(--grayscale-400)",
          500: "var(--grayscale-500)",
          black: "var(--grayscale-black)",
        },
        blue: {
          100: "var(--blue-100)",
          500: "var(--blue-500)",
        },
        text: {
          strong: "var(--text-strong)",
          bold: "var(--text-bold)",
          default: "var(--text-default)",
          weak: "var(--text-weak)",
          point: "var(--text-point)",
          "white-default": "var(--text-white-default)",
          "white-weak": "var(--text-white-weak)",
        },
        surface: {
          default: "var(--surface-default)",
          alt: "var(--surface-alt)",
          brand: {
            default: "var(--surface-brand-default)",
            alt: "var(--surface-brand-alt)",
          },
        },
        border: {
          default: "var(--border-default)",
          bold: "var(--border-bold)",
        },
      },
      borderRadius: {
        100: "var(--radius-100)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        two: "var(--shadow-two)",
        eight: "var(--shadow-eight)",
      },
      fontFamily: {
        pretendard: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;