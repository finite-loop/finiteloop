import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export const WorkPageTemplate = ({ work }) => (
  <div>
    <div className="flex flex-wrap justify-center items-strech">
      {work.work.map(({ project }) => (
        <div key={project.name}>
          <div className="flex max-w-sm px-10 pb-10 flex-col">
            <div className="bg-white opacity-75">
              <Img
                alt={project.name}
                fluid={project.image.childImageSharp.fluid}
                className="align-center"
              />
            </div>
            <div className="flex flex-col bg-white p-2 opacity-50">
              <div className="text-2xl font-semibold py-2">{project.name}</div>
              <div className="max-w-sm text-md leading-normal font-light">
                {project.summary}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div />
  </div>
)

const Work = ({ workData }) => {
  const { edges: work } = workData.data.Work
  return (
    <section name="work">
      {work.map(({ node: team }) => (
        <WorkPageTemplate
          key={team.frontmatter.title}
          props={workData}
          work={team.frontmatter}
        />
      ))}
    </section>
  )
}

WorkPageTemplate.propTypes = {
  work: PropTypes.object.isRequired,
}

Work.propTypes = {
  workData: PropTypes.object.isRequired,
}

export default Work
