import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const CaseStudies = props => {
  const [currentPortfolio, setCurrentPortfolio] = useState('All')
  const { data } = props
  const { edges: posts } = data.Casestudies
  // Portfolio Tagged pages:
  let portfolio = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.portfolio')) {
      portfolio = portfolio.concat(edge.node.frontmatter.portfolio)
    }
  })
  // Eliminate duplicate Portfolio tags
  portfolio = _.uniq(portfolio)

  return (
    <Layout>
      <Helmet title={`${data.global.frontmatter.siteTitle} | Case Study`} />
      <div className="sm:px-4 lg:px-24 pt-4 text-center">
        <button
          onClick={() => setCurrentPortfolio('All')}
          className={
            currentPortfolio === 'All'
              ? 'rectButton bg-accent-alternate text-secondary-alternate text-lg m-1 sm:text-xs'
              : 'rectButton text-primary text-lg m-1 sm:text-xs'
          }
        >
          All
        </button>
        {portfolio.map(item => (
          <button
            key={item}
            onClick={() => setCurrentPortfolio(item)}
            className={
              currentPortfolio === item
                ? 'rectButton bg-accent-alternate text-secondary-alternate text-lg m-1 sm:text-xs'
                : 'rectButton text-primary text-lg m-1 sm:text-xs'
            }
          >
            {item}
          </button>
        ))}
      </div>

      <section
        className="flex flex-wrap justify-center items-center"
        name="casestudies"
      >
        {posts
          .filter(post => post.node.frontmatter.templateKey === 'case-study')
          .map(
            ({ node: post }) =>
              (post.frontmatter.portfolio.indexOf(currentPortfolio) > -1 ||
                currentPortfolio === 'All') && (
                <div className="shadow-lg m-2 rounded-lg" key={post.id}>
                  <div className="flex flex-wrap justify-center">
                    <Link
                      to={post.frontmatter.path}
                      className="primary text-center no-underline uppercase text-xl"
                    >
                      <div className="pt-2">{post.frontmatter.title}</div>
                    </Link>
                    <hr className="line w-full" />
                    <Link
                      to={post.frontmatter.path}
                      className="primary w-full text-center no-underline uppercase text-xl"
                    >
                      <Img
                        fluid={post.frontmatter.image.childImageSharp.fluid}
                        className="m-2"
                      />
                    </Link>
                    <hr className="line w-full" />
                  </div>
                  <div className="p-2 text-justify max-w-sm">
                    {post.frontmatter.portfolio.map(item => (
                      <Link key={item} to={`/portfolio/${_.kebabCase(item)}/`}>
                        <button className="portfolio-list">
                          <svg
                            className="fill-current w-4 h-4 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                          </svg>
                          {item}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              )
          )}
      </section>
      <SEO
        postPath="/case-studies"
        postNode={{
          frontmatter: {
            title: data.global.frontmatter.siteTitle + ' | ' + 'Case Study',
            image: '',
            excerpt: '',
          },
        }}
        postSEO={false}
      />
    </Layout>
  )
}

CaseStudies.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaseStudies

export const caseStudiesQuery = graphql`
  query IndexQuery {
    Casestudies: allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            templateKey
            path
            date(formatString: "MMMM DD, YYYY")
            portfolio
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
