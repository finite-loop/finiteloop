import React, { useState } from "react"
import Layout from "../components/layout"
import sky from "../images/picsky.jpg"
import radio from "../images/radio.jpg"
import hubble from "../images/hubble.jpg"
import asteriod from "../images/asteriod.jpeg"
import bgimage from "../images/telescope.jpg"
import { MdStarBorder } from "react-icons/md"
const Initiatives_template = () => {
  const [selected, setSelected] = useState("Tab 1")
  var list = {
    "Tab 1": [
      {
        title: "Pictures In The Sky",
        image: sky,
        type: "Telescopes 101",
      },
      {
        title: "Asteroids",
        image: asteriod,
        type: "Telescopes 101",
      },
      {
        title: "The Amazing Hubble",
        image: hubble,
        type: "Telescopes 101",
      },
      {
        title: "Radio Astronomy",
        image: radio,
        type: "Telescopes 101",
      },
    ],
    "Tab 2": [
      {
        title: "Radio Astronomy",
        image: radio,
        type: "Telescopes 102",
      },
      {
        title: "Pictures In The Sky",
        image: sky,
        type: "Telescopes 102",
      },
      {
        title: "Asteroids",
        image: asteriod,
        type: "Telescopes 102",
      },
      {
        title: "The Amazing Hubble",
        image: hubble,
        type: "Telescopes 102",
      },
    ],
    "Tab 3": [
      {
        title: "The Amazing Hubble",
        image: hubble,
        type: "Telescopes 103",
      },
      {
        title: "Radio Astronomy",
        image: radio,
        type: "Telescopes 103",
      },
      {
        title: "Pictures In The Sky",
        image: sky,
        type: "Telescopes 103",
      },
      {
        title: "Asteroids",
        image: asteriod,
        type: "Telescopes 103",
      },
    ],
  }
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
  const information = [
    {
      title: "Off To See The Wizard",
      text:
        "Last month, my wife, Anne Doe, took me to Las Vegas because she had to go for a business convention. Needless to say, she writes for an guide to casinos and I hate gambling. But then, she likes it and this supports us too.",
    },
    {
      title: "A World Of Infinite",
      text:
        "A subscriber recently wrote to me: A friend of mine is on a fixed income and has maxed out his credit cards (nearing $10,000). He has started a new business, but currently has no customers or prospects. He is affirming that.",
    },
    {
      title: "Benjamin Franklin",
      text:
        "Last month, my wife, Anne Doe, took me to Las Vegas because she had to go for a business convention. Needless to say, she writes for an guide to casinos and I hate gambling. But then, she likes it and this supports us too.",
    },
  ]
  return (
    <Layout>
      <div className="font-sans font-light">
        <section
          className="relative bg-cover h-half bg-center text-white "
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="absolute top-1/4 left-1/6 w-2/6 leading-normal">
            <div className="text-3xl font-bold ">
              The Basics Of Buying A Telescope
            </div>
            <p className=" text-lg mt-4">
              Poster can be one of the effective marketing and advertising
              materials. It is also a great tool to use when you want to present
              your services.
            </p>
            <a
              href="#"
              className="text-orange-600  text-xs font-bold no-underline"
            >
              learn more {" > "}
            </a>
          </div>
        </section>
        <div>
          <section className=" w-10/12 mx-auto">
            <h2 className="text-xl text-center p-10 m-2">Events</h2>
            <div className="font-bold text-center text-3xl w-3/6 mx-auto leading-snug">
              Addiction When Gambling Becomes A Problem
            </div>
            <div className="text-gray-700  text-center text-sm mx-auto w-3/5 m-8">
              Are you considering buying a compatible inkjet cartridge for your
              printer? There are many reputed companies like Canon, Epson, Dell,
              and Lexmark.
            </div>
            <div className="mx-auto text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Cnas3DmIMt0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullFcreen
              ></iframe>
            </div>
          </section>
          <hr className="mt-10" />
          <section className=" w-10/12 mx-auto">
            <h2 className="text-xl text-center p-10 m-2">Projects</h2>
            <div className="text-gray-700  text-center text-sm mx-auto w-3/5">
              I’m not really sure how old I was when I got the gift for
              Christmas, but I remember thinking it was a pretty impressive
              piece of electronic hardware.
            </div>
            <div className="text-center m-4 ">
              {Object.keys(list).map(item => (
                <span
                  className="font-bold"
                  style={{
                    borderBottom: "1px solid",
                    paddingBottom: "3px",
                    color: selected === item ? "orange" : "black",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected(item)}
                  onKeyDown={() => setSelected(item)}
                  role="button"
                  tabIndex="0"
                >
                  &nbsp;{item} &nbsp;
                </span>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-4 text-white w-11/12 mx-auto p-5 m-3">
              {list[selected].map(item => {
                return (
                  <div
                    className="relative max-w-sm rounded overflow-hidden shadow-lg h-thirty flex justify-center items-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    {/* <img class="w-full" src={item.image} alt="mountains"></img> */}

                    <p className="absolute bottom-1/6 text-gray-200 text-base">
                      {item.type}
                    </p>
                    <div className=" absolute bottom-1/7 font-bold text-xl mb-2">
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
          <hr className="mt-10" />
          <section className=" w-10/12 mx-auto">
            <h2 className="text-xl text-center p-10 m-2">Opensource</h2>
            <div className="font-bold text-center text-3xl w-3/6 mx-auto leading-snug">
              Help Finding Information Online
            </div>
            <div className="text-gray-700  text-center text-sm mx-auto w-3/5 m-8">
              I can change any and everything in my life by simply changing
              myself. This puts me in the driving seat of my life and makes
            </div>
            <div className="grid grid-flow-col gap-3 grid-col-3 p-3 mb-5">
              {information.map(info => (
                <div>
                  <div className="flex flex-col">
                    <div
                      className="w-10 h-10 rounded-full flex justify-center items-center mx-auto my-6"
                      style={{
                        backgroundColor: "LightGray",
                        textAlign: "center",
                      }}
                    >
                      <MdStarBorder
                        style={{ color: "white", textAlign: "center" }}
                        className="text-3xl"
                      />
                    </div>
                    <p className="font-bold text-center text-sm">
                      {info.title}
                    </p>
                    <p className="text-sm text-center">{info.text}</p>
                    <a
                      href="#"
                      className="text-orange-600 text-center text-xs font-bold no-underline"
                    >
                      learn more {" > "}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center ">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-bold py-1 px-2 rounded inline-flex items-center">
                Button
              </button>
            </div>
          </section>
          <hr className="mt-10" />
          <section className=" w-10/12 mx-auto">
            <h2 className="text-xl text-center p-8 m-1">Buy From us</h2>
            <div className="text-gray-700  text-center text-sm mx-auto w-3/5 mb-4">
              I can change any and everything in my life by simply changing
              myself. This puts me in the driving seat of my life and makes
            </div>
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
                      href="#"
                      className="text-orange-600  text-xs font-bold no-underline"
                    >
                      learn more {" > "}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <hr className="mt-10 mb-20" />
        </div>
      </div>
    </Layout>
  )
}

export default Initiatives_template
