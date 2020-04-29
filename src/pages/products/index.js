import React from 'react'
import { Link } from 'gatsby'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/content'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

class Products extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.products
    const PageContent = HTMLContent || Content
    return (
      <Layout>
        <Helmet title={`${data.global.frontmatter.siteTitle} | Products`} />
        {/* <PageContent
          className="para-primary"
          content={data.global.frontmatter.productText}
        /> */}
        <section name="products" className="tracking-normal leading-normal">
          {posts.map(({ node: post }) => (
            <div
              key={post.frontmatter.title}
              className="sm:px-4 md:px-12 lg:px-16"
            >
              <a
                className="block relative"
                style={{ top: '-100px' }}
                id={post.frontmatter.path}
              />
              <h2 className="text-4xl pb-4">
                <span id={post.frontmatter.path}>{post.frontmatter.title}</span>
              </h2>
              <div className="pb-4">
                <PageContent
                  className="primary text-lg tracking-normal leading-normal"
                  content={post.html}
                />
              </div>
              <hr className="line w-full" />
            </div>
          ))}
        </section>
        <div className="mx-auto text-center pb-4">
          <Link to="/contact">
            <button className="rectButton">Request Product Demo</button>
          </Link>
        </div>
        <SEO
          postPath="/products"
          postNode={{
            frontmatter: {
              title: data.global.frontmatter.siteTitle + ' | ' + 'Products',
              excerpt: data.global.frontmatter.productText,
              image: '',
            },
          }}
          postSEO
        />
      </Layout>
    )
  }
}

Products.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Products

export const ProductsQuery = graphql`
  query Products {
    products: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "product" } } }
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
      }
    }
  }
`
