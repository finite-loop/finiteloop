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
          <PageContent className="flex-col max-w-lg leading-relaxed" content={studioData.frontmatter.main.desc.childMarkdownRemark.html} />
        </div>
      </div>
      <section name="ahoy">
        <div className="flex flex-col px-32 bg-white py-4">
          <div className="flex my-4">
            <span className="border-studio border-solid border-b-4 w-32"></span>
            <span className="studio-color text-6xl font-bold font-neptune leading-none">&nbsp;AHOY&nbsp;</span>
            <span className="border-studio border-solid border-b-4 w-full"></span>
          </div>
          <p className="xl:mx-32">
            We worked with one of the largest ship fleet management companies in the world to create a mobile app for seafarers. The team put together our
            varied experiences to design for an unfamiliar user group and work environment, requiring a deep immersive study into the world of shipping. The app
            is a major component of ongoing learning and completion of tasks assigned to the Seafarers.
          </p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/ahoy_1.png" alt="Ahoy App"></img>
          </div>
          <p className="xl:mx-32 font-bold mt-20">Ahoy Admin</p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/ahoy_2.png" alt="Ahoy App"></img>
          </div>
          <p className="xl:mx-32 font-bold mt-20">Service Design Map</p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/ahoy_3.png" alt="Ahoy App"></img>
          </div>
        </div>
      </section>
      <section name="signages">
        <div className="flex flex-col px-32 bg-studio-color-alternate py-20">
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
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/signages_2.png" alt="Signages"></img>
          </div>
          <p className="xl:mx-32 font-bold mt-20">Working Photos</p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/signages_3.png" alt="Signages"></img>
          </div>
        </div>
      </section>
      <section name="gangwaydesk">
        <div className="flex flex-col px-32 bg-white py-20">
          <div className="flex my-4">
            <span className="border-studio border-solid border-b-4 w-32"></span>
            <span className="studio-color text-6xl font-bold font-neptune leading-none">&nbsp;GANGWAY DESK&nbsp;</span>
            <span className="border-studio border-solid border-b-4 w-1/2"></span>
          </div>
          <p className="xl:mx-32">
            A rugged interaction desk was built for use on ships under multiple weather conditions. We used rigorous user research, interaction study and
            creative industrial design process to keep the utility of the desk in mind along with the opportunity to create a favourable brand impression.
          </p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/gangwaydesk_1.png" alt="Gangway desk"></img>
          </div>
        </div>
      </section>
      <section name="nestle">
        <div className="flex flex-col px-32 bg-studio-color-alternate py-20">
          <div className="flex my-4">
            <span className="border-studio border-solid border-b-4 w-32"></span>
            <span className="studio-color text-6xl font-bold font-neptune leading-none">&nbsp;NESTLE&nbsp;</span>
            <span className="border-studio border-solid border-b-4 w-full"></span>
          </div>
          <p className="xl:mx-32">
            We studied one of the most respected FMCG companies in India to create a new product experience for our retail services client, Ivy Mobility. We
            understood the experience gaps across the sales organization and built solutions to unlock the productivity of the ﬁeld sales teams across the
            country.
          </p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/nestle_1.png" alt="Nestle"></img>
          </div>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/nestle_2.png" alt="Nestle"></img>
          </div>
        </div>
      </section>
      <section name="talkingstreet">
        <div className="flex flex-col px-32 bg-studio-color-alternate py-20">
          <div className="flex my-4">
            <span className="border-studio border-solid border-b-4 w-32"></span>
            <span className="studio-color text-6xl font-bold font-neptune leading-none">&nbsp;TALKING STREET&nbsp;</span>
            <span className="border-studio border-solid border-b-4 w-1/2"></span>
          </div>
          <p className="xl:mx-32">
            We created a passion-ﬁlled Service Experience that seamlessly merges online and ofﬂine - between delightful User eXperience on web+mobile and a
            memorable ofﬂine service experience through paid food walks, cooking classes etc. We merged User and market research, Digital + Physical
            experiences, and Community contributor experiences to form a holistic solution.
          </p>
          <p className="xl:mx-32 font-bold mt-20">Visual Design Option</p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/talking_street_1.png" alt="Talking Street"></img>
          </div>
          <p className="xl:mx-32 font-bold mt-20">Creating responsive layouts</p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/talking_street_2.png" alt="Talking Street"></img>
          </div>
          <p className="xl:mx-32 font-bold mt-20">Working photos</p>
          <div className="xl:mx-32 max-w-sm">
            <img src="/img/talking_street_3.png" alt="Talking Street"></img>
          </div>
        </div>
      </section>
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
