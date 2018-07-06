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
          <button onClick={this.toggleMenu()}>
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
        {
          //this.state.menu && (
          <MenuLinks
            classes={
              this.state.menu
                ? 'menu-links menu-links-active lg:hidden'
                : 'menu-links sm:hidden md:hidden'
            }
            social={social}
            links={links}
          />
          //)
        }
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
