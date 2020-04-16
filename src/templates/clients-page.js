import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Clients from '../components/clients'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const ClientsPageTemplate = ({
  props,
  content,
  contentComponent,
  clientsData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          clientsData.frontmatter.title
        }
      />
      <PageContent className="para-primary" content={content} />
      <Clients clientsData={props} />
      <SEO
        postPath={clientsData.frontmatter.path}
        postNode={clientsData}
        postSEO
      />
    </Layout>
  )
}

const ClientsPageTemplateWrapper = props => {
  const { edges: aboutus } = props.data.Clients
  return (
    <div>
      {aboutus.map(({ node: aboutusData }) => (
        <ClientsPageTemplate
          key={aboutusData.frontmatter.title}
          title={aboutusData.frontmatter.title}
          clientsTitle={aboutusData.frontmatter.clientsTitle}
          clientsDescription={aboutusData.frontmatter.clientsDescription}
          clients={aboutusData.frontmatter.clients}
          props={props}
          clientsData={aboutusData}
          content={aboutusData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

ClientsPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  clientsData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

ClientsPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default ClientsPageTemplateWrapper

export const ClientsPageQuery = graphql`
  query ClientsPage {
    Clients: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "clients-page" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            clientsTitle
            clientsDescription
            clients {
              client {
                name
                logo {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
      }
    }
  }
`
