import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const ProductsPageTemplate = ({
  props,
  content,
  contentComponent,
  productsData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          productsData.frontmatter.title
        }
      />
      <PageContent
        className="para-primary"
        content={productsData.frontmatter.header}
      />
      <PageContent
        className="text-left leading-normal tracking-normal sm:text-lg lg:px-12 sm:px-8 pt-4 two-column"
        content={content}
      />
      <PageContent
        className="para-primary"
        content={productsData.frontmatter.footer}
      />
      <div className="mx-auto text-center pb-4">
        <Link to="/contact">
          <button className="rectButton">Talk to us</button>
        </Link>
      </div>
      <SEO
        postPath={productsData.frontmatter.path}
        postNode={productsData}
        postSEO
      />
    </Layout>
  )
}

const ProductsPageTemplateWrapper = props => {
  const { edges: products } = props.data.products
  return (
    <div>
      {products.map(({ node: productsData }) => (
        <productsPageTemplate
          key={productsData.frontmatter.title}
          title={productsData.frontmatter.title}
          props={props}
          productsData={productsData}
          content={productsData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

ProductsPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  productsData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

ProductsPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default ProductsPageTemplateWrapper

export const productsPageQuery = graphql`
  query productsPage {
    products: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "products" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            header
            footer
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
