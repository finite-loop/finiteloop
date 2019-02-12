import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Link, graphql } from 'gatsby'

const Portfolios = ({ pageContext, data }) => {
  const { portfolio } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${portfolio}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { path, title, image } = node.frontmatter
          return (
            <li key={path}>
              <img src={image} />
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/Portfolios">All Portfolios</Link>
    </div>
  )
}

Portfolios.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Portfolios

export const portfolioQuery = graphql`
  query($portfolio: String) {
    allMarkdownRemark(
      filter: { frontmatter: { portfolio: { in: [$portfolio] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`
