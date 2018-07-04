import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

export const OfferingsPageTemplate = ({ offering }) => {
  const isAlignLeft = offering.frontmatter.align === 'left'
  return (
    <div style={{ background: 'white' }}>
      {isAlignLeft && (
        <div name="offering" className="offerings-left">
          <div className="offering-content-left xl:block lg:block md:block sm:hidden">
            <img
              alt={offering.frontmatter.title}
              src={offering.frontmatter.image}
            />
          </div>
          <div className="offering-content-right">
            <h2 className="">{offering.frontmatter.title}</h2>
            <p className="para-primary">{offering.excerpt}</p>
            <Link
              to={offering.frontmatter.path}
              style={{ float: 'right' }}
              className="primary text-center no-underline uppercase text-md p-2 hover:bg-grey-lightest"
            >
              MORE
              <i className="material-icons align-middle -mt-1 text-3xl">
                keyboard_arrow_right
              </i>
            </Link>
          </div>
        </div>
      )}
      {!isAlignLeft && (
        <div name="offering" className="offerings-right">
          <div className="offering-content-right">
            <h2 component="h2" className="">
              {offering.frontmatter.title}
            </h2>
            <p className="para-primary">{offering.excerpt}</p>
            <Link
              to={offering.frontmatter.path}
              style={{ float: 'right' }}
              className="primary text-center no-underline uppercase text-md p-2 hover:bg-grey-lightest"
            >
              MORE
              <i className="material-icons align-middle -mt-1 text-3xl">
                keyboard_arrow_right
              </i>
            </Link>
          </div>
          <div className="offering-content-left xl:block lg:block md:block sm:hidden">
            <img
              src={offering.frontmatter.image}
              alt={offering.frontmatter.title}
            />
          </div>
        </div>
      )}
    </div>
  )
}

const Offerrings = ({ offeringsData }) => {
  const { edges: offerings } = offeringsData.data.Offerings
  return (
    <section name="offerings">
      {offerings
        .sort(compare)
        .map(({ node }) => (
          <OfferingsPageTemplate key={node.frontmatter.title} offering={node} />
        ))}
    </section>
  )
}

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
  offeringsData: PropTypes.object.isRequired,
}

export default Offerrings
