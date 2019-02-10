import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'
import '../styles/index.css'

export const PrivacyPageTemplate = ({
  props,
  content,
  contentComponent,
  privacyData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          privacyData.frontmatter.title
        }
      />
      <PageContent
        className="para-primary text-center sm:px-6 md:px-12 lg:px-24 pt-12 pb-2 sm:text-xl md:text-3xl"
        content={privacyData.frontmatter.header}
      />
      <PageContent
        className="text-justify leading-normal tracking-wide sm:text-lg lg:px-12 sm:px-8 pt-4 offerings"
        content={content}
      />
      <PageContent
        className="para-primary text-justify pb-4 sm:px-6 md:px-12 lg:px-24 pt-2 sm:text-lg md:text-xl"
        content={privacyData.frontmatter.footer}
      />
      <div className="mx-auto text-center pb-4">
        <Link to="/contact">
          <button className="rectButton">Talk to us</button>
        </Link>
      </div>
      <SEO
        postPath={privacyData.frontmatter.path}
        postNode={privacyData}
        postSEO
      />
    </Layout>
  )
}

const PrivacyPageTemplateWrapper = props => {
  const { edges: aboutus } = props.data.Privacy
  return (
    <div>
      {aboutus.map(({ node: aboutusData }) => (
        <PrivacyPageTemplate
          key={aboutusData.frontmatter.title}
          title={aboutusData.frontmatter.title}
          props={props}
          privacyData={aboutusData}
          content={aboutusData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

PrivacyPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  privacyData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

PrivacyPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default PrivacyPageTemplateWrapper

export const privacyPageQuery = graphql`
  query PrivacyPage {
    Privacy: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "privacy-policy" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            image
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
