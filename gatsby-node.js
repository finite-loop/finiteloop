const path = require('path')
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            html
            frontmatter {
              path
              templateKey
              title
              portfolio
              service
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    var id = 0

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const pagePath = node.frontmatter.path
      id = id + 1
      if (
        node.frontmatter.templateKey != 'global-settings' &&
        node.frontmatter.templateKey != 'nav-links' &&
        node.frontmatter.templateKey != 'service-carousel' &&
        node.frontmatter.templateKey != 'offering'
      ) {
        createPage({
          path: pagePath,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {},
        })
      }
    })
    // Portfolio Tagged pages:
    let portfolio = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.portfolio')) {
        portfolio = portfolio.concat(edge.node.frontmatter.portfolio)
      }
    })
    // Eliminate duplicate Portfolio tags
    portfolio = _.uniq(portfolio)

    // Make Portfolio tag pages
    portfolio.forEach(portfolio => {
      createPage({
        path: `/portfolio/${_.kebabCase(portfolio)}/`,
        component: path.resolve('src/templates/portfolios.js'),
        context: {
          portfolio,
        },
      })
      // Service Tagged pages:
      let service = []
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.service')) {
          service = service.concat(edge.node.frontmatter.service)
        }
      })
      // Eliminate duplicate service tags
      service = _.uniq(service)

      // Make service tag pages
      service.forEach(service => {
        createPage({
          path: `/service/${_.kebabCase(service)}/`,
          component: path.resolve('src/templates/service-lines.js'),
          context: {
            service,
          },
        })
      })
    })
    return posts
  })
}
