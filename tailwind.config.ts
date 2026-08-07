import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0C10",
        surface: "#1F2833",
        foreground: "#FFFFFF",
        accent: {
          DEFAULT: "#C9A572",
          foreground: "#0B0C10",
        },
        muted: "#8A8F98",
        border: "#2A2E37",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201, 165, 114, 0.4), 0 0 24px rgba(201, 165, 114, 0.15)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
