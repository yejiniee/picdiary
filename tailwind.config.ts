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
        background: { DEFAULT: "#F2EFE5", 1: "#2순위컬러" },
        box: { DEFAULT: "#EADBB4" },
        button: { DEFAULT: "#AAA7D9" },
      },
      screens: {
        // sm: { min: "390px", max: "819px" },
        // md: { min: "820px", max: "1023px" },
        // lg: { min: "1080px" },

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
