import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

class CaseStudies extends React.Component {
  render() {
    const { data, classes } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section name="casestudies">
        <h1 className="has-text-weight-bold is-size-2">Case Studies</h1>
        {posts
          .filter(post => post.node.frontmatter.templateKey === 'case-study')
          .map(({ node: post }) => (
            <div style={{ height: '100%', width: '400px' }} key={post.id}>
              <Link
                to={post.frontmatter.path}
                style={{ float: 'right' }}
                className="primary text-center no-underline uppercase text-md p-2 hover:bg-primary-alternate"
              >
                <img src={post.frontmatter.image} style={{ width: '100%' }} />
                <span>
                  <div component="span" variant="subheading" color="inherit">
                    {post.frontmatter.title}
                    <span />
                  </div>
                </span>
              </Link>
              <div style={{}} title={post.excerpt} />
            </div>
          ))}
      </section>
    )
  }
}

CaseStudies.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default CaseStudies

export const caseStudiesQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            image
            title
            templateKey
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
