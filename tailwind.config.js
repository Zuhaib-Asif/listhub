/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        gilroy: {
          black: "Gilroy-Black, sans-serif",
          blackItalic: "Gilroy-BlackItalic, sans-serif",
          bold: "Gilroy-Bold, sans-serif",
          boldItalic: "Gilroy-BoldItalic, sans-serif",
          extraBold: "Gilroy-ExtraBold, sans-serif",
          extraBoldItalic: "Gilroy-ExtraBoldItalic, sans-serif",
          heavy: "Gilroy-Heavy, sans-serif",
          heavyItalic: "Gilroy-HeavyItalic, sans-serif",
          light: "Gilroy-Light, sans-serif",
          lightItalic: "Gilroy-LightItalic, sans-serif",
          medium: "Gilroy-Medium, sans-serif",
          mediumItalic: "Gilroy-MediumItalic, sans-serif",
          regular: "Gilroy-Regular, sans-serif",
          regularItalic: "Gilroy-RegularItalic, sans-serif",
          semiBold: "Gilroy-SemiBold, sans-serif",
          semiBoldItalic: "Gilroy-SemiBoldItalic, sans-serif",
          thin: "Gilroy-Thin, sans-serif",
          thinItalic: "Gilroy-ThinItalic, sans-serif",
          ultraLight: "Gilroy-UltraLight, sans-serif",
          ultraLightItalic: "Gilroy-UltraLightItalic, sans-serif",
        },
        swanky: ["Swanky and Moo Moo", "cursive"],
      },
    },
  },
  plugins: [],
};
