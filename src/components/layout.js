import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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
      <div>
        <Helmet title={data.global.frontmatter.siteTitle} />
        <Header
          title={data.global.frontmatter.logoTitle}
          social={data.global.frontmatter.socialMediaCard}
          links={data.links.frontmatter.headerlinks}
        />
        <div className="mx-auto">{children}</div>
        <Footer
          url={data.global.frontmatter.siteUrl}
          title={data.global.frontmatter.siteTitle}
          hashTag={data.global.frontmatter.socialMediaCard.hashTag}
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
