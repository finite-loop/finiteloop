import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/content'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

class Offerings extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.Offerings
    const PageContent = HTMLContent || Content
    return (
      <Layout>
        <Helmet title={`${data.global.frontmatter.siteTitle} | Services`} />
        <PageContent
          className="para-primary"
          content={data.global.frontmatter.offeringText}
        />
        <div className="mx-auto text-center pb-4">
          <Link to="/contact">
            <button className="rectButton">Talk to us</button>
          </Link>
        </div>
        <section name="services" className="tracking-normal leading-loose">
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
              <div className="two-column pb-4">
                <PageContent
                  className="primary text-lg tracking-normal leading-loose"
                  content={post.html}
                />
              </div>
              <hr className="line w-full" />
            </div>
          ))}
        </section>
        <SEO
          postPath="/offerings"
          postNode={{
            frontmatter: {
              title: data.global.frontmatter.siteTitle + ' | ' + 'Services',
              excerpt: data.global.frontmatter.offeringText,
              image: '',
            },
          }}
          postSEO
        />
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
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
