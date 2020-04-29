import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export const ClientsPageTemplate = ({ clients }) => (
  <div>
    <div className="flex flex-wrap justify-center items-center bg-white rounded-lg">
      {clients.clients.map(({ client }) => (
        <div className="flex flex-col px-20 py-10" key={client.name}>
          <div className="flex flex-col">
            <Img
              alt={client.name}
              fluid={client.logo.childImageSharp.fluid}
              className="w-48 h-48 align-center"
              imgStyle={{
                objectFit: 'contain',
              }}
            />
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
