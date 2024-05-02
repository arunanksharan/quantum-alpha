import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textSoft: "var(--textSoft)", // Ensure that --textSoft is defined in your CSS
        text: "var(--text)", // Ensure that --text is defined in your CSS
        bgSoft: "var(--bgSoft)", // Ensure that --bgSoft is defined in your CSS
        bg: "var(--bg)", // Ensure that --bg is defined in your CSS
        failed: {
          500: "#f7737375", // Example, change according to your preference
        },
        success: {
          500: "#afd6ee75", // Example, change according to your preference
        },
        pending: {
          500: "#f7cb7375", // Example, change according to your preference
        },
      },
    },
  },
  plugins: [],
}
export default config
