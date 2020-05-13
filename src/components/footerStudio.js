import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LnkdnIcon, TwtrIcon, GitHubIcon } from './icons/icons'

class StudioFooter extends React.Component {
  render() {
    const { social } = this.props
    return (
      <div id={this.props.id}>
        <div className="footerStudio sm:px-8 lg:px-24 py-6">
          <div className="flex justify-between">
            <div className="flex-col flex-wrap">
              {this.props.links.map(({ item: footerLinks }) => (
                <div key={footerLinks.title} className="py-2">
                  {!footerLinks.newwindow && (
                    <Link to={footerLinks.url} className="link-primary-studio">
                      {footerLinks.title}
                    </Link>
                  )}
                  {footerLinks.newwindow && (
                    <a href={footerLinks.url} target="_new" className="link-primary-studio">
                      {footerLinks.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="flex">
              <a href={social.lnkdnUrl} target="_new" className="link-primary-studio px-2">
                <LnkdnIcon alt="LinkedIn" fill="gray" />
              </a>
              <a href={social.twtrUrl} target="_new" className="link-primary-studio px-2">
                <TwtrIcon alt="Twitter" fill="gray" />
              </a>
              <a href={social.githubUrl} target="_new" className="link-primary-studio px-2">
                <GitHubIcon alt="Github" fill="gray" />
              </a>
            </div>
          </div>
          <div className="opacity-50">{this.props.trademark}</div>
        </div>
      </div>
    )
  }
}

StudioFooter.propTypes = {
  links: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hashTag: PropTypes.string.isRequired,
  social: PropTypes.object.isRequired,
  trademark: PropTypes.string.isRequired,
}

export default StudioFooter
