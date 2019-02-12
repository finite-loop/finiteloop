import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/content'
import Layout from '../../components/layout'

class Offerings extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.Offerings
    const PageContent = HTMLContent || Content
    return (
      <Layout>
        <section name="services">
          <PageContent
            className="para-primary text-center sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:text-xl md:text-3xl"
            content={data.global.frontmatter.offeringText}
          />
          <div className="mx-auto text-center pb-4">
            <Link to="/contact">
              <button className="rectButton">Talk to us</button>
            </Link>
          </div>
          {posts.map(({ node: post }) => (
            <div key={post.id} className="sm:px-4 md:px-12 lg:px-16">
              <a
                className="block relative"
                style={{ top: '-100px' }}
                id={post.frontmatter.path}
              />
              <h2 className="text-2xl pb-4">
                <span id={post.frontmatter.path}>{post.frontmatter.title}</span>
              </h2>
              <div className="two-column pb-4" style={{ minHeight: '150px' }}>
                <PageContent
                  className="primary text-lg tracking-wide leading-normal"
                  content={post.html}
                />
                {/* <img src={post.frontmatter.image} style={{ width: '200px' }} /> */}
              </div>
              <hr className="line w-full" />
            </div>
          ))}
        </section>
      </Layout>
    )
  }
}

Offerings.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Offerings

export const offeringsQuery = graphql`
  query Offertings {
    Offerings: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "offering" } } }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            image
            title
            templateKey
            path
            order
          }
        }
      }
    }
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
        offeringText
      }
    }
  }
`
