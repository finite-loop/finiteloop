import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import bgimage from "./finiteloop_bg_home.png"

const about = ({ data }) => {
  console.log(data)
  return (
    <div className="m-2">
      <section
        className="bg-cover h-half bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <p className="text-white absolute ">{data.about.heroContent}</p>
      </section>
      <section className="">
        <h2> Studio Culture</h2>
        <div className="">
          <article>
            <p>{data.about.studioCultureLeft}</p>
          </article>
          <article>{data.about.studioCultureRight}</article>
        </div>
      </section>
      <section>
        <h2>Our Team</h2>
        <div className="container m-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.team.nodes.map(member => (
              <div className="p-5">
                <Img
                  fluid={member.image.asset.fluid}
                  className="w-16 h-16 mr-2 rounded-full"
                />
                <h3 style={{ marginBottom: 0 }}>
                  <strong>{member.name}</strong>
                </h3>
                <h5 style={{ marginTop: 0 }}>{member.role}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  {
    about: sanityAbout(slug: { current: { eq: "about" } }) {
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
            fixed(width: 200, height: 200) {
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
