import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a.client.name.toUpperCase()
  const genreB = b.client.name.toUpperCase()

  let comparison = 0
  if (genreA > genreB) {
    comparison = 1
  } else if (genreA < genreB) {
    comparison = -1
  }
  return comparison
}

export const ClientsPageTemplate = ({ clients }) => (
  <div>
    <div className="flex flex-wrap bg-white pt-20 rounded-lg justify-center items-center">
      {clients.clients.map(({ client }) => (
        <div key={client.name}>
          <div className="flex max-w-xs px-20 pb-20 flex-col">
            <div>
              <Img
                alt={client.name}
                fixed={client.logo.childImageSharp.fixed}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div />
  </div>
)

const Clients = ({ clientsData }) => {
  const { edges: clients } = clientsData.data.Clients
  return (
    <section name="clients">
      {clients.map(({ node: team }) => (
        <ClientsPageTemplate
          key={team.frontmatter.title}
          props={clientsData}
          clients={team.frontmatter}
        />
      ))}
    </section>
  )
}

ClientsPageTemplate.propTypes = {
  clients: PropTypes.object.isRequired,
}

Clients.propTypes = {
  clientsData: PropTypes.object.isRequired,
}

export default Clients
