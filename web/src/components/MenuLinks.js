import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const MenuLinks = ({ classes }) => {
  const data = useStaticQuery(graphql`
    {
      links: allSanityMenu {
        nodes {
          slug {
            current
          }
          order
          responsiveness
          name
          newwindow
        }
      }
    }
  `)
  data.links.nodes.sort((a, b) => (a.order > b.order ? 1 : -1))
  return (
    <div className={classes}>
      <div className="flex-grow" />
      {data.links.nodes.map(item => {
        return (
          <>
            {!item.newwindow && (
              <Link
                activeClassName="active-link"
                key={item.slug.current}
                className="link-primary py-6 lg:pl-10"
                to={item.slug.current}
              >
                <span>{item.name}</span>
              </Link>
            )}
            {item.newwindow && (
              <a
                key={item.name}
                className="link-primary py-6 lg:pl-10"
                href={item.slug.current}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{item.name}</span>
              </a>
            )}
          </>
        )
      })}
    </div>
  )
}

MenuLinks.propTypes = {
  classes: PropTypes.string.isRequired,
}

export default MenuLinks
