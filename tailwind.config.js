/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "secondary-color-2": "var(--secondary--color-2)",
        "accent-primary-1": "var(--accent--primary-1)",
        "secondary-color-3": "var(--secondary--color-3)",
      },
      fontFamily: {
        sans: ["Volte", "sans-serif"],
      },
    },
  },
  plugins: [],
};
