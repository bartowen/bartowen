import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mar: {
          DEFAULT: "#0e7c86",
          dark: "#075c63",
          light: "#1aa3af",
        },
        arena: "#f4e7d3",
        atardecer: "#ff7a45",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
