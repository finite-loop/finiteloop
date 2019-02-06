import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GitHubIcon } from './icons/icons'

const MenuLinks = ({ links, social, classes }) => (
  <div className={classes}>
    <div className="text-sm lg:flex-grow" />
    {links.map(({ item }) => (
      <Link key={item.title} className="link-primary" to={item.url}>
        <span style={{ lineHeight: '4.4vh' }}>{item.title}</span>
      </Link>
    ))}
    {/* <a href={social.lnkdnUrl} target="_new" className="link-primary">
      <LnkdnIcon style={{ height: '4.5vh' }} alt="LinkedIn" />
    </a>
    <a href={social.twtrUrl} target="_new" className="link-primary">
      <TwtrIcon style={{ height: '4.5vh' }} alt="Twitter" />
    </a> */}
    <a href={social.githubUrl} target="_new" className="link-primary">
      <GitHubIcon style={{ height: '4vh' }} alt="Github" />
    </a>
    {/* <a href={social.mediumUrl} target="_new" className="link-primary">
      <MediumIcon style={{ height: '4.5vh' }} alt="Medium" />
    </a> */}
  </div>
)

MenuLinks.propTypes = {
  classes: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default MenuLinks
