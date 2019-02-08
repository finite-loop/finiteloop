import React from 'react'
import { graphql, Link } from 'gatsby'
import TextLoop from 'react-text-loop'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import '../styles/index.css'
import SEO from '../components/seo'
import Offerrings from '../components/offerings'
import ServicesCarousel from '../components/carousel'
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section" name="introduction">
          <h1 className="heroText">
            We are a boutique consulting firm focusing on experience design and
            highly scalable technical architecture
          </h1>
          <h2>
            Our expertise
            <br />
            <TextLoop className="text-secondary text-xl leading-normal">
              <span>Technology Advisory</span>
              <span>Organisation Transformation</span>
              <span>Blockchain</span>
              <span>Frontend Architecture</span>
              <span>Experiance Design</span>
            </TextLoop>{' '}
          </h2>
          <hr className="line" />
        </section>

        <Offerrings offeringsData={this.props.data.Offerings.edges} />
        <div className="mx-auto text-center pb-4">
          <Link to="/contact">
            <button className="projectButton">Start a Project !</button>
          </Link>
        </div>
        <ServicesCarousel carouselData={this.props.data.Carousel.frontmatter} />
        <SEO postPath="/" postNode={this.props} postSEO={false} />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

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
    Carousel: markdownRemark(
      frontmatter: { templateKey: { eq: "service-carousel" } }
    ) {
      frontmatter {
        carouselList {
          item {
            bgImage
            imageText
          }
        }
      }
    }
  }
`
