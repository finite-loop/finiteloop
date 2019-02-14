import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const WayPageTemplate = ({
  props,
  content,
  contentComponent,
  wayData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          wayData.frontmatter.title
        }
      />
      <PageContent
        className="para-primary text-center sm:px-6 md:px-12 lg:px-24 pt-12 pb-2 sm:text-xl md:text-3xl"
        content={wayData.frontmatter.header}
      />
      <PageContent
        className="text-justify leading-normal tracking-wide sm:text-lg lg:px-12 sm:px-8 pt-4 two-column"
        content={content}
      />
      <PageContent
        className="para-primary text-justify pb-4 sm:px-6 md:px-12 lg:px-24 pt-2 sm:text-xl md:text-2xl"
        content={wayData.frontmatter.footer}
      />
      <div className="mx-auto text-center pb-4">
        <Link to="/contact">
          <button className="rectButton">Talk to us</button>
        </Link>
      </div>
      <SEO postPath={wayData.frontmatter.path} postNode={wayData} postSEO />
    </Layout>
  )
}

const WayPageTemplateWrapper = props => {
  const { edges: way } = props.data.way
  return (
    <div>
      {way.map(({ node: wayData }) => (
        <WayPageTemplate
          key={wayData.frontmatter.title}
          title={wayData.frontmatter.title}
          props={props}
          wayData={wayData}
          content={wayData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

WayPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  wayData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

WayPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default WayPageTemplateWrapper

export const WayPageQuery = graphql`
  query WayPage {
    way: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "way" } } }
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
