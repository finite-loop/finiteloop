const cssnext = require('postcss-cssnext')

module.exports = {
  plugins: [
    require('precss'),
    require('tailwindcss')('./tailwind.js'),
    cssnext(),
  ],
}
