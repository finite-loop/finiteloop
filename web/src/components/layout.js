import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.css"
import Header from "./header"
import Footer from "./footer"
import bg from "../images/finiteloop_bg_home.png"

const Layout = ({ bgImg, container, children }) => {
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
        backgroundImage: bgImg ? `url(${bg})` : null,
      }}
    >
      <Helmet title={settings.siteTitle} />
      <Header id="header" logo={settings.logo} />
<<<<<<< HEAD
      <div className="sm:max-w-full md:max-w-3/4 my-8 mx-auto mb-auto">
=======
      <div className={`${container ? '' : `sm:max-w-4/5 md:max-w-3/4 mx-auto`} my-8 mb-auto`}>
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
        {children}
      </div>
      <Footer
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
        opacity="opacity-50"
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
