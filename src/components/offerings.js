import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export const OfferingsPageTemplate = ({ offering }) => (
  <div>
    <div className="flex max-w-sm items-center flex-col pb-4">
      <div className="flex min-h-full items-center flex-col">
        <h2 className="text-md mb-2 text-fl-primary font-medium">
          {offering.frontmatter.title}
        </h2>
        <Link to={`offerings#${offering.frontmatter.path}`}>
          <Img
            fixed={offering.frontmatter.image.childImageSharp.fixed}
            alt={offering.frontmatter.title}
          />
        </Link>
        <div className="leading-normal tracking-normal text-lg w-auto px-5 text-center py-2">
          {offering.excerpt}
        </div>
        <Link
          to={`offerings#${offering.frontmatter.path}`}
          style={{ float: 'right' }}
          className="secondary text-center no-underline text-lg p-1"
        >
          Read More
          <i className="material-icons align-middle text-2xl">
            keyboard_arrow_right
          </i>
        </Link>
      </div>
    </div>
  </div>
)

const Offerrings = ({ offeringsData }) => (
  <section name="offerings" className="flex justify-center flex-wrap">
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
