import React, { useState } from "react"
import { graphql } from "gatsby"
import ProjectsList from "../components/ProjectsList"
// import "../pages/index.css"
import { MdStarBorder } from "react-icons/md"
import system from "../images/system.jpg"
import noimage from "../images/noimage.png"
import { FaQuoteLeft } from "react-icons/fa"
import Layout from "../components/layout"

const Work_template = ({ data }) => {
  console.log(data)
  const types = ["Technology", "Design", "Data Science"]
  const [selectedType, setSelectedType] = useState("Technology")
  const contents = [
    {
      title: "How To Look Up",
      text:
        "The buying of large-screen TVs has absolutely skyrocketed lately. It seems that everyone wants one – and with good reason. The large-screen TV has come a long way from those faded-out behemoths of old that took up half your living room ",
    },
    {
      title: "Telescopes 101",
      text:
        "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology than we’ve ever had access to before. From your wrist watch to your laptop, a lot of the on the go electronics",
    },
    {
      title: "Look Up In The Sky",
      text:
        "If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is one of the options you won’t resist. Printing is a widely use process in making printed materials that are used for advertising. Brochure, catalogs, flyers",
    },
  ]
  return (
    <Layout>
      <div className="font-sans font-light relative">
        <section
          className="bg-cover h-forty bg-center relative"
          style={{
            background: "#C9CCD3",
            backgroundImage:
              "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
            backgroundBlendMode: "lighten",
          }}
        >
          <div className="absolute top-1/6 left-1/6 w-1/2 ">
            <div className="text-3xl font-bold py-5">{data.work.name}</div>
            <div className="text-lg">
              I can change any and everything in my life by simply changing
              myself. This puts me in the driving seat of my life and makes
            </div>
          </div>
          <div className="absolute bottom-1/5 left-1/6">
            <div className="grid grid-flow-col grid-cols-3 gap-5">
              {types.map(type => (
                <div className="flex flex-col justify-items-center items-center">
                  <div
                    className="text-white w-10 h-10 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "#868f96", cursor: "pointer" }}
                    onClick={() => setSelectedType(type)}
                    onKeyDown={() => setSelectedType(type)}
                    role="button"
                    tabIndex="0"
                  >
                    <MdStarBorder style={{ color: "#eef1f5" }} />
                  </div>
                  <div className="mt-3 font-bold">{type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <ProjectsList type={selectedType} />
        </div>
        <div>
          <p className="w-3/5 mx-auto m-10 p-10">
            The moon works its way into our way of thinking, our feelings about
            romance, our poetry and literature and even how we feel about our
            day in day out lives in many cases. It is not only primitive
            societies that ascribe mood swings, changes in social conduct and
            changes in weather to the moon. Even today, a full moon can have a
            powerful effect on these forces which we acknowledge even if we
            cannot explain them scientifically.
          </p>
        </div>
        <hr />
        <section className="py-10 w-5/6 mx-auto text-center">
          <img src={system} alt="system" className="w-3/5" />
          <p className="w-3/5 mx-auto m-5 p-5">
            When you enter into any new area of science, you almost always find
            yourself with a baffling new language of technical terms to learn
            before you can converse with the experts.
          </p>
        </section>
        <hr />
        <section className=" w-5/6 mx-auto p-10">
          <div className="grid grid-flow-col gap-3 grid-col-3 p-3">
            {contents.map(content => (
              <div>
                <div className="flex flex-col">
                  <div
                    className="w-6 h-6 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: "grey" }}
                  >
                    <MdStarBorder style={{ color: "white" }} />
                  </div>
                  <p className="font-bold text-sm">{content.title}</p>
                  <p className="text-sm">{content.text}</p>
                  <a
                    href="/"
                    className="text-orange-600  text-xs font-bold no-underline"
                  >
                    learn more {" > "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr />
        <section>
          <div className="flex flex-row items-center justify-center">
            <p className="font-extrabold text-2xl text-gray-600 p-2">{"<"}</p>
            <img src={noimage} alt="noimage" className="p-3 m-6" />
            <div className="m-4 p-4 mt-12">
              <FaQuoteLeft className="text-3xl my-2" />
              <p className="w-11/12">
                Est tation latine aliquip id, mea ad tale illud definitiones.
                Periculis omittantur necessitatibus eum ad, pro eripuit minimum
                comprehensam ne, usu cu stet prompta reformidans.
              </p>
              <p className="text-xs">Connie Robertson at Google</p>
            </div>
            <p className="font-extrabold text-gray-600  text-2xl p-2">{">"}</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getWork($slug: String) {
    work: sanityWork(slug: { current: { eq: $slug } }) {
      name
      categories {
        category
        field_projects {
          title
        }
      }
    }
  }
`

export default Work_template
