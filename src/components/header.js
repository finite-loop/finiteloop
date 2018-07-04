import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GitHubIcon, LnkdnIcon, TwtrIcon, HamburgerIcon } from './icons/icons'

const Header = ({ title, links, social }) => (
  <nav className="nav">
    <Link to="/" className="logo">
      <span>{title}</span>
    </Link>
    <div className="block lg:hidden">
      <button className="hamburgerMenu">
        <HamburgerIcon />
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow" />
      <div>
        {links.map(({ item }) => (
          <Link to={item.url} key={item.title} className="link-primary">
            {item.title}
          </Link>
        ))}
        <a
          href={social.lnkdnUrl}
          target="_new"
          className="link-primary align-middle"
        >
          <LnkdnIcon />
        </a>
        <a
          href={social.twtrUrl}
          target="_new"
          className="link-primary align-middle"
        >
          <TwtrIcon />
        </a>
        <a
          href={social.githubUrl}
          target="_new"
          className="link-primary align-middle"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default Header
