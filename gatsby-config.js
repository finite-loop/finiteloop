const tailwindcss = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  siteMetadata: {
    title: 'Finiteloop Systems',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'settings',
        path: `${__dirname}/src/settings/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
        precision: 5,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
  ],
}
