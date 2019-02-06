import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import '../styles/index.css'
import Layout from '../components/layout'

export const CaseStudyTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  casestudy,
  classes,
}) => (
  <section name="case-studies">
    {helmet || ''}
    <h1>{title}</h1>
    <h2>{description}</h2>
    <img src={image} style={{ width: '200px' }} />
    <div
      style={{
        padding: '20px',
        lineHeight: '24px',
        letterSpacing: '1.29px',
      }}
    />
    <div>
      <div component="h3">Focus</div>
      <div
        id="focus"
        style={{
          padding: '20px',
          lineHeight: '24px',
          letterSpacing: '1.29px',
        }}
      >
        <div markdown={casestudy.focus} />
      </div>
      <div component="h3">Challenges</div>
      <div
        style={{
          padding: '20px',
          lineHeight: '24px',
          letterSpacing: '1.29px',
        }}
      >
        <div markdown={casestudy.challenges} />
      </div>
      <div component="h3">Solution</div>
      <div
        style={{
          padding: '20px',
          lineHeight: '24px',
          letterSpacing: '1.29px',
        }}
      >
        <div markdown={casestudy.solution} />
      </div>
      <div component="h3">Benefits</div>
      <div
        style={{
          padding: '20px',
          lineHeight: '24px',
          letterSpacing: '1.29px',
        }}
      />
    </div>
  </section>
)

const CaseStudy = props => {
  const { markdownRemark: casestudy } = props.data
  return (
    <Layout>
      <CaseStudyTemplate
        content={casestudy.html}
        contentComponent=""
        description={casestudy.frontmatter.description}
        helmet={
          <Helmet title={`Case Study | ${casestudy.frontmatter.title}`} />
        }
        title={casestudy.frontmatter.title}
        image={casestudy.frontmatter.image}
        casestudy={casestudy.frontmatter.casestudy}
        classes={props.classes}
      />
    </Layout>
  )
}

CaseStudy.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        image
        title
        date
        customer {
          name
          profile
          web
        }
        casestudy {
          description
          focus
          challenges
          solution
          benefits
          technology
        }
      }
    }
  }
`
