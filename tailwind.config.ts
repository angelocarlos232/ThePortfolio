import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: {
          default: '#f5f3f0',
          secondary: '#c3bdb4'
        },
        gray: {
          default: '#d4d2cf',
          secondary: '#232121',
          text: '#727171'
        },
        black: {
          default: '#252323'
        }
      },
    },
  },
  plugins: [],
};
export default config;
