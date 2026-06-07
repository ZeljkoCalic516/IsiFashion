import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Light beige surfaces
        sand: {
          50: "#FAF6EF",
          100: "#F5EFE6",
          200: "#E8DDCB",
          300: "#D9C9AE",
        },
        // Burgundy brand
        burgundy: {
          DEFAULT: "#6E1423",
          500: "#7B2233",
          600: "#6E1423",
          700: "#581019",
          800: "#430C13",
        },
        ink: "#2B2320",
        brass: "#B08D57",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
