import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Helmet from 'react-helmet'
import {
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'
import SEO from '../components/seo'

export const CaseStudyTemplate = ({
  customer,
  content,
  title,
  helmet,
  image,
  portfolio,
  service,
  global,
  url,
}) => {
  const PageContent = HTMLContent || Content
  return (
    <section
      name="case-studies"
      className="sm:px-6 md:px-12 lg:px-12 pt-4 pb-8"
    >
      {helmet || ''}
      <h1 className="text-3xl">{title}</h1>
      {portfolio.map(item => (
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
      <div className="flex sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-no-wrap">
        <div className="">
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
                  className="text-lg tracking-wide leading-normal max-w-5xl pb-4"
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
                    className="text-lg tracking-wide max-w-5xl leading-normal"
                    content={content}
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="xl:px-6">
          <div>
            <h2>Our Work</h2>
            {service.map(item => (
              <Link key={item} to={`/service/${_.kebabCase(item)}/`}>
                <button className="service-list text-left w-full">
                  <svg
                    className="fill-current w-6 h-6 mr-1 -mb-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>{item}</span>
                </button>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            <hr className="line w-full" />
            <p className="text-center uppercase">Share this project</p>
            <div className="flex w-full justify-center">
              <TwitterShareButton
                aria-label={title}
                url={url}
                title={`${global.siteTitle} | Case Study | ${title}`}
                via="_finiteloop"
                hashtags={[global.socialMediaCard.hashTag]}
                className="m-2"
              >
                <TwitterIcon round size={48} />
              </TwitterShareButton>
              <LinkedinShareButton
                aria-label={`${global.siteTitle} | Case Study | ${title}`}
                url={url}
                description={url}
                title={`${global.siteTitle} | Case Study | ${title}`}
                className="m-2"
              >
                <LinkedinIcon round size={48} />
              </LinkedinShareButton>
            </div>
            <hr className="line w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

const CaseStudy = props => {
  const { markdownRemark: casestudy } = props.data
  const { global } = props.data
  return (
    <Layout>
      <CaseStudyTemplate
        customer={casestudy.frontmatter.customer}
        content={casestudy.html}
        helmet={
          <Helmet
            title={`${global.frontmatter.siteTitle} | Case Study | ${
              casestudy.frontmatter.title
            }`}
          />
        }
        title={casestudy.frontmatter.title}
        global={global.frontmatter}
        image={casestudy.frontmatter.image}
        portfolio={casestudy.frontmatter.portfolio}
        service={casestudy.frontmatter.service}
        url={props.location.href}
      />
      <SEO postPath={casestudy.frontmatter.path} postNode={casestudy} postSEO />
    </Layout>
  )
}

CaseStudyTemplate.propTypes = {
  customer: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  portfolio: PropTypes.array.isRequired,
  service: PropTypes.array.isRequired,
}

CaseStudy.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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
        portfolio
        service
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
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
        siteUrl
        siteTitle
        siteDescription
        socialMediaCard {
          hashTag
          twtrUrl
          lnkdnUrl
        }
      }
    }
  }
`
