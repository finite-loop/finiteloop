import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.css'
import StudioHeader from './headerStudio'
import StudioFooter from './footerStudio'

const ProductLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ProductSettingsQuery {
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
      <div className="relative flex flex-col min-h-screen">
        <Helmet title={data.global.frontmatter.siteTitle} />
        <StudioHeader title={data.global.frontmatter.logoTitle} social={data.global.frontmatter.socialMediaCard} links={data.links.frontmatter.headerlinks} />
        <div className="max-w-full mb-auto">{children}</div>
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

ProductLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProductLayout
