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
            logo
            logoTitle
            templateKey
            siteUrl
            siteTitle
            siteDescription
            socialMediaCard {
              hashTag
              twtrUrl
              lnkdnUrl
              githubUrl
              mediumUrl
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
      <div className="relative min-h-screen">
        <Helmet title={data.global.frontmatter.siteTitle} />
        <Header
          title={data.global.frontmatter.logoTitle}
          social={data.global.frontmatter.socialMediaCard}
          links={data.links.frontmatter.headerlinks}
        />
        <div className="mx-auto sm:pb-38 md:pb-32 lg:pb-32">{children}</div>
        <Footer
          url={data.global.frontmatter.siteUrl}
          title={data.global.frontmatter.siteTitle}
          hashTag={data.global.frontmatter.socialMediaCard.hashTag}
          social={data.global.frontmatter.socialMediaCard}
          links={data.links.frontmatter.footerlinks}
        />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
