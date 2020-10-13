import React from "react"

const ProjectTemplate = ({ data: { project } }) => {
  return (
    <div className="font-sans font-light">
      <nav className="h-20 w-full bg-gray-600"></nav>
      <div className="pt-16 px-24">
        <div className="w-full h-64 bg-gray-200">cover img</div>
      </div>
      <div className="pt-16 px-48">
        <div className="font-bold text-4xl">{project.title}</div>
        <div className="text-lg">
          <span className="font-bold">Industry:</span> Maritime
        </div>
        <div className="flex mt-6">
          <div className="pr-16" style={{ width: "60%" }}>
            <div className="text-2xl font-bold">Intend</div>
            <p>
              The moon works its way into our way of thinking, our feelings
              about romance, our poetry and literature and even how we feel
              about our day in day out lives in many cases. It is not only
              primitive societies that ascribe mood swings, changes in social
              conduct and changes in weather to the moon.
            </p>
            <div className="text-2xl font-bold mt-6">Impact</div>
            <p>
              The moon works its way into our way of thinking, our feelings
              about romance, our poetry and literature and even how we feel
              about our day in day out lives in many cases. It is not only
              primitive societies that ascribe mood swings, changes in social
              conduct and changes in weather to the moon.
            </p>
            <div className="text-2xl font-bold mt-6">Approach</div>
            <p>
              The moon works its way into our way of thinking, our feelings
              about romance, our poetry and literature and even how we feel
              about our day in day out lives in many cases. It is not only
              primitive societies that ascribe mood swings, changes in social
              conduct and changes in weather to the moon.
            </p>
          </div>
          <div className="pl-16 border-l-2 border-gray-600">
            <div className="text-2xl font-bold">aa</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      intend
      title
      tools
      tags
      impact
    }
  }
`

export default ProjectTemplate
