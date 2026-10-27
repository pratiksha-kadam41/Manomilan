export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC143C",
        "primary-dark": "#B31233",
        secondary: "#F75270",
        maroon: "#b70650",
        blush: "#F7CAC9",
        crimson: "#c0003b",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.05) translate(0,0)" },
          "100%": { transform: "scale(1.95) translate(1%,1%)" },
        },
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.2 } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        kenburns: "kenburns 20s ease-in-out infinite alternate",
        blink: "blink 1.5s linear infinite",
        float: "float 2s ease-in-out infinite",
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};
