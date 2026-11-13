module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
        body: ["var(--font-source)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#121110",
        panel: "#1f1d1b",
        line: "#34302c",
        cream: "#f6efe6",
        muted: "#c9c0b4",
        tan: "#C68B59",
        sun: "#F2B705",
      },
    },
  },
  plugins: [],
};
