import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
class IndexPage extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <div
          style={{
            background: 'linear-gradient(-180deg, #FAFAFA 0%, #F1F1F1 100%)',
          }}
        >
          <section name="initial">
            <div component="h1">
              We are a boutique consulting firm focusing on experience design
              and highly scalable technical architecture
            </div>
            <p className="line-1 anim-typewriter">WE HELP YOU SCALE...</p>
          </section>
        </div>
        <div style={{ background: 'white' }}>
          <section name="more">
            <div component="span">
              More
              <br />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {}

export default IndexPage

export const teamsPageQuery = graphql`
  query Teams {
    Teams: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "teams-page" } } }
    ) {
      edges {
        node {
          html
          id
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
    Offerings: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "offering" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            order
            path
            title
            image
            templateKey
            align
          }
        }
      }
    }
    Casestudies: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "case-study" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            path
            title
            image
            templateKey
            homepage
          }
        }
      }
    }
  }
`
