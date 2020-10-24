import React from "react"
import logo from "../images/flLogo.png"
import "../pages/index.css"
const Navbar = () => {
  return (
    <div>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8 font-sans">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div class="lg:w-0 lg:flex-1">
            <a href="#" class="flex">
              <img
                className="h-5 rounded w-auto sm:h-10"
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
          <div classNameName="hidden md:block md:ml-10 md:pr-4 ml-4">
            <a
              href="/about"
              className="no-underline font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              About
            </a>
            <a
              href="/work"
              className="no-underline ml-8 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Work
            </a>
            <a
              href="project/finiteloop"
              className=" no-underline ml-8 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Project-finiteloop
            </a>
            <a
              href="/project/cirrus"
              className="no-underline ml-8 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Project-cirrus
            </a>
            <a
              href="/initiatives"
              className="no-underline ml-8 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Initiatives
            </a>
            <a
              href="/blog/first-blog"
              className="no-underline ml-8 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Sample blog 1
            </a>
            <a
              href="/blog/yatra-to-kailash"
              className="no-underline ml-8 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Sample blog 2
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
