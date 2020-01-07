import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.css'
import Header from './header'
import Footer from './footer'
import Img from 'gatsby-image'
import Work from '../components/work'

const HomeLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeSettingsQuery {
        global: markdownRemark(
          frontmatter: { templateKey: { eq: "global-settings" } }
        ) {
          frontmatter {
            logo {
              childImageSharp {
                fluid {
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
        links: markdownRemark(
          frontmatter: { templateKey: { eq: "nav-links" } }
        ) {
          frontmatter {
            headerlinks {
              item {
                title
                url
                newwindow
              }
            }
            footerlinks {
              item {
                title
                url
                newwindow
              }
            }
          }
        }
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
      }
    `}
    render={data => (
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: 'url(/img/finiteloop_bg_home.png)',
          backgroundRepeat: 'round',
        }}
      >
        <Helmet title={data.global.frontmatter.siteTitle} />
        <Header
          title={data.global.frontmatter.logoTitle}
          social={data.global.frontmatter.socialMediaCard}
          links={data.links.frontmatter.headerlinks}
        />
        {/* <div className="w-full py-2 sm:pl-2 md:pl-10 lg:pl-34 sm:text-center md:text-left">
          <span className="text-fl-primary-alternate text-md no-underline ">
            {data.global.frontmatter.trademark}
          </span>
        </div> */}
        <div className="lg:mt-32 mx-auto">{children}</div>
        <hr
          className="sm:mx-4 lg:mx-32 my-20"
          style={{ height: '0.1rem' }}
          color="white"
        />
        <Work workData={data} />
        <Footer
          url={data.global.frontmatter.siteUrl}
          title={data.global.frontmatter.siteTitle}
          hashTag={data.global.frontmatter.socialMediaCard.hashTag}
          social={data.global.frontmatter.socialMediaCard}
          links={data.links.frontmatter.footerlinks}
          trademark={data.global.frontmatter.trademark}
        />
      </div>
    )}
  />
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
