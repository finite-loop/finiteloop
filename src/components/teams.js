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
  <div className="gradientBackground">
    <h1 className="heading1">{teams.teamTitle}</h1>
    <div className="w-full flex flex-wrap justify-center items-stretch">
      {teams.team.sort(compare).map(({ person }) => (
        <div key={person.name}>
          <div className="flex max-w-sm items-center flex-col pb-6">
            <div className="flex max-w-sm min-h-full items-center flex-col">
              <div>
                <img
                  alt={person.name}
                  src={person.avatar}
                  className="profile-pic flex align-center"
                />
                <a href={person.lnkdnsiteurl} target="_new">
                  <LnkdnIcon
                    className="w-12 h-12"
                    style={{
                      marginTop: '-30px',
                      marginLeft: '160px',
                    }}
                  />
                </a>
              </div>
              <div className="px-6 text-center">
                <h3 className="text-lg pb-2">
                  {person.name + ' '}
                  <div>
                    <img
                      className=""
                      alt="kolam background"
                      height="30"
                      width="30"
                      src="/img/kolam.png"
                    />
                  </div>
                  <p className="text-primary">{person.title}</p>
                </h3>
                <p className="para-secondary lg:text-xl md:text-lg">
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
  const { edges: aboutus } = teamsData.data.Teams
  return (
    <section name="teams" className="gradientBackground px-24 sm:px-2">
      {aboutus.map(({ node: team }) => (
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
