import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export const WorkPageTemplate = ({ work }) => (
  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
    <div className="flex flex-wrap mx-10 justify-center items-strech">
      {work.work.map(({ project }) => (
        <div key={project.name}>
          <div className="flex max-w-sm lg:px-12 pb-10 flex-col">
            <div style={{ backgroundColor: '#F0F6FA' }}>
              <Img
                alt={project.name}
                fluid={project.image.childImageSharp.fluid}
              />
            </div>
            <div
              className="flex flex-col p-4 border-t-2 border-solid border-fl-secondary" // #E05455
              style={{ backgroundColor: 'white', color: '#424242' }}
            >
              <div className="text-xl font-semibold py-2">{project.name}</div>
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
  console.log(workData)
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
