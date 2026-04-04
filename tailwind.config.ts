import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        primary: "#00C853",
        "primary-dim": "#00A844",
        secondary: "#0A0A0A",
        accent: "#FF6F00",
        surface: "#111111",
        "surface-elevated": "#1A1A1A",
        border: "#222222",
        "border-subtle": "#1A1A1A",
      },
      fontFamily: {
        mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(0, 200, 83, 0.08) 0%, transparent 60%)",
        "section-gradient": "linear-gradient(180deg, #000000 0%, #0A0A0A 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
