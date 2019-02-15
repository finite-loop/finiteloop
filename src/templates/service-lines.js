import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const ServiceLines = ({ pageContext, data }) => {
  const { service } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Case Stud${totalCount === 1 ? 'y' : 'ies'} `

  return (
    <Layout>
      <Helmet
        title={`${data.global.frontmatter.siteTitle} | Case Study | ${service}`}
      />{' '}
      <h1 className="sm:px-6 md:px-12 lg:px-24 py-2 leading-normal text-3xl">
        <span className="text-secondary">{service}</span>&nbsp;
        <span>{tagHeader}</span>
      </h1>
      <div className="mx-auto text-center pb-4">
        <Link to="/case-studies">
          <button role="button" className="rectButton">
            All Case Studies
          </button>
        </Link>
      </div>
      <section
        className="flex flex-wrap justify-center items-center px-12"
        name="casestudies"
      >
        {edges.map(({ node }) => {
          const { path, title, image } = node.frontmatter
          return (
            <div className="shadow-lg m-4 rounded-lg flex-col" key={path}>
              <Link
                to={path}
                className="primary float-right text-center no-underline uppercase text-xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="sm:max-w-xs md:max-w-sm p-2"
                />
                <hr className="line w-full" />
                <div className="p-2 text-center">
                  <span className="flex-1">{title}</span>
                </div>
              </Link>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

ServiceLines.propTypes = {
  pageContext: PropTypes.shape({}),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default ServiceLines

export const pageQuery = graphql`
  query($service: String) {
    allMarkdownRemark(
      filter: { frontmatter: { service: { in: [$service] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            image
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
