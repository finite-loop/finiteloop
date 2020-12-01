import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import MenuLinks from "./MenuLinks"
import SEO from "./seo"
import flLogoText from "../images/finiteloop_logo_text.png"
const BlogHeader = ({ siteTitle, logo }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [currState, setCurrState] = useState(window.pageYOffset)
  const [navClass, setNavClass] = useState("")

  useEffect(() => {
    console.log("1")
    const handleScroll = () => {
      if (window.pageYOffset > currState) {
        setNavClass("")
        setCurrState(window.pageYOffset)
      } else if (window.pageYOffset < currState) {
        if (window.pageYOffset !== 0) {
          setNavClass("fixed")
        } else {
          setNavClass("")
        }
      }
      setCurrState(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <div id="header h-full">
      <nav
        className={`nav ${navClass} sm:flex-row`}
        id="navbar"
        role="navigation"
        style={{ backgroundColor: "#36374D" }}
      >
        <div className="sm:mt-2 sm:w-2/4 lg:w-auto sm:ml-4 lg:ml-32">
          <Link to="/">
            <div className="sm:flex md:flex  mb-2">
              <img
                className="sm:w-11/12 lg:w-auto sm:h-12 md:h-12 lg:h-10"
                src={logo.asset.url}
                alt="Logo"
              />
            </div>
          </Link>
        </div>
        <div className="sm:max-w-4/5 md:max-w-3/4 mx-auto items-start flex flex-1 mr-24">
          <MenuLinks classes="menu-links xl:flex lg:flex sm:hidden md:hidden" />
        </div>
        <div className="sm:mx-2 md:px-5 flex lg:hidden">
          <button
            role="menu"
            aria-label="Menu"
            style={{ background: "none" }}
            onClick={() => setMenuActive(!menuActive)}
          >
            <div className="three col">
              <div
                className={menuActive ? "hamburger is-active" : "hamburger"}
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
          blog={true}
        />
      </nav>
      <SEO />
    </div>
  )
}

BlogHeader.propTypes = {
  siteTitle: PropTypes.string,
}

BlogHeader.defaultProps = {
  siteTitle: ``,
  id: "header",
}

export default BlogHeader
