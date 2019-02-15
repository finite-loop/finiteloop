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
        <div className="flex sm:flex-wrap lg:flex-no-wrap justify-center m-2">
          <img
            className="sm:h-64 lg:h-full rounded m-2"
            src={wayData.frontmatter.main.image}
            alt="Main Image"
          />
          <PageContent
            className="mx-2 leading-normal tracking-wide sm:text-lg text-xl"
            content={wayData.frontmatter.main.desc.childMarkdownRemark.html}
          />
        </div>
        {wayData.frontmatter.sections.map(items => (
          <div key={items.title} className="flex justify-center py-2 flex-wrap">
            <h2 className="text-left p-2 text-xl bg-primary-alternate w-full">
              {items.title}
            </h2>
            {items.children.map(item => (
              <div
                key={item.title}
                className="flex sm:flex-wrap md:flex-no-wrap max-w-xl my-2 text-center content-center justify-center"
              >
                <img
                  className="rounded h-48"
                  src={item.desc.childMarkdownRemark.frontmatter.image}
                  alt={item.title}
                />

                <PageContent
                  className="mx-4 text-justify leading-normal tracking-wide"
                  content={item.desc.childMarkdownRemark.html}
                />
              </div>
            ))}
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
