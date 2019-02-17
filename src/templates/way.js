import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const WayPageTemplate = ({ props, contentComponent, wayData }) => {
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
        className="para-primary"
        content={wayData.frontmatter.header}
      />
      <section name="The Way" className="sm:px-2 md:px-4 lg:px-10 xl:px-12">
        <div className="flex sm:flex-wrap md:flex-no-wrap justify-center mb-4">
          <img
            className="sm:w-full sm:h-full md:w-auto md:h-auto rounded-lg"
            src={wayData.frontmatter.main.image}
            alt="Main Image"
          />
          <PageContent
            className="mx-4 leading-normal tracking-wide sm:text-lg md:text-xl"
            content={wayData.frontmatter.main.desc.childMarkdownRemark.html}
          />
        </div>
        {wayData.frontmatter.sections.map(items => (
          <div key={items.title}>
            <h2 className="text-left p-4 text-2xl bg-secondary-alternate w-full">
              {items.title}
            </h2>
            <div className="flex sm:flex-wrap md:flex-no-wrap justify-around">
              {items.children.map(item => (
                <React.Fragment key={item.title}>
                  {Object.keys(items.children).length === 1 && (
                    <div className="flex sm:flex-wrap md:flex-no-wrap max-w-full w-full pb-2 px-2">
                      <div className="flex-none sm:max-w-full md:max-w-xs lg:max-w-sm">
                        <img
                          className="w-full rounded"
                          src={item.desc.childMarkdownRemark.frontmatter.image}
                          alt={item.title}
                        />
                      </div>
                      <PageContent
                        className="ml-4 flex-grow sm:text-lg lg:text-xl leading-normal tracking-wide"
                        content={item.desc.childMarkdownRemark.html}
                      />
                    </div>
                  )}
                  {Object.keys(items.children).length > 1 && (
                    <div className="flex-col max-w-md pb-2 px-2">
                      <img
                        className="max-w-full rounded"
                        src={item.desc.childMarkdownRemark.frontmatter.image}
                        alt={item.title}
                      />
                      <PageContent
                        className="sm:text-lg lg:text-xl leading-normal tracking-wide"
                        content={item.desc.childMarkdownRemark.html}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        {wayData.frontmatter.footer && (
          <PageContent
            className="para-primary"
            content={wayData.frontmatter.footer}
          />
        )}
      </section>
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
            main {
              desc {
                childMarkdownRemark {
                  html
                  frontmatter {
                    title
                  }
                }
              }
              image
            }
            sections {
              title
              children {
                desc {
                  childMarkdownRemark {
                    html
                    frontmatter {
                      title
                      image
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
