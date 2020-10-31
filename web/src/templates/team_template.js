import React from "react"
import propTypes from "prop-types"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"

export const TeamsPageTemplate = ({
  title,
  teamDescription,
  teamData,
  siteTitle,
  path,
}) => {
  teamData.nodes.sort((a, b) => (a.name > b.name ? 1 : -1))
  return (
    <Layout>
      <Helmet title={siteTitle + " | " + title} />
      <div className="para-primary">
        <div className="mx-auto">
          <p className="text-md text-center ">{teamDescription}</p>
        </div>
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-3 xl:grid-cols-4  justify-items-center ">
            {teamData.nodes.map(member => (
              <div
                className="p-5 a flex flex-col justify-items-center items-center"
                key={member.name}
              >
                <Img
                  fluid={member.image.asset.fluid}
                  className="h-24 w-24 md:h-32 md:w-32 justify-center lg:h-48 lg:w-48 mr-2 rounded-full border-solid border-8"
                  style={{ borderColor: "rgb(247, 222, 215)" }}
                />
                <p
                  className="text-2xl py-0 font-semibold"
                  style={{ marginBottom: 0 }}
                >
                  {member.name}
                </p>
                <p
                  className="text-base font-light my-0"
                  style={{ marginTop: 0 }}
                >
                  {member.role}
                </p>
                <p className="text-base font-light" style={{ marginTop: 0 }}>
                  <a href={member.facebook} className="text-white">
                    <IoLogoFacebook className="mx-2" />
                  </a>
                  <a href={member.linkedin} className="text-white">
                    <IoLogoLinkedin className="mx-2" />
                  </a>
                  <a href={member.twitter} className="text-white">
                    <IoLogoTwitter className="mx-2" />
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SEO postPath={path} postNode={teamData} postSEO />
    </Layout>
  )
}

const TeamsPageTemplateWrapper = props => {
  console.log(props)
  const title = props.data.pagecontent.nodes[0].title
  const pageContent = props.data.pagecontent.nodes[0].content
  console.log(title, pageContent)
  const teamData = props.data.team
  const siteTitle = props.data.sanitySiteSettings.siteTitle
  const path = props.path
  return (
    <div>
      <TeamsPageTemplate
        key={title}
        title={title}
        teamTitle={title}
        teamDescription={pageContent}
        teamData={teamData}
        siteTitle={siteTitle}
        path={path}
      />
    </div>
  )
}

TeamsPageTemplate.propTypes = {
  teamData: propTypes.object.isRequired,
  teamDescription: propTypes.string.isRequired,
}

TeamsPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default TeamsPageTemplateWrapper

export const query = graphql`
  query getTeam {
    team: allSanityTeam {
      nodes {
        slug {
          current
        }
        role
        name
        image {
          asset {
            fixed(width: 125, height: 125) {
              ...GatsbySanityImageFixed
            }
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        twitter
        linkedin
        facebook
      }
    }
    pagecontent: allSanityTeamPageContent {
      nodes {
        title
        content
      }
    }
    sanitySiteSettings {
      siteTitle
    }
  }
`
