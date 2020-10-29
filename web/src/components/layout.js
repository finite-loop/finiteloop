// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/use-static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={`Finiteloop`} />

//       <main>{children}</main>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.css"
// import Header from "./header"
// import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
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
      {/* <Helmet title={data.global.frontmatter.siteTitle} />
      <Header
        title={data.global.frontmatter.logoTitle}
        social={data.global.frontmatter.socialMediaCard}
        links={data.links.frontmatter.headerlinks}
      /> */}
      <div className="sm:max-w-4/5 md:max-w-3/4 my-8 mx-auto mb-auto">
        {children}
      </div>
      {/* <Footer
        url={data.global.frontmatter.siteUrl}
        title={data.global.frontmatter.siteTitle}
        hashTag={data.global.frontmatter.socialMediaCard.hashTag}
        social={data.global.frontmatter.socialMediaCard}
        links={data.links.frontmatter.footerlinks}
        trademark={data.global.frontmatter.trademark}
      /> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
