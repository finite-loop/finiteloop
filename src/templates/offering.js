import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'
import SEO from '../components/seo'

export const OfferingTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section name="offering">
      {helmet || ''}
      <h2 className="text-center">{title}</h2>
      <div className="para-secondary">
        <PageContent content={content} />
      </div>
    </section>
  )
}

const Offering = props => {
  const { Offerings: offering } = props.data

  return (
    <Layout>
      <OfferingTemplate
        content={offering.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet
            title={`Offering & Services | ${offering.frontmatter.title}`}
          />
        }
        title={offering.frontmatter.title}
        image={offering.frontmatter.image}
      />
      <SEO postPath={offering.frontmatter.path} postNode={offering} postSEO />
    </Layout>
  )
}

OfferingTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  helmet: PropTypes.object.isRequired,
  contentComponent: PropTypes.func.isRequired,
}

Offering.propTypes = {
  data: PropTypes.object.isRequired,
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
