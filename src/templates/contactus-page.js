import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Keys from '../../config/APIKeys'
import FullLayout from '../components/layout.full'
import { compose, withStateHandlers } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'
import SEO from '../components/seo'
import { ValidatorForm } from 'react-form-validator-core'
import TextValidator from '../components/TextValidator'

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: true,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{
      lat: props.contactData.map.center.lat,
      lng: props.contactData.map.center.long,
    }}
  >
    <Marker
      position={{
        lat: props.contactData.map.position.lat,
        lng: props.contactData.map.position.long,
      }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>
            <h3 className="text-fl-primary-alternate text-2xl pb-2 font-medium">
              {props.siteTitle}
            </h3>
            <span>
              {props.contactData.address1}
              <br />
              {props.contactData.address2}
              <br />
              {props.contactData.cityPIN}, {props.contactData.stateCountry}
              <br />
              <br />
              {props.contactData.phone} |{' '}
              <a href={`mailto:${props.contactData.email}`}>
                {props.contactData.email}
              </a>
            </span>
          </div>
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
))

const GoogleMapsUrl =
  'https://maps.googleapis.com/maps/api/js?key=' +
  Keys.googleMapsAPIKey +
  '&v=3.exp&libraries=geometry,drawing,places'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  state = {
    showError: false,
    showMessage: false,
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    company: '',
    submitError: '',
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleNetworkError = () => {
    this.setState({ submitError: 'There was a network error.' })
  }

  handleSubmit = (e, state) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Contact', ...this.state }),
    })
      .then(() => {
        console.log('Form submission success')
        this.setState({
          showError: false,
          showMessage: true,
          firstname: '',
          lastname: '',
          email: '',
          message: '',
          company: '',
          submitError: '',
        })
      })
      .catch(error => {
        console.error('Form submission error:', error)
        this.setState({
          showError: true,
          showMessage: false,
          firstname: '',
          lastname: '',
          email: '',
          message: '',
          company: '',
          submitError: '',
        })
        this.handleNetworkError()
      })

    e.preventDefault()
  }

  displayAlert = submitMsg => {
    alert(submitMsg)
    this.setState({ showMessage: false })
  }

  render() {
    const { contactus, global } = this.props.data
    const {
      showError,
      showMessage,
      email,
      firstname,
      lastname,
      message,
      company,
      submitError,
    } = this.state

    return (
      <FullLayout>
        <Helmet
          title={
            global.frontmatter.siteTitle + ' | ' + contactus.frontmatter.title
          }
        />
        <div className="flex xl:flex-no-wrap sm:flex-wrap lg:flex-wrap my-24">
          <div className="flex px-38 py-32 bg-white mr-20 flex-wrap">
            <div className="flex-col opacity-75" style={{ color: '#E05455' }}>
              <h1 className="text-4xl mb-10">Contact Us</h1>
              <h3 className="text-xl pb-2 font-semibold">
                {global.frontmatter.siteTitle}
              </h3>
              <span className="text-lg leading-normal">
                {contactus.frontmatter.address1}
                <br />
                {contactus.frontmatter.address2}
                <br />
                {contactus.frontmatter.cityPIN} <br />
                {contactus.frontmatter.stateCountry}
                <br />
                <br />
                {contactus.frontmatter.phone} <br />
                <a href={`mailto:${contactus.frontmatter.email}`}>
                  {contactus.frontmatter.email}
                </a>
              </span>
            </div>
          </div>
          <div className="flex ml-16 mt-16" style={{ maxWidth: '50rem' }}>
            <div className="flex-col text-white">
              <h1 className="text-left sm:p-3 md:p-4 sm:text-xl md:text-2xl lg:pt-10">
                {contactus.frontmatter.heading}
              </h1>
              <p className="text-left py-4 sm:px-2 sm:text-xl md:text-xl font-light">
                {contactus.frontmatter.subheading}
              </p>
              <div className="flex flex-col sm:px-2">
                <ValidatorForm
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}
                  name="Contact"
                  ref={f => (this.form = f)}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="pb-5"
                >
                  {submitError && <p className="">{submitError}</p>}
                  <TextValidator
                    id="firstname"
                    name="firstname"
                    placeholder="First Name *"
                    value={firstname}
                    onChange={this.handleChange}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    margin="normal"
                    className="input-field"
                  />
                  <TextValidator
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name *"
                    value={lastname}
                    onChange={this.handleChange}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    margin="normal"
                    className="input-field"
                  />
                  <TextValidator
                    id="email"
                    name="email"
                    placeholder="E-mail *"
                    value={email}
                    onChange={this.handleChange}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'This field is required',
                      'E-mail is not valid',
                    ]}
                    margin="normal"
                    className="input-field"
                  />
                  <TextValidator
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    value={company}
                    onChange={this.handleChange}
                    margin="normal"
                    className="input-field"
                  />
                  <TextValidator
                    id="message"
                    name="message"
                    placeholder="Message *"
                    multiLine
                    rows={4}
                    value={message}
                    onChange={this.handleChange}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    margin="normal"
                    className="input-field"
                  />
                  <input name="bot-field" style={{ display: 'none' }} />
                  <br />
                  <div className="float-right">
                    <button
                      role="submit"
                      aria-label="Submit"
                      type="submit"
                      className="rectButton"
                    >
                      Submit
                    </button>
                  </div>
                </ValidatorForm>
                {/* <div className="maps">
            <MapWithAMakredInfoWindow
              googleMapURL={GoogleMapsUrl}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              contactData={contactus.frontmatter}
              siteTitle={global.frontmatter.siteTitle}
            />
          </div> */}
              </div>
              <SEO
                postPath={contactus.frontmatter.path}
                postNode={contactus}
                postSEO
              />
              {showMessage &&
                this.displayAlert(contactus.frontmatter.submitMsg)}
              {showError &&
                this.displayAlert(
                  'Sorry, we have trouble submitting your form. Please try again later'
                )}
            </div>
          </div>
        </div>
      </FullLayout>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactForm

export const pageQuery = graphql`
  query ContactUsQuery($path: String!) {
    contactus: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        heading
        subheading
        title
        address1
        address2
        cityPIN
        stateCountry
        phone
        email
        submitMsg
        map {
          position {
            lat
            long
          }
          center {
            lat
            long
          }
        }
      }
    }
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
      }
    }
  }
`
