module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          success: "#22c55e",
          black: "#121212",
          primary: "#db2777",
        },
      },
      "dark",
      "light",
    ],
  },
};
