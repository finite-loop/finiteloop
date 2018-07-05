import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuLinks from './menuLinks'
class Header extends React.Component {
  state = {
    menu: false,
  }

  toggleMenu = () => () => {
    if (this.state.menu)
      this.setState({
        menu: false,
      })
    else
      this.setState({
        menu: true,
      })
  }

  render() {
    const { title, links, social } = this.props

    return (
      <nav className="nav">
        <Link to="/" className="logo">
          <span>{title}</span>
        </Link>
        <div className="lg:hidden">
          <button onClick={this.toggleMenu()} className="hamburgerMenu">
            {!this.state.menu && <i className="material-icons">menu</i>}
            {this.state.menu && <i className="material-icons">close</i>}
          </button>
        </div>
        {this.state.menu && (
          <MenuLinks
            classes="menu-links lg:hidden"
            social={social}
            links={links}
          />
        )}
        <MenuLinks
          classes="menu-links xl:flex lg:flex sm:hidden md:hidden"
          social={social}
          links={links}
        />
      </nav>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default Header
