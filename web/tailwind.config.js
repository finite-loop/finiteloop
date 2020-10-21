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
      },
    },
    inset: {
      "1/2": "50%",
      "1/5": "15%",
      "1/4": "20%",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
