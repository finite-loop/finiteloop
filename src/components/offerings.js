import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

export const OfferingsPageTemplate = ({ offering }) => (
  // const isAlignLeft = offering.frontmatter.align === 'left'
  <div id="offerings">
    <div className="flex max-w-xs items-center flex-col pb-4">
      <div className="flex max-w-sm min-h-full items-center flex-col">
        <h2 className="text-lg">{offering.frontmatter.title}</h2>
        <Link to={`offerings#${offering.frontmatter.path}`}>
          <img
            src={offering.frontmatter.image}
            alt={offering.frontmatter.title}
          />
        </Link>
        <p className="para-primary text-center px-4 py-1">{offering.excerpt}</p>
        <Link
          to={`offerings#${offering.frontmatter.path}`}
          style={{ float: 'right' }}
          className="secondary text-center no-underline text-md p-2"
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
  <section
    name="offerings"
    className="w-full flex flex-wrap justify-center items-stretch"
  >
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
