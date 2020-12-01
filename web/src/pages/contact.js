<<<<<<< HEAD
import React, { useState, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form"
=======
import React, {useState, useRef} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form";

>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a

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

<<<<<<< HEAD
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = formData => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact", ...formData }),
    })
      .then(() => {
        alert(
          "Thank you for submitting your valuable inputs, we will get back to you soon."
        )
      })
      .catch(error => {
        console.error("Form submission error:", error)
        alert(
          "Sorry, we have trouble submitting your form. Please try again later"
        )
      })
=======
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (formData) => {
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'Contact', ...formData }),
      })
        .then(() => {
          alert("Thank you for submitting your valuable inputs, we will get back to you soon.");
        })
        .catch(error => {
          console.error('Form submission error:', error);
          alert("Sorry, we have trouble submitting your form. Please try again later");
        })
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
  }

  return (
    <Layout container>
      <div className="flex xl:flex-no-wrap sm:flex-wrap lg:flex-wrap sm:my-16 lg:my-32">
        <div className="flex sm:px-10 sm:py-24 lg:px-38 lg:py-32 sm:w-full lg:w-auto bg-white flex-wrap">
          <div className="flex-col opacity-75" style={{ color: "#E05455" }}>
            <h1 className="text-4xl mb-10">Contact Us</h1>
            <h3 className="text-xl pb-2 font-semibold">{contactData.title}</h3>
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
                style={{ color: "#424242" }}
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
                style={{ color: "#424242" }}
              >
                {contactData.email}
              </a>
            </span>
          </div>
          <div
            className="flex sm:mx-2 lg:mx-16 mt-16"
<<<<<<< HEAD
            style={{ maxWidth: "55rem" }}
=======
            style={{ maxWidth: '55rem' }}
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
          >
            <div className="flex-col text-white">
              <h1 className="text-left sm:p-2 sm:text-xl md:text-2xl lg:pt-10">
                {contactData.heading}
              </h1>
              <p className="text-left py-4 sm:px-2 sm:text-xl md:text-xl font-light">
                {contactData.SubHeading}
              </p>
              <div className="flex flex-col sm:px-2">
                <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    id="firstname"
                    name="firstname"
                    placeholder="First Name *"
                    margin="normal"
                    className="input-field mb-1"
                    ref={register({
<<<<<<< HEAD
                      required: "This field is required",
=======
                      required: "This field is required"
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
                    })}
                  />
                  {errors.firstname && errors.firstname.message}
                  <input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name *"
                    margin="normal"
                    className="input-field mt-2 mb-1"
                    ref={register({
<<<<<<< HEAD
                      required: "This field is required",
                    })}
                  />
                  {errors.lastname && errors.lastname.message}
                  <input
=======
                      required: "This field is required"
                    })}
                  />
                  {errors.lastname && errors.lastname.message}
                  <input 
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
                    id="email"
                    name="email" 
                    placeholder="E-mail *"
                    margin="normal"
<<<<<<< HEAD
                    className="input-field mt-2 mb-1"
=======
                    className="input-field mt-2 mb-1" 
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
                    ref={register({
                      required: "This field is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
<<<<<<< HEAD
                        message: "E-mail is not valid",
                      },
                    })}
                  />
                  {errors.email && errors.email.message}
=======
                        message: "E-mail is not valid"
                      }
                    })}/>
                    {errors.email && errors.email.message}
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
                  <input
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    margin="normal"
                    className="input-field mt-2 mb-1"
                    ref={register()}
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message *"
                    rows={4}
                    margin="normal"
                    className="input-field mt-2 mb-1"
                    ref={register({
<<<<<<< HEAD
                      required: "This field is required",
=======
                      required: "This field is required"
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
                    })}
                  />
                  {errors.message && errors.message.message}
                  <div className="float-right">
                    <button
                      role="submit"
                      aria-label="Submit"
                      type="submit"
                      className="rectButton"
<<<<<<< HEAD
                      style={{ cursor: "pointer" }}
=======
                      style={{cursor: "pointer"}}
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
<<<<<<< HEAD
              <SEO postPath={"/contact"} />
=======
              <SEO
                postPath={'/contact'}
              />
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

<<<<<<< HEAD
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
=======

function encode(data) {
return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
>>>>>>> 36a32204348436f37daaef5cecd1c5dedb31832a
