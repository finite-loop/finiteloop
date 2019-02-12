import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

class CaseStudies extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.Casestudies

    return (
      <Layout>
        <Helmet title={`${data.global.frontmatter.siteTitle} | Case Study`} />
        <section
          className="flex flex-wrap justify-center items-center px-12"
          name="casestudies"
        >
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'case-study')
            .map(({ node: post }) => (
              <div className="shadow-lg m-4 rounded-lg flex-col" key={post.id}>
                <Link
                  to={post.frontmatter.path}
                  style={{ float: 'right' }}
                  className="primary text-center no-underline uppercase text-xl"
                >
                  <img
                    src={post.frontmatter.image}
                    className="sm:max-w-sm md:max-w-auto h-auto p-2"
                  />
                  <hr className="line w-full" />
                  <div className="p-2 text-center">
                    <span className="flex-1">{post.frontmatter.title}</span>
                  </div>
                </Link>
              </div>
            ))}
        </section>
      </Layout>
    )
  }
}

CaseStudies.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaseStudies

export const caseStudiesQuery = graphql`
  query IndexQuery {
    Casestudies: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
      }
    }
  }
`
