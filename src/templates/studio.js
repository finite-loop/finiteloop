import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Content, { HTMLContent } from '../components/content'
import Header from '../components/header'
import Footer from '../components/footer'

export const StudioPageTemplate = ({
  props,
  content,
  contentComponent,
  studioData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          studioData.frontmatter.title
        }
      />
      {/* <Header
        id="header"
        title={props.data.global.frontmatter.logoTitle}
        social={props.data.global.frontmatter.socialMediaCard}
        links={props.data.links.frontmatter.headerlinks}
      /> */}
      {/* <Footer
        id="footer"
        url={props.data.global.frontmatter.siteUrl}
        title={props.data.global.frontmatter.siteTitle}
        hashTag={props.data.global.frontmatter.socialMediaCard.hashTag}
        social={props.data.global.frontmatter.socialMediaCard}
        links={props.data.links.frontmatter.footerlinks}
        trademark={props.data.global.frontmatter.trademark}
      /> */}
      <ReactFullpage
        licenseKey={process.env.GATSBY_FULLPAGE_LICENSE_KEY}
        anchors={['intro', 'teams']}
        menu="#menu"
        scrollingSpeed={1000}
        navigation
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage">
              <div
                className="section p-6"
                style={{ backgroundColor: '#bdd6d7' }}
                data-anchor="intro"
              >
                <h1>
                  Finiteloop is an experience-design and technical architecture
                  firm. It creates products out of your ideas. Cares for a long
                  term relationship with your business. Business-focused
                  innovation and scalability. Indic ethos.
                </h1>
              </div>
              <div
                className="section p-6"
                style={{ backgroundColor: '#bdd6d7' }}
                data-anchor="teams"
              >
                <h1>
                  Finiteloop is an experience-design and technical architecture
                  firm. It creates products out of your ideas. Cares for a long
                  term relationship with your business. Business-focused
                  innovation and scalability. Indic ethos.
                </h1>
              </div>
            </div>
          )
        }}
      />

      <SEO
        postPath={studioData.frontmatter.path}
        postNode={studioData}
        postSEO
      />
    </div>
  )
}

const StudioPageTemplateWrapper = props => {
  const { edges: Studio } = props.data.Studio
  return (
    <div>
      {Studio.map(({ node: studioData }) => (
        <StudioPageTemplate
          key={studioData.frontmatter.title}
          title={studioData.frontmatter.title}
          props={props}
          studioData={studioData}
          content={studioData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

StudioPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  studioData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

StudioPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default StudioPageTemplateWrapper

export const StudioPageQuery = graphql`
  query StudioPage {
    Studio: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "studio" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            header
            footer
          }
        }
      }
    }
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
`
