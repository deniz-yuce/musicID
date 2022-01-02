module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Mmobile: "url('/src/Images/IdentifyMobile.svg')",
        MainPC: "url('/src/Images/IdentifyPC.svg')",
      },
    },
    colors: {
      projWhite: "#F8F8F8",
      "white-bg": "rgba(248, 248, 248, 0.35)",
      gray: "#E5E5E5",
      black: "#303030",
      blue: {
        200: "#00BBF9",
        400: "#0000B9",
      },
      purple: "rgba(0, 0, 185, 0.5)",
    },
    fontFamily: {
      main: ["Overpass"],
    },
  },
  plugins: [],
};
