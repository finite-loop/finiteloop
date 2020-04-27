import React from 'react'
import propTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import { graphql } from 'gatsby'
import Work from '../components/work'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const WorkPageTemplate = ({
  props,
  content,
  contentComponent,
  workData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          workData.frontmatter.title
        }
      />
      <PageContent className="para-primary" content={content} />
      <Work workData={props.data} />
      <SEO postPath={workData.frontmatter.path} postNode={workData} postSEO />
    </Layout>
  )
}

const WorkPageTemplateWrapper = props => {
  const { edges: aboutus } = props.data.Work
  return (
    <div>
      {aboutus.map(({ node: aboutusData }) => (
        <WorkPageTemplate
          key={aboutusData.frontmatter.title}
          title={aboutusData.frontmatter.title}
          workTitle={aboutusData.frontmatter.workTitle}
          workDescription={aboutusData.frontmatter.workDescription}
          work={aboutusData.frontmatter.work}
          props={props}
          workData={aboutusData}
          content={aboutusData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

WorkPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  workData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

WorkPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default WorkPageTemplateWrapper

export const WorkPageQuery = graphql`
  query WorkPage {
    Work: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "work-page" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            workTitle
            workDescription
            work {
              project {
                name
                summary
                image {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
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
