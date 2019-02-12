import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Portfolios = ({ pageContext, data }) => {
  const { portfolio } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Case Stud${totalCount === 1 ? 'y' : 'ies'} `

  return (
    <Layout>
      <Helmet
        title={`${
          data.global.frontmatter.siteTitle
        } | Case Study | ${portfolio}`}
      />
      <h1 className="sm:px-6 md:px-12 lg:px-24 py-2 leading-normal text-3xl">
        <span className="text-secondary">{portfolio}</span>&nbsp;
        <span>{tagHeader}</span>
      </h1>
      <div className="mx-auto text-center pb-4">
        <Link to="/case-studies">
          <button className="rectButton">All Case Studies</button>
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
                style={{ float: 'right' }}
                className="primary text-center no-underline uppercase text-xl"
              >
                <img
                  src={image}
                  className="sm:max-w-sm md:max-w-auto h-auto p-2"
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

Portfolios.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
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

export default Portfolios

export const portfolioQuery = graphql`
  query($portfolio: String) {
    allMarkdownRemark(
      filter: { frontmatter: { portfolio: { in: [$portfolio] } } }
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
