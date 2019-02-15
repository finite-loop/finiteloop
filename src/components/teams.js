import React from 'react'
import PropTypes from 'prop-types'
import { LnkdnIcon } from '../components/icons/icons'

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a.person.name.toUpperCase()
  const genreB = b.person.name.toUpperCase()

  let comparison = 0
  if (genreA > genreB) {
    comparison = 1
  } else if (genreA < genreB) {
    comparison = -1
  }
  return comparison
}

export const TeamsPageTemplate = ({ teams }) => (
  <div>
    <div className="w-auto flex flex-wrap justify-center items-stretch">
      {teams.team.sort(compare).map(({ person }) => (
        <div key={person.name} className="shadow-lg m-4 rounded-lg">
          <div className="flex max-w-sm items-center flex-col pb-2">
            <div className="flex max-w-sm min-h-full items-center flex-col">
              <h3 className="text-center text-2xl text-secondary p-2">
                {person.name}
              </h3>
              <div>
                <img
                  alt={person.name}
                  src={person.avatar}
                  className="profile-pic flex align-center"
                />
              </div>
              <a href={person.lnkdnsiteurl} target="_new">
                <LnkdnIcon
                  className="w-12 h-12"
                  style={{
                    marginTop: '-30px',
                    marginLeft: '200px',
                  }}
                  alt="LinkedIn"
                />
              </a>
              <div className="px-6 text-justify">
                <h3 className="text-primary text-center">{person.title}</h3>
                <p className="para-primary text-justify bg-white p-2 mx-0 my-2 sm:text-lg lg:text-lg md:text-lg">
                  {person.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div />
  </div>
)

const Teams = ({ teamsData }) => {
  const { edges: teams } = teamsData.data.Teams
  return (
    <section name="teams">
      {teams.map(({ node: team }) => (
        <TeamsPageTemplate
          key={team.frontmatter.title}
          props={teamsData}
          teams={team.frontmatter}
        />
      ))}
    </section>
  )
}

TeamsPageTemplate.propTypes = {
  teams: PropTypes.object.isRequired,
}

Teams.propTypes = {
  teamsData: PropTypes.object.isRequired,
}

export default Teams
