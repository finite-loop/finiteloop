import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SettingsQuery {
        global: markdownRemark(
          frontmatter: { templateKey: { eq: "global-settings" } }
        ) {
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
      }
    `}
    render={data => (
      <div
        className="relative min-h-screen"
        style={{
          backgroundColor: '#E05455',
          // backgroundImage: 'url(/img/team-bg.png)',
          // backgroundBlendMode: 'hard-light',
        }}
      >
        <Helmet title={data.global.frontmatter.siteTitle} />
        <Header
          title={data.global.frontmatter.logoTitle}
          social={data.global.frontmatter.socialMediaCard}
          links={data.links.frontmatter.headerlinks}
        />
        <div className="sm:max-w-4/5 md:max-w-3/4 my-8 py-4 mx-auto">
          {children}
        </div>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
