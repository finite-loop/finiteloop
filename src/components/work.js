import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export const WorkPageTemplate = ({ work }) => (
  <div className="flex" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
    <div className="flex flex-wrap justify-center items-stretch">
      {work.work.map(({ project }) => (
        <div key={project.name} className="flex p-4">
          <div className="flex max-w-sm lg:px-10 flex-col">
            <Img
              alt={project.name}
              fluid={project.image.childImageSharp.fluid}
              className="h-full w-full"
            />
            <div
              className="p-4 border-t-2 border-solid border-fl-secondary" // #E05455
              style={{ backgroundColor: 'white', color: '#424242' }}
            >
              <h2 className="text-xl font-semibold py-2">{project.name}</h2>
              <p className="p-0 mx-0 max-w-sm text-md leading-normal font-light">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div />
  </div>
)

const Work = ({ workData }) => {
  const { edges: work } = workData.Work
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
