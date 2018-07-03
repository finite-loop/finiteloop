import React from 'react'
import propTypes from 'prop-types'
import { graphql } from 'gatsby'

export const TeamsPageTemplate = ({
  props,
  title,
  content,
  contentComponent,
  teams,
  teamTitle,
  teamDescription,
  timer,
  teamData,
}) => {
  // const PageContent = contentComponent || Content
  return (
    <div>
      <div
        style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}
      />
    </div>
  )
}

const TeamsPageTemplateWrapper = props => {
  const { edges: aboutus } = props.data.Teams
  return (
    <div>
      {aboutus.map(({ node: aboutusData }) => (
        <TeamsPageTemplate
          key={aboutusData.frontmatter.title}
          contentComponent=""
          title={aboutusData.frontmatter.title}
          content={aboutusData.html}
          teamTitle={aboutusData.frontmatter.teamTitle}
          teamDescription={aboutusData.frontmatter.teamDescription}
          teams={aboutusData.frontmatter.team}
          props={props}
          timer={1000}
          teamData={aboutusData}
          content={aboutusData.html}
          contentComponent=""
        />
      ))}
    </div>
  )
}

TeamsPageTemplateWrapper.propTypes = {
  classes: propTypes.object.isRequired,
  theme: propTypes.object.isRequired,
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
