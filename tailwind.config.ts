import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "Public Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-barlow)", "Barlow", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        'xs': ['0.65rem', { lineHeight: '0.9rem' }],
        'sm': ['0.8rem', { lineHeight: '1.1rem' }], 
        'base': ['0.9rem', { lineHeight: '1.35rem' }],
        'lg': ['1rem', { lineHeight: '1.4rem' }],
        'xl': ['1.15rem', { lineHeight: '1.6rem' }],
        '2xl': ['1.4rem', { lineHeight: '1.8rem' }],
        '3xl': ['1.7rem', { lineHeight: '2.2rem' }],
        '4xl': ['2rem', { lineHeight: '2.4rem' }],
        '5xl': ['2.5rem', { lineHeight: '2.8rem' }],
        '6xl': ['3rem', { lineHeight: '3.2rem' }],
        '7xl': ['4rem', { lineHeight: '4.2rem' }],
        '8xl': ['5rem', { lineHeight: '5.2rem' }],
        '9xl': ['6rem', { lineHeight: '6.2rem' }],
      },
      animation: {
        slideUp: "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
