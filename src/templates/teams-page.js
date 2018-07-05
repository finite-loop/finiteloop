import React from 'react'
import propTypes from 'prop-types'
import { graphql } from 'gatsby'
import Teams from '../components/teams'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const TeamsPageTemplate = ({
  props,
  content,
  contentComponent,
  teamData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <PageContent className="para-secondary p-12" content={content} />
      <Teams teamsData={props} />
      <SEO postPath={teamData.frontmatter.path} postNode={teamData} postSEO />
    </Layout>
  )
}

const TeamsPageTemplateWrapper = props => {
  const { edges: aboutus } = props.data.Teams
  return (
    <div>
      {aboutus.map(({ node: aboutusData }) => (
        <TeamsPageTemplate
          key={aboutusData.frontmatter.title}
          title={aboutusData.frontmatter.title}
          teamTitle={aboutusData.frontmatter.teamTitle}
          teamDescription={aboutusData.frontmatter.teamDescription}
          teams={aboutusData.frontmatter.team}
          props={props}
          teamData={aboutusData}
          content={aboutusData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

TeamsPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  teamData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

TeamsPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default TeamsPageTemplateWrapper

export const teamsPageQuery = graphql`
  query TeamsPage {
    Teams: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "teams-page" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            image
            teamTitle
            teamDescription
            team {
              person {
                name
                title
                avatar
                quote
                background
                fbsiteurl
                twtrsiteurl
                lnkdnsiteurl
                githubsiteurl
              }
            }
          }
        }
      }
    }
  }
`
