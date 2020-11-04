import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { ValidatorForm } from 'react-form-validator-core'
import TextValidator from '../components/TextValidator'

const ContactPage = () => {
    const data = useStaticQuery(graphql`
    query {
        sanityContactUs {
          mapCenterLat
          mapCenterLong
          title
          SubHeading
          address1
          address2
          cityPin
          email
          heading
          statecountry
        }
      }
  `)

  const contactData = data.sanityContactUs

  return (
    <Layout>
      <div className="flex xl:flex-no-wrap sm:flex-wrap lg:flex-wrap sm:my-16 lg:my-32">
          <div className="flex sm:px-10 sm:py-24 lg:px-38 lg:py-32 sm:w-full lg:w-auto bg-white flex-wrap">
            <div className="flex-col opacity-75" style={{ color: '#E05455' }}>
              <h1 className="text-4xl mb-10">Contact Us</h1>
              <h3 className="text-xl pb-2 font-semibold">
                {contactData.title}
              </h3>
              <span className="text-lg leading-normal">
                {contactData.address1}
                <br />
                {contactData.address2}
                <br />
                {contactData.cityPIN} <br />
                {contactData.stateCountry}
                <br />
                <a
                  className="font-medium"
                  style={{ color: '#424242' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.googe.com/maps/place/FiniteLoop/@12.9299324,77.5794589,16.12z/data=!4m12!1m6!3m5!1s0x0:0x3f38249791403c9a!2sFiniteLoop!8m2!3d12.9304017!4d77.5824309!3m4!1s0x0:0x3f38249791403c9a!8m2!3d12.9304017!4d77.5824309"
                >
                  Get Directions
                </a>
                <br />
                <br />
                <a
                  href={`mailto:${contactData.email}`}
                  className="font-medium"
                  style={{ color: '#424242' }}
                >
                  {contactData.email}
                </a>
              </span>
            </div>
          </div>
          <div
            className="flex sm:mx-2 lg:mx-16 mt-16"
            style={{ maxWidth: '55rem' }}
          >
            <div className="flex-col text-white">
              <h1 className="text-left sm:p-2 sm:text-xl md:text-2xl lg:pt-10">
                {contactData.heading}
              </h1>
              <p className="text-left py-4 sm:px-2 sm:text-xl md:text-xl font-light">
                {contactData.SubHeading}
              </p>
              {/* <div className="flex flex-col sm:px-2">
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
              </div> */}
              {/* <SEO
                postPath={contactus.frontmatter.path}
                postNode={contactus}
                postSEO
              /> */}
              {/* {showMessage &&
                this.displayAlert(contactus.frontmatter.submitMsg)}
              {showError &&
                this.displayAlert(
                  'Sorry, we have trouble submitting your form. Please try again later'
                )} */}
            </div>
          </div>
        </div>   
    </Layout>
  )
}

export default ContactPage
