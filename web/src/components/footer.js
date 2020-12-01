import React from "react"
import { Link } from "gatsby"

import { LinkedInIcon, TwitterIcon, GithubIcon } from "./icons/icons"

function Footer({ links, socialUrls, trademark, opacity, blog }) {
  return (
    <div id="footer">
      <div
        className={
          blog
            ? "blogfooter sm:px-8 lg:px-24 py-6"
            : "footer sm:px-8 lg:px-24 py-6"
        }
      >
        <div className="flex justify-between">
          <div className="flex-col flex-wrap">
            {links.map(footerLinks => (
              <div key={footerLinks.title} className="py-2">
                {!footerLinks.newwindow && (
                  <Link to={footerLinks.url} className="link-secondary">
                    {footerLinks.title}
                  </Link>
                )}
                {footerLinks.newwindow && (
                  <a
                    href={footerLinks.url}
                    target="_new"
                    className="link-secondary"
                  >
                    {footerLinks.title}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex">
            <a
              href={socialUrls.linkedin}
              target="_new"
              className="link-secondary px-2"
            >
              <LinkedInIcon alt="LinkedIn" fill="#F5F6F4" />
            </a>
            <a
              href={socialUrls.twitter}
              target="_new"
              className="link-secondary px-2"
            >
              <TwitterIcon alt="Twitter" fill="#F5F6F4" />
            </a>
            <a
              href={socialUrls.github}
              target="_new"
              className="link-secondary px-2"
            >
              <GithubIcon alt="Github" fill="#F5F6F4" />
            </a>
          </div>
        </div>
        {/* <div className="opacity-50">{this.props.trademark}</div> */}
        <div className={opacity}>{trademark}</div>
      </div>
    </div>
  )
}

export default Footer
