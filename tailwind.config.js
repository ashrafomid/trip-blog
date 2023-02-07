/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
      },
    },
  },
  plugins: [],
};
