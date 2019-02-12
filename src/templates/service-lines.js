import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Link, graphql } from 'gatsby'

const ServiceLines = ({ pageContext, data }) => {
  const { service } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${service}"`

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
      <Link to="/ServiceLines">All ServiceLines</Link>
    </div>
  )
}

ServiceLines.propTypes = {
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

export default ServiceLines

export const pageQuery = graphql`
  query($service: String) {
    allMarkdownRemark(
      filter: { frontmatter: { service: { in: [$service] } } }
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
