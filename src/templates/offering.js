import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const OfferingTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
  classes,
}) => {
  // const PostContent = contentComponent || Content

  return (
    <section name="offering">
      {helmet || ''}
      <div component="h1" className={classes.title1}>
        {title}
      </div>
      <div
        style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}
      />
    </section>
  )
}

const Offering = props => {
  const { Offerings: offering } = props.data

  return (
    <div>
      <OfferingTemplate
        content={offering.html}
        contentComponent=""
        helmet={
          <Helmet
            title={`Offering & Services | ${offering.frontmatter.title}`}
          />
        }
        title={offering.frontmatter.title}
        image={offering.frontmatter.image}
        classes={props.classes}
      />
    </div>
  )
}

Offering.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Offering

export const offringQuery = graphql`
  query Offering($path: String!) {
    Offerings: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      excerpt
      frontmatter {
        path
        title
        image
        templateKey
      }
    }
  }
`
