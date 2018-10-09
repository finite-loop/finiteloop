import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   WhatsappIcon,
//   LinkedinIcon,
//   EmailIcon,
// } from 'react-share'

class Footer extends React.Component {
  render() {
    return (
      <div className="bg-secondary flex justify-center align-center flex-wrap text-white p-2 mt-1">
        <div className="flex justify-around flex-1 items-center">
          {this.props.links.map(({ item: footerLinks }) => (
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
        {/* <div className="flex justify-around flex-1 items-center cursor-pointer">
          Share
          <TwitterShareButton
            aria-label={this.props.title}
            url={this.props.url}
            title={this.props.title}
            via="_finiteloop"
            hashtags={[this.props.hashTag]}
          >
            <TwitterIcon round size={48} />
          </TwitterShareButton>
          <LinkedinShareButton
            aria-label={this.props.title}
            url={this.props.url}
            title={this.props.title}
          >
            <LinkedinIcon round size={48} />
          </LinkedinShareButton>
          <EmailShareButton
            aria-label={this.props.title}
            url={this.props.url}
            subject={'Enquire about ' + this.props.title}
          >
            <EmailIcon round size={48} />
          </EmailShareButton>
          <FacebookShareButton
            aria-label={this.props.title}
            url={this.props.url}
            quote={this.props.title}
            hashtag={'#' + this.props.hashTag}
          >
            <FacebookIcon round size={48} />
          </FacebookShareButton>
          <WhatsappShareButton
            aria-label={this.props.title}
            url={this.props.url}
            title={this.props.title}
          >
            <WhatsappIcon round size={48} />
          </WhatsappShareButton>
        </div> */}
      </div>
    )
  }
}

Footer.propTypes = {
  links: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hashTag: PropTypes.string.isRequired,
}

export default Footer
