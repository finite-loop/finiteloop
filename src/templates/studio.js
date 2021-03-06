import React from 'react'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Content, { HTMLContent } from '../components/content'
import StudioLayout from '../components/layout.studio'

export const StudioPageTemplate = ({ props, content, contentComponent, studioData }) => {
  const PageContent = contentComponent || Content
  return (
    <StudioLayout>
      <Helmet title={props.data.global.frontmatter.siteTitle + ' | ' + studioData.frontmatter.title} />
      <div
        className="flex flex-wrap justify-evenly items-center md:px-10 lg:px-24 xl:px-0 xl:py-32"
        style={{
          backgroundColor: 'rgba(247, 222, 215, 0.6)',
        }}
      >
        <div className="flex">
          <Img className="xl:w-64 md:w-48 sm:w-32" fluid={studioData.frontmatter.main.image.childImageSharp.fluid} />
        </div>
        <div className="sm:m-6 flex-col max-w-lg leading-relaxed">
          <PageContent
            className="flex-col max-w-lg sm:text-sm xl:text-base leading-relaxed"
            content={studioData.frontmatter.main.desc.childMarkdownRemark.html}
          />
        </div>
      </div>
      {studioData.frontmatter.projects.map((project) => (
        <React.Fragment key={project.title}>
          <section className="sm:justify-center md:justify-center" name={project.title} style={{ backgroundColor: `${project.bgColor}` }}>
            <div className="flex flex-col sm:mx-6 md:mx-24 xl:mx-32 md:max-w-3xl xl:max-w-5xl sm:max-w-sm py-4">
              <div className="flex my-4">
                <span className="border-studio border-solid border-b-4 w-32"></span>
                <span className="studio-color sm:text-4xl xl:text-6xl font-bold font-neptune leading-none text-center whitespace-no-wrap uppercase">
                  &nbsp;{project.title}&nbsp;
                </span>
                <span className="border-studio border-solid border-b-4 w-full"></span>
              </div>
              <PageContent className="flex-col max-w-xl sm:text-sm xl:text-base" content={project.details.childMarkdownRemark.html} />
              <div className="flex flex-wrap sm:justify-center lg:justify-center md:justify-center xl:justify-start items-start">
                {project.details.childMarkdownRemark.frontmatter.showcase.map((image) => (
                  <div key={image.image.childImageSharp.fluid.originalName} className="studioImages">
                    <figcaption className="text-center font-sans font-bold mb-1">{image.title || ''}</figcaption>
                    <Img className="xl:max-w-md sm:max-w-sm w-screen mb-2 mr-2" fluid={image.image.childImageSharp.fluid} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </React.Fragment>
      ))}
      <SEO postPath={studioData.frontmatter.path} postNode={studioData} postSEO />
    </StudioLayout>
  )
}

const StudioPageTemplateWrapper = (props) => {
  const { edges: Studio } = props.data.Studio
  return (
    <div>
      {Studio.map(({ node: studioData }) => (
        <StudioPageTemplate
          key={studioData.frontmatter.title}
          title={studioData.frontmatter.title}
          props={props}
          studioData={studioData}
          content={studioData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

export default StudioPageTemplateWrapper

export const StudioPageQuery = graphql`
  query StudioPage {
    Studio: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "studio" } } }) {
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
                    originalName
                  }
                }
              }
            }
            projects {
              title
              bgColor
              details {
                childMarkdownRemark {
                  html
                  frontmatter {
                    title
                    image {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid
                          originalName
                        }
                      }
                    }
                    showcase {
                      image {
                        childImageSharp {
                          fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                            originalName
                          }
                        }
                      }
                      title
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
        logo {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logoTitle
        trademark
        templateKey
        siteUrl
        siteTitle
        siteDescription
        socialMediaCard {
          hashTag
          twtrUrl
          lnkdnUrl
          githubUrl
        }
      }
    }
  }
`
