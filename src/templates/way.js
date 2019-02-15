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
      <section name="The Way" className="sm:px-4 md:px-8 lg:px-12 xl:px-16">
        <PageContent
          className="para-primary text-center sm:px-6 md:px-12 lg:px-24 pt-12 pb-2 sm:text-xl md:text-3xl"
          content={wayData.frontmatter.header}
        />
        <div className="flex justify-center flex-wrap m-2">
          <img className="rounded h-64" src={wayData.frontmatter.main.image} />
          <PageContent
            className="mx-4 leading-normal tracking-wide text-xl"
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
                className="flex max-w-xl my-2 text-center content-center justify-center"
              >
                <img
                  className="rounded h-48"
                  src={item.desc.childMarkdownRemark.frontmatter.image}
                />

                <PageContent
                  className="mx-4 text-justify leading-normal tracking-wide"
                  content={item.desc.childMarkdownRemark.html}
                />
              </div>
            ))}
          </div>
        ))}
        <PageContent
          className="para-primary text-justify pb-4 sm:px-6 md:px-12 lg:px-24 pt-2 sm:text-xl md:text-2xl"
          content={wayData.frontmatter.footer}
        />
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
