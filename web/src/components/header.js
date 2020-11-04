import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import MenuLinks from "./MenuLinks"
import SEO from "./seo"
import flLogoText from '../images/finiteloop_logo_text.png'
const Header = ({ siteTitle, logo }) => {

  const [menuActive, setMenuActive] = useState(false);
  
  return (
    <div id="header">
      <nav className="nav" role="navigation">
        <div className="sm:mt-2 sm:ml-4 lg:ml-32">
          <Link to="/">
            <div className="sm:flex md:flex justify-center mb-2">
              <img
                className="sm:w-3/4 lg:w-auto lg:h-auto"
                src={logo.asset.url}
                alt="Logo"
              />
            </div>
            <div className="sm:flex lg:flex justify-center">
              <img
                className="lg:w-auto"
                src={flLogoText}
                alt="Logo"
              />
            </div>
          </Link>
        </div>
        <div className="sm:max-w-4/5 md:max-w-3/4 mx-auto items-start flex flex-1 mr-24">
          <MenuLinks classes="menu-links xl:flex lg:flex sm:hidden md:hidden" />
        </div>
        <div className="sm:mx-2 md:px-5 flex lg:hidden">
          <button role="menu" aria-label="Menu" style={{background: 'none'}} onClick={() => setMenuActive(!menuActive)}>
            <div className="three col">
              <div
                className={
                  menuActive ? "hamburger is-active" : "hamburger"
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
            menuActive
              ? "menu-items is-active flex flex-col lg:hidden"
              : "menu-items flex-col lg:hidden"
          }
        />
      </nav>
      <SEO />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  id: "header",
}

export default Header
