import React from 'react'
import propTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const WayPageTemplate = ({ props, contentComponent, wayData }) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet title={props.data.global.frontmatter.siteTitle + ' | ' + wayData.frontmatter.title} />
      <PageContent className="para-primary" content={wayData.frontmatter.header} />
      <section name="The Way" className="sm:px-2 md:px-4 lg:px-10 xl:px-12 text-white">
        <div className="flex sm:flex-wrap lg:flex-no-wrap justify-start font-semibold mb-4">
          {/* <Img
            className="sm:w-full sm:h-full lg:w-3/5 rounded-lg"
            fluid={wayData.frontmatter.main.image.childImageSharp.fluid}
            alt="Main Image"
          /> */}
          <PageContent
            className="leading-normal tracking-normal sm:text-lg md:text-xl mx-auto"
            content={wayData.frontmatter.main.desc.childMarkdownRemark.html}
          />
        </div>
        {wayData.frontmatter.sections.map((items) => (
          <div className="pb-6" key={items.title}>
            <h2 className="text-left text-3xl w-full">{items.title}</h2>
            <hr className="mb-6" style={{ borderTop: '0.05rem solid white' }} color="white" />
            <div className="flex sm:flex-wrap md:flex-no-wrap justify-start">
              {items.children.map((item) => (
                <React.Fragment key={item.title}>
                  {Object.keys(items.children).length === 1 && (
                    <div className="flex sm:flex-wrap md:flex-no-wrap pb-2 px-2">
                      <div className="flex-none w-64 sm:max-w-full md:max-w-xs lg:max-w-sm">
                        <Img
                          className="rounded"
                          style={{ width: '14rem' }}
                          fluid={item.desc.childMarkdownRemark.frontmatter.image.childImageSharp.fluid}
                          alt={item.title}
                        />
                      </div>
                      <PageContent
                        className="lg:ml-10 mt-10 flex-grow sm:text-lg lg:text-xl leading-normal tracking-normal"
                        content={item.desc.childMarkdownRemark.html}
                      />
                    </div>
                  )}
                  {Object.keys(items.children).length > 1 && (
                    <div className="flex-col max-w-sm pb-2 px-4">
                      <Img
                        className="rounded"
                        style={{ width: '14rem' }}
                        fluid={item.desc.childMarkdownRemark.frontmatter.image.childImageSharp.fluid}
                        alt={item.title}
                      />
                      <PageContent className="sm:text-lg lg:text-lg mt-6 leading-normal tracking-normal" content={item.desc.childMarkdownRemark.html} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        {wayData.frontmatter.footer && <PageContent className="para-primary" content={wayData.frontmatter.footer} />}
      </section>
      <SEO postPath={wayData.frontmatter.path} postNode={wayData} postSEO />
    </Layout>
  )
}

const WayPageTemplateWrapper = (props) => {
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
    way: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "way" } } }) {
      edges {
        node {
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
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            sections {
              title
              children {
                desc {
                  childMarkdownRemark {
                    html
                    frontmatter {
                      title
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
