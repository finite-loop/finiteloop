import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GitHubIcon } from './icons/icons'

const StudioMenuLinks = ({ links, social, classes }) => (
  <div className={classes}>
    <div className="flex-grow" />
    {links.map(({ item }) => (
      <>
        {!item.newwindow && (
          <Link activeClassName="active-link" key={item.title} className="link-primary py-6 lg:pl-10" to={item.url}>
            <span>{item.title}</span>
          </Link>
        )}
        {item.newwindow && (
          <a key={item.title} key={item.title} className="link-primary py-6 lg:pl-10" href={item.url} rel="noopener noreferrer" target="_blank">
            <span>{item.title}</span>
          </a>
        )}
      </>
    ))}

    {/* <a href={social.githubUrl} target="_new" className="py-5 px-3">
      <GitHubIcon alt="Github" />
    </a> */}
  </div>
)

StudioMenuLinks.propTypes = {
  classes: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default StudioMenuLinks
