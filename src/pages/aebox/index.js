import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/content'
import SEO from '../../components/seo'
import ProductLayout from '../../components/layoutProduct'

class Products extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.products
    const PageContent = HTMLContent || Content
    return (
      <ProductLayout>
        <Helmet title={`${data.global.frontmatter.siteTitle} | AEBOX | Aerosol box to protect doctors in ICUs`} />
        <section name="products" className="tracking-normal leading-normal">
          {posts.map(({ node: post }) => (
            <div key={post.frontmatter.title}>
              <div>
                <PageContent className="tracking-normal leading-normal" content={post.html} />
              </div>
              <hr className="line w-full" />
            </div>
          ))}
        </section>
        <SEO
          postPath="/aebox"
          postNode={{
            frontmatter: {
              title: data.global.frontmatter.siteTitle + ' | ' + 'AEBOX | Aerosol box to protect doctors in ICUs',
              excerpt: data.global.frontmatter.productText,
              image: '',
            },
          }}
          postSEO
        />
      </ProductLayout>
    )
  }
}

Products.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Products

export const ProductsQuery = graphql`
  query Products {
    products: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }, filter: { frontmatter: { templateKey: { eq: "aebox" } } }) {
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
    global: markdownRemark(frontmatter: { templateKey: { eq: "global-settings" } }) {
      frontmatter {
        siteTitle
      }
    }
  }
`
