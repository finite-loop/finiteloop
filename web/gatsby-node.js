/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProjects {
      projects: allSanityProjects {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/project/${project.slug.current}`,
      component: path.resolve("src/templates/project.js"),
      context: {
        slug: project.slug.current,
      },
    })
  })
}
