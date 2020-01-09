import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import content, { HTMLContent } from '../components/content'

export const OfferingsPageTemplate = ({ offering }) => {
  const PageContent = HTMLContent || content
  return (
    <div>
      <div className="flex max-w-xs mx-4 items-center flex-col">
        <div className="flex min-h-full sm:items-center lg:items-start flex-col">
          {/* <Link to={`offerings#${offering.frontmatter.path}`}> */}
          <div className="flex h-48 items-center">
            <Img
              fixed={offering.frontmatter.image.childImageSharp.fixed}
              alt={offering.frontmatter.title}
            />
          </div>
          {/* </Link> */}
          <div className="flex-col sm:text-center lg:text-left">
            <h2 className="text-md mb-2 text-fl-primary font-medium">
              {offering.frontmatter.title}
            </h2>
            <PageContent
              className="leading-normal tracking-normal font-light text-lg w-auto text-white"
              content={offering.html}
            />
          </div>
          {/* <Link
          to={`offerings#${offering.frontmatter.path}`}
          style={{ float: 'right' }}
          className="secondary text-center no-underline text-lg p-1"
        >
          Read More
          <i className="material-icons align-middle text-2xl">
            keyboard_arrow_right
          </i>
        </Link> */}
        </div>
      </div>
    </div>
  )
}

const Offerrings = ({ offeringsData }) => (
  <section name="offerings" className="pt-10 flex justify-center flex-wrap">
    {offeringsData.sort(compare).map(({ node }) => (
      <OfferingsPageTemplate key={node.frontmatter.title} offering={node} />
    ))}
  </section>
)

function compare(a, b) {
  const genreA = a.node.frontmatter.order
  const genreB = b.node.frontmatter.order

  let comparison = 0
  if (genreA > genreB) {
    comparison = 1
  } else if (genreA < genreB) {
    comparison = -1
  }
  return comparison
}

OfferingsPageTemplate.propTypes = {
  offering: PropTypes.object.isRequired,
}

Offerrings.propTypes = {
  offeringsData: PropTypes.array.isRequired,
}

export default Offerrings
