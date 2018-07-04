import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/global.sass'
import SEO from '../components/seo'
import Offerrings from '../components/offerings'
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            background: 'linear-gradient(-180deg, #FAFAFA 0%, #F1F1F1 100%)',
          }}
        >
          <section className="section" name="initial">
            <h1 className="lg:p-30 md:p-24 sm:p-10 text-primary lg:text-5xl md:text-3xl sm:text-xl font-medium tracking-wide leading-normal">
              We are a boutique consulting firm focusing on experience design
              and highly scalable technical architecture
            </h1>
            <p className="animate-text anim-typewriter">WE HELP YOU SCALE...</p>
          </section>
        </div>
        <div style={{ background: 'white' }}>
          <section name="more">
            <div className="primary text-center uppercase text-lg">
              More
              <br />
              <i className="material-icons -mt-3 text-4xl">
                keyboard_arrow_down
              </i>
            </div>
          </section>
        </div>
        <Offerrings offeringsData={this.props} />
        <SEO postEdges={this.props} />
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
