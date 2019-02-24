import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuLinks from '../components/menuLinks'
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
    const { links, social } = this.props

    return (
      <nav className="nav" role="navigation">
        <div className="container sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-5xl flex flex-1">
          <Link to="/">
            <img className="logo" src="/img/WhiteFLLogo.jpg" alt="Logo" />
          </Link>
          <MenuLinks
            classes="menu-links xl:flex lg:flex sm:hidden md:hidden"
            social={social}
            links={links}
          />
        </div>
        <div className="px-2 lg:hidden">
          <button role="menu" aria-label="Menu" onClick={this.toggleMenu()}>
            <div className="three col">
              <div
                className={
                  this.state.menu ? 'hamburger is-active' : 'hamburger'
                }
                id="hamburger-menu"
              >
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
            </div>
          </button>
        </div>
        <MenuLinks
          classes={
            this.state.menu
              ? 'menu-items is-active flex flex-col lg:hidden'
              : 'menu-items flex-col lg:hidden'
          }
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
