import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/index.css'
import SEO from '../components/seo'
import Offerrings from '../components/offerings'
import ServicesCarousel from '../components/carousel'
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section" name="initial">
          <h1 className="heroText">
            We are a boutique consulting firm focusing on experience design and
            highly scalable technical architecture
          </h1>
          <p className="animate-text anim-typewriter">WE HELP YOU SCALE...</p>
          <hr className="line" />
        </section>

        <Offerrings offeringsData={this.props} />
        <div className="mx-auto text-center pb-4">
          <Link to="/contact">
            <button className="projectButton">Start a Project !</button>
          </Link>
        </div>
        <ServicesCarousel data={this.props} />
        <SEO postPath="/" postNode={this.props} postSEO={false} />
      </Layout>
    )
  }
}

IndexPage.propTypes = {}

export default IndexPage

export const teamsPageQuery = graphql`
  query Home {
    Offerings: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "offering" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 80)
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
  }
`
