module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "var(--color-primary)",
      "primary-alt": "var(--color-primary-alt)",
      gray: "var(--color-gray)",
      black: "#000",
      white: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
