import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import bgimage from "./finiteloop_bg_home.png"
import logo from "../images/flLogo.png"
import OurWay from "../components/OurWay"
import "../pages/index.css"
import Layout from "../components/layout"

const about = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="font-sans font-light">
        <section
          className="relative bg-cover h-half bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <p className="text-white absolute text-2xl top-1/3 left-1/5 w-2/5 ">
            Ad eos saepe lucilius, noster postulant philosophia ea usu, qui
            dicta sadipscing te.
          </p>
        </section>
        <div className="w-11/12 mx-auto">
          <section className="">
            <h2 className="text-2xl text-center p-10 m-2"> Studio Culture</h2>
            <div className="grid grid-cols-2 m-8 items-center">
              <div className="col-span-1 ">
                <article className="w-2/3 text-xl mx-auto">
                  <p className="m-auto">
                    Like anything else, can go from the simple to the very
                    complex. To gaze at the moon with the naked eye, making
                    yourself.
                  </p>
                </article>
              </div>
              <div>
                <article className="col-span-1 text-sm">
                  <p>
                    When you enter into any new area of science, you almost
                    always find yourself with a baffling new language of
                    technical terms to learn before you can converse with the
                    experts. <br></br> <br />
                    This is certainly true in astronomy both in terms of terms
                    that refer to the cosmos and terms that describe the tools
                    of the trade, the most prevalent being the telescope. So to
                    get us off of first base, let’s define some of the key terms
                    that pertain to telescopes to help you be able to talk to
                    them more intelligently.{" "}
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl text-center p-10 m-2">Our Team</h2>
            <div className="mx-auto w-1/3 ">
              <p className="text-md text-center ">
                I’m not really sure how old I was when I got the gift for
                Christmas, but I remember thinking it was a pretty impressive
                piece of electronic hardware.
              </p>
            </div>
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center ">
                {data.team.nodes.map(member => (
                  <div
                    className="p-5 a flex flex-col justify-items-center items-center"
                    key={member.name}
                  >
                    <Img
                      fixed={member.image.asset.fixed}
                      className="justify-center w-10 h-10 mr-2 rounded-full"
                    />
                    <p style={{ marginBottom: 0 }}>
                      <strong>{member.name}</strong>
                    </p>
                    <p className="text-xs" style={{ marginTop: 0 }}>
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <div>
              <div
                className="flex border border-solid border-gray-300 mx-auto rounded"
                style={{ maxWidth: "80%" }}
              >
                <div className=" bg-white rounded p-4 flex flex-col justify-between leading-normal m-12">
                  <div className="m-8 my-auto">
                    <div className="mb-4">
                      <div className="text-gray-900 font-bold text-xl ">
                        Marc Jensen
                      </div>
                      <div className="text-gray-600 text-sm">
                        UI/UX Designer
                      </div>
                    </div>
                    <span>
                      <p className="text-gray-700 text-xs ">
                        Meteoroid is actually a small piece of space rubble,
                        usually dust or small rocks that come from either a
                        comet or the break up of an asteroid in space and that
                        eventually plummets toward the earth. We say “toward the
                        earth” because the lights you see are the friction of
                        the atmosphere burning up those small space tidbits and
                        creating.
                      </p>
                    </span>
                  </div>
                </div>
                <div
                  className="h-auto lg:h-auto lg:w-5/12 flex-none bg-cover rounded text-center overflow-hidden"
                  style={{
                    backgroundImage: `url('https://i.pinimg.com/originals/37/35/ef/3735efded62478aae08e9868771abca8.png`,
                  }}
                  title="Woman holding a mug"
                ></div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl text-center p-10 m-2">Careers</h2>
            <div className="font-bold text-center text-2xl m-4 w-2/4 mx-auto">
              Freelance Design Tricks How To Get Away With Murder In The
              Workplace
            </div>
            <div className="text-gray-700 text-md mx-auto w-2/4 m-8">
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages, create a
              contact file, coordinate appointments, surf the internet, exchange
              text messages and more.
            </div>
            <div className="grid grid-flow-row grid-cols-4 gap-6 w-5/6 mx-auto">
              <div className="border-solid border-gray-200">
                <div className="p-3">
                  <div className="relative">
                    <strong className="text-sm font-bold">Unmatched </strong>
                    <span
                      className="absolute bg-orange-500 rounded-full h-5 w-6 inline-flex items-center justify-center"
                      style={{ right: 0 }}
                    >
                      4
                    </span>
                  </div>
                  <p className="text-xs mx-auto">
                    In the last five to six years the FTA satellite
                  </p>{" "}
                </div>
              </div>
              <div className="border-solid border-gray-200 ">
                <div className="p-3">
                  <div className="relative">
                    <strong className="text-sm font-bold">Life Advice</strong>
                    <span
                      className="absolute bg-orange-500 rounded-full h-5 w-6 inline-flex items-center justify-center"
                      style={{ right: 0 }}
                    >
                      4
                    </span>
                  </div>
                  <p className="text-xs mx-auto">
                    Do you know what could beat the exciting
                  </p>{" "}
                </div>
              </div>
              <div className="border-solid border-gray-200 ">
                <div className="p-3">
                  <div className="relative">
                    <strong className="text-sm font-bold">How to Excel </strong>
                    <span
                      className="absolute bg-orange-500 rounded-full h-5 w-6 inline-flex items-center justify-center"
                      style={{ right: 0 }}
                    >
                      4
                    </span>
                  </div>
                  <p className="text-xs mx-auto">
                    Protective Preventative Maintenance
                  </p>
                </div>
              </div>
              <div className="border-solid border-gray-200">
                <div className="p-3">
                  <div className="relative">
                    <strong className="text-sm font-bold">Party Jokes </strong>
                    <span
                      className="absolute bg-orange-500 rounded-full h-5 w-6 inline-flex items-center justify-center"
                      style={{ right: 0 }}
                    >
                      4
                    </span>
                  </div>
                  <p className="text-xs mx-auto">
                    Choosing The Best Audio Player Software
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr className=" my-12 min-w-full"></hr>
        <section>
          <div className="flex gap-0">
            <div className="flex flex-col w-2/6">
              <img src={logo} alt="logo" className="m-0" />
            </div>
            <div
              className="flex flex-col w-4/6"
              style={{ backgroundColor: "#616161" }}
            >
              <div className="p-10 m-10">
                <div className="text-2xl pb-8 text-white font-bold">
                  <span
                    style={{
                      borderBottom: "1px solid white",
                      paddingBottom: "3px",
                    }}
                  >
                    Our{" "}
                  </span>
                  Story
                </div>
                <div>
                  <p className="text-sm text-white">
                    Before we discuss all of the things that could be affecting
                    your PC’s performance, let’s talk a little about what
                    symptoms a slow computer can have. In addition to being
                    excruciatingly slow when it comes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <OurWay />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getAbout($slug: String) {
    about: sanityAbout(slug: { current: { eq: $slug } }) {
      studioCultureRight
      studioCultureLeft
      title
      slug {
        current
      }
      heroContent
      heroButtons
      heroMainImage {
        asset {
          _id
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    team: allSanityTeam {
      nodes {
        slug {
          current
        }
        role
        name
        image {
          asset {
            fixed(width: 75, height: 75) {
              ...GatsbySanityImageFixed
            }
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default about
