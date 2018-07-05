import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GitHubIcon, LnkdnIcon, TwtrIcon } from './icons/icons'

const MenuLinks = ({ links, social, classes }) => (
  <div className={classes}>
    <div className="text-sm lg:flex-grow" />
    {links.map(({ item }) => (
      <div key={item.title} className="link-primary">
        <Link className="link-primary" to={item.url}>
          {item.title}
        </Link>
      </div>
    ))}
    <div className="p-2">
      <a href={social.lnkdnUrl} target="_new" className="link-primary">
        <LnkdnIcon />
      </a>
      <a href={social.twtrUrl} target="_new" className="link-primary">
        <TwtrIcon />
      </a>
      <a href={social.githubUrl} target="_new" className="link-primary">
        <GitHubIcon />
      </a>
    </div>
  </div>
)

MenuLinks.propTypes = {
  classes: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default MenuLinks
