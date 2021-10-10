module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom_border: {
          hover: "#616475",
          normal: "#151522",
          secondary: "#FF6F3D",
          dark: "#009eeb",
        },
        custom_bg: {
          hover: "#616475",
          normal: "#151522",
          secondary: "#1E213A",
        },
        custom_hover: {
          primary: "#1a1d35",
          secondary: "#616475",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
