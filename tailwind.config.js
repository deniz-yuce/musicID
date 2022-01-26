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
      semiBlack: "rgba(48, 48, 48, 0.6)",
      blue: {
        100: "#A6E1FA",
        200: "#00BBF9",
        400: "#0000B9",
      },
      purple: "rgba(0, 0, 185, 0.5)",
      pink: "#FCB0B4",
      green: "#98F5E1",
      // backgroundColors: {
      //   red: '#f00',
      //   'red-10': 'rgba(255, 0, 0, 0.1)',
      //   'red-20': 'rgba(255, 0, 0, 0.2)',
      //   'red-50': 'rgba(255, 0, 0, 0.5)',
      //   'red-80': 'rgba(255, 0, 0, 0.8)'
      // },
    },
    fontFamily: {
      main: ["Overpass"],
    },
  },
  plugins: [],
};
