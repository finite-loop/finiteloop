import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.css'
import Header from './header'
import Footer from './footer'
import StudioHeader from './headerStudio'
import StudioFooter from './footerStudio'

const FullLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SettingsQuery1 {
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
        style={
          {
            // backgroundColor: 'rgba(247, 222, 215, 0.6)',
          }
        }
      >
        <Helmet title={data.global.frontmatter.siteTitle} />
        <StudioHeader title={data.global.frontmatter.logoTitle} social={data.global.frontmatter.socialMediaCard} links={data.links.frontmatter.headerlinks} />
        <div>{children}</div>
        <StudioFooter
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

FullLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullLayout
