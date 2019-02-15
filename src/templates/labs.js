import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const LabsPageTemplate = ({
  props,
  content,
  contentComponent,
  labsData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          labsData.frontmatter.title
        }
      />
      <PageContent
        className="para-primary"
        content={labsData.frontmatter.header}
      />
      <PageContent
        className="text-justify leading-normal tracking-wide sm:text-lg lg:px-12 sm:px-8 py-4"
        content={content}
      />
      {labsData.frontmatter.footer && (
        <PageContent
          className="para-primary"
          content={labsData.frontmatter.footer}
        />
      )}
      <SEO postPath={labsData.frontmatter.path} postNode={labsData} postSEO />
    </Layout>
  )
}

const LabsPageTemplateWrapper = props => {
  const { edges: labs } = props.data.labs
  return (
    <div>
      {labs.map(({ node: labsData }) => (
        <LabsPageTemplate
          key={labsData.frontmatter.title}
          title={labsData.frontmatter.title}
          props={props}
          labsData={labsData}
          content={labsData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

LabsPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  labsData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

LabsPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default LabsPageTemplateWrapper

export const LabsPageQuery = graphql`
  query LabsPage {
    labs: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "labs" } } }
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
