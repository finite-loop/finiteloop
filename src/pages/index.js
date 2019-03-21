import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import HomeLayout from '../components/layout.home'
import '../styles/index.css'
import SEO from '../components/seo'
import Offerrings from '../components/offerings'
import ServicesCarousel from '../components/carousel'

class IndexPage extends React.Component {
  render() {
    return (
      <HomeLayout>
        <Helmet
          title={
            this.props.data.global.frontmatter.siteTitle +
            ' | ' +
            this.props.data.global.frontmatter.siteLongTitle
          }
        />
        <section className="pb-6" name="introduction">
          <h1 className="heroText text-center">
            {this.props.data.global.frontmatter.introText}
          </h1>
          <h1 className="text-primary sm:text-2xl md:text-3xl xl:text-4xl text-center">
            {this.props.data.global.frontmatter.introText2}
          </h1>
          <hr className="line" />
        </section>

        <Offerrings offeringsData={this.props.data.Offerings.edges} />
        <div className="mx-auto text-center pb-4">
          <Link to="/contact">
            <button className="roundedButton">Start a Project !</button>
          </Link>
        </div>
        <ServicesCarousel carouselData={this.props.data.Carousel.frontmatter} />
        <SEO postPath="/" postNode={this.props} postSEO={false} />
      </HomeLayout>
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
            image {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
              publicURL
            }
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
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            imageText
            top
            left
          }
        }
      }
    }
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
        siteLongTitle
        introText
        introText2
        services
      }
    }
  }
`
