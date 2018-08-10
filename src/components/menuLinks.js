import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GitHubIcon, LnkdnIcon, TwtrIcon } from './icons/icons'

const MenuLinks = ({ links, social, classes }) => (
  <div className={classes}>
    <div className="text-sm lg:flex-grow" />
    {links.map(({ item }) => (
      <div key={item.title} className="p-4">
        <Link className="link-primary" to={item.url}>
          {item.title}
        </Link>
      </div>
    ))}
    <div className="p-4">
      <a href={social.lnkdnUrl} target="_new" className="link-primary">
        <LnkdnIcon alt="LinkedIn" />
      </a>
      <a href={social.twtrUrl} target="_new" className="link-primary">
        <TwtrIcon alt="Twitter" />
      </a>
      <a href={social.githubUrl} target="_new" className="link-primary">
        <GitHubIcon alt="Github" />
      </a>
      <a href={social.mediumUrl} target="_new" className="link-primary">
        <img
          alt="Medium"
          style={{ borderRadius: '50%', width: '30px', height: '30px' }}
          src="https://cdn-images-1.medium.com/fit/c/120/120/1*6_fgYnisCa9V21mymySIvA.png"
        />
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
