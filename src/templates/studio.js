import React from 'react'
import { Helmet } from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Content, { HTMLContent } from '../components/content'
import StudioLayout from '../components/layout.studio'

export const StudioPageTemplate = ({ props, content, contentComponent, studioData }) => {
  const PageContent = contentComponent || Content
  console.log(studioData)
  return (
    <StudioLayout>
      <Helmet title={props.data.global.frontmatter.siteTitle + ' | ' + studioData.frontmatter.title} />
      {/* <ReactFullpage
        navigation
        licenseKey={process.env.GATSBY_FULLPAGE_LICENSE_KEY}
        scrollingSpeed={1000}
        sectionsColor={['rgba(247, 222, 215, 0.6)']}
        // render={(comp) => {
        //   return (
        //     <ReactFullpage.Wrapper> */}
      <div
        className="flex flex-wrap justify-evenly items-center py-32"
        style={{
          backgroundColor: 'rgba(247, 222, 215, 0.6)',
        }}
      >
        <div className="flex max-w-sm">
          <img src="/img/finiteloop-branding-06.png" alt="Finiteloop logo"></img>
        </div>
        <div className="flex-col max-w-lg leading-relaxed">
          <p>
            <b>Finiteloop Design Studio</b> builds simple, sustainable design solutions that works best for our customers. Through human centered, design
            thinking we bring clarity to complexities in business. We are a cutting edge, multidisciplinary studio specializing in converting large ideas into
            scalable products and solutions.
          </p>
          <p>
            Our principles are designed to optimize and simplify every step. The ability to empathize with our customers, to think big, and the ability to
            achieve long term goals is important for us. There is a constant movement from chaos to order, from abstraction to clarity, and we drive this change
            gracefully. We enter the market to solve design problems for our customers through detailed human centered design thinking. We co-create, teach,
            share our knowledge, and work on projects that have a high level, positive impact for our customers.
          </p>
          <p>
            Our approach is to apply human centered design to the overall customer experience and address the problem statement with empathy and analysis. We
            apply Service design practices to analyze your entire service experience. We help build innovative products through our detailed Product Design
            processes that brings positive impact to our customers.
          </p>
          <p>
            Our top - notch expertise in User Experience and User Interface has helped us build meaningful practices for our partners.In essence, we transform
            businesses through a complete user centric Experience Design platform we have developed through the years
          </p>
        </div>
      </div>
      <div className="flex flex-col px-32 bg-white py-4">
        <div className="flex my-4">
          <span className="border-studio border-solid border-b-4 w-32"></span>
          <span className="studio-color text-6xl font-bold font-neptune leading-none">&nbsp;AHOY&nbsp;</span>
          <span className="border-studio border-solid border-b-4 w-full"></span>
        </div>
        <p className="xl:mx-32">
          We worked with one of the largest ship fleet management companies in the world to create a mobile app for seafarers. The team put together our varied
          experiences to design for an unfamiliar user group and work environment, requiring a deep immersive study into the world of shipping. The app is a
          major component of ongoing learning and completion of tasks assigned to the Seafarers.
        </p>
        <div className="xl:mx-32 max-w-sm">
          <img src="/img/ahoy.png" alt="Ahoy App"></img>
        </div>
      </div>
      <div className="flex flex-col px-32 bg-studio-color-alternate py-4">
        <div className="flex my-4">
          <span className="border-studio border-solid border-b-4 w-32"></span>
          <span className="studio-color text-6xl font-bold font-neptune leading-none">&nbsp;SIGNAGES&nbsp;</span>
          <span className="border-studio border-solid border-b-4 w-full"></span>
        </div>
        <p className="xl:mx-32">
          We have rethought narratives in hazardous maritime environments and helped people-friendly redesign signages that are centered around seafarers
          instead of regulations.
        </p>
        <div className="xl:mx-32 max-w-sm">
          <img src="/img/signages_1.png" alt="Signages"></img>
        </div>
      </div>
      {/* </ReactFullpage.Wrapper>
          )
        }} 
      /> */}
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
                  }
                }
              }
            }
            projects {
              title
              details {
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
                    showcase {
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
