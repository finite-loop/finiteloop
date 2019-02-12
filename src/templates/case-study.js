import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const CaseStudyTemplate = ({
  customer,
  content,
  title,
  helmet,
  image,
}) => {
  const PageContent = HTMLContent || Content
  return (
    <section
      name="case-studies"
      className="sm:px-6 md:px-12 lg:px-24 pt-4 pb-8"
    >
      <h1 className="text-3xl">{title}</h1>
      <Tabs>
        <TabList>
          <Tab>Customer</Tab>
          <Tab>Case Study</Tab>
        </TabList>
        <TabPanel>
          <div className="p-4 clearfix">
            <img
              src={image}
              className="sm:hidden md:block max-w-xs float-right p-2"
            />
            <PageContent
              className="text-lg tracking-wide leading-normal pb-4"
              content={customer.profile}
            />
            <span className="text-primary text-xl">Web: </span>
            <a
              className="text-secondary no-underline text-xl"
              href={customer.web}
              rel="noopener noreferrer"
              target="_blank"
            >
              {customer.name}
            </a>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4 clearfix">
            <img
              className="sm:hidden md:block max-w-xs float-right p-2"
              src={image}
            />
            <div>
              <PageContent
                className="text-lg tracking-wide leading-normal"
                content={content}
              />
            </div>
          </div>
        </TabPanel>
      </Tabs>
      {helmet || ''}
    </section>
  )
}

const CaseStudy = props => {
  const { markdownRemark: casestudy } = props.data
  return (
    <Layout>
      <CaseStudyTemplate
        customer={casestudy.frontmatter.customer}
        content={casestudy.html}
        helmet={
          <Helmet title={`Case Study | ${casestudy.frontmatter.title}`} />
        }
        title={casestudy.frontmatter.title}
        image={casestudy.frontmatter.image}
      />
    </Layout>
  )
}

CaseStudyTemplate.propTypes = {
  customer: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
}

CaseStudy.propTypes = {
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
          body
        }
      }
    }
  }
`
