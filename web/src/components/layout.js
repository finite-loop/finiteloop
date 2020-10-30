import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { sanitySiteSettings: settings } = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        introText
        introText2
        github
        keywords
        linkedin
        logo {
          caption
          alt
          asset {
            url
          }
        }
        offeringText
        services
        siteDesc
        siteLongTitle
        siteTitle
        siteUrl
        trademark
        twitter
      }
    }
  `)

  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{
        backgroundColor: "#E05455",
        // backgroundImage: 'url(/img/team-bg.png)',
        // backgroundBlendMode: 'hard-light',
      }}
    >
      <Helmet title={settings.siteTitle} />
      <Header id="header" logo={settings.logo} />
      <div className="sm:max-w-4/5 md:max-w-3/4 my-8 mx-auto mb-auto">
        {children}
      </div>
      <Footer
        // url={data.global.frontmatter.siteUrl}
        // title={data.global.frontmatter.siteTitle}
        // hashTag={data.global.frontmatter.socialMediaCard.hashTag}
        socialUrls={{
          linked: settings.linkedin,
          twitter: settings.twitter,
          github: settings.github,
        }}
        links={[
          {
            title: "Privacy Policy",
            url: "https://finiteloop.io/privacy-policy/",
          },
        ]}
        trademark={settings.trademark}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
