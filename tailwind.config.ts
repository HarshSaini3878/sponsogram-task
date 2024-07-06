import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
      },
      colors: {
        customGreen: 'rgba(44, 185, 108, 1)',
        customDarkGreen: 'rgba(1, 153, 102, 1)',

      },
    },
  },
  plugins: [],
};
export default config;
