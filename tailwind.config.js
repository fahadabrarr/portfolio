module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        hover: "#FF8225",
        header_bg: "#17153B",
        bg: "#0F0F0F",
        form_color: "#005B41",
        text_highlight: "#FF8225",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
