import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const CareersPageTemplate = ({
  props,
  content,
  contentComponent,
  careersData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          careersData.frontmatter.title
        }
      />
      <PageContent
        className="para-primary"
        content={careersData.frontmatter.header}
      />
      <PageContent
        className="text-left leading-normal tracking-normal sm:text-lg lg:px-12 sm:px-8 pt-4 two-column"
        content={content}
      />
      <PageContent
        className="para-primary"
        content={careersData.frontmatter.footer}
      />
      <div className="mx-auto text-center pb-4">
        <Link to="/contact">
          <button className="rectButton">Talk to us</button>
        </Link>
      </div>
      <SEO
        postPath={careersData.frontmatter.path}
        postNode={careersData}
        postSEO
      />
    </Layout>
  )
}

const CareersPageTemplateWrapper = props => {
  const { edges: careers } = props.data.Careers
  return (
    <div>
      {careers.map(({ node: careersData }) => (
        <CareersPageTemplate
          key={careersData.frontmatter.title}
          title={careersData.frontmatter.title}
          props={props}
          careersData={careersData}
          content={careersData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

CareersPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  careersData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

CareersPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default CareersPageTemplateWrapper

export const careersPageQuery = graphql`
  query CareersPage {
    Careers: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "careers" } } }
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
