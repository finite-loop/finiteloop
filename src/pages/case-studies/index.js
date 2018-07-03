import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

class CaseStudies extends React.Component {
  render() {
    const { data, classes } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <div>
              <div cellHeight={180}>
                {posts
                  .filter(
                    post => post.node.frontmatter.templateKey === 'case-study'
                  )
                  .map(({ node: post }) => (
                    <div
                      style={{ height: '400px', width: '400px' }}
                      key={post.id}
                    >
                      <div
                        style={{
                          width: '100%',
                        }}
                        component={Link}
                        to={post.frontmatter.path}
                      >
                        <span
                          style={{
                            backgroundImage: `url(${post.frontmatter.image})`,
                          }}
                        />
                        <span />
                        <span>
                          <div
                            component="span"
                            variant="subheading"
                            color="inherit"
                          >
                            {post.frontmatter.title}
                            <span />
                          </div>
                        </span>
                      </div>
                      <div style={{}} title={post.excerpt} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
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
