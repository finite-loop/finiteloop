module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        half: "50vh",
        quarter: "25vh",
        thirty: "30vh",
        thirtyfive: "35vh",
        forty: "40vh",
      },
    },
    inset: {
      "1/2": "50%",
      "1/5": "15%",
      "1/4": "20%",
      "1/6": "10%",
      "1/7": "5%",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
