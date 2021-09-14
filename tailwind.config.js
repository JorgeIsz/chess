module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "primary": "var(--color-primary)",
      "primary-dark": "var(--color-primary-dark)",
      "gray": "var(--color-gray)",
      "black": "#000",
      "white": "var(--color-white)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
