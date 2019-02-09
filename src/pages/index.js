import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
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
        <Helmet
          title={
            this.props.data.global.frontmatter.siteTitle +
            ' | ' +
            this.props.data.global.frontmatter.siteLongTitle
          }
        />
        <section className="section" name="introduction">
          <h1 className="heroText">
            {this.props.data.global.frontmatter.introText}
            <TextLoop
              interval={1500}
              springConfig={{ stiffness: 150, damping: 20 }}
              className="text-secondary font-semibold"
            >
              {this.props.data.global.frontmatter.services.map(item => (
                <span key={item}>{item}</span>
              ))}
            </TextLoop>
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
