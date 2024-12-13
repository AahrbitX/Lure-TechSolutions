import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        cgreen: "#54af33",
        cwhite: "var(--white)",
        cblack: "var(--black)",
      },
      fontFamily: {
        customFonts: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false, // Move preflight outside of extend
  },
  plugins: [],
} satisfies Config;
