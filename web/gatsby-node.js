/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const about_data = await graphql(`
    {
      about: allSanityAbout {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  about_data.data.about.nodes.forEach(about => {
    createPage({
      path: `/about`,
      component: path.resolve(`src/templates/about_template.js`),
      context: {
        slug: about.slug.current,
      },
    })
  })
}
