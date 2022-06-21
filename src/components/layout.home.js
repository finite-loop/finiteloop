import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.css'
import Header from './header'
import Footer from './footer'

const HomeLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeSettingsQuery {
        global: markdownRemark(frontmatter: { templateKey: { eq: "global-settings" } }) {
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
        links: markdownRemark(frontmatter: { templateKey: { eq: "nav-links" } }) {
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
      }
    `}
    render={(data) => (
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: 'url(/img/finiteloop_bg_home.png)',
          backgroundRepeat: 'round',
        }}
      >
        <Helmet title={data.global.frontmatter.siteTitle} />
        <Header title={data.global.frontmatter.logoTitle} social={data.global.frontmatter.socialMediaCard} links={data.links.frontmatter.headerlinks} />
        <div className="sm:mt-12 lg:mt-24 mx-auto">{children}</div>
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
