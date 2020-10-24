import React, { useState, useEffect } from "react"
import seek from "../images/seek.png"
import discover from "../images/dicsover.png"
import percieve from "../images/percieve.png"

const OurWay = () => {
  var items = [
    {
      title: "Our Way",
      image: seek,
      content:
        "Before we discuss all of the things that could be affecting your PC/’s performance, let’s talk a little about what symptoms a slow computer can have. In addition to being excruciatingly slow when               it comes",
    },

    {
      title: "Discovering",
      image: discover,
      content:
        "Problem definition starts here. This is a space for discovering the footprints.We identify specific areas of business, and social challenges. This is a place where brainstorming happens, story cards are used, feature lists prepared. Stakeholders identified and commit budgets, go/no-go gates are defined. The dots are all over the place. Together we explore.",
    },
    {
      title: "Perceiving",
      image: percieve,
      content:
        "Now, we see the challenge more clearly, without bias. We are close to perceiving the problem neutrally. We use specific techniques to de-color perceptions, and look at the problem with more awareness. It is space for prioritising, comparing, reviews on big picture. Understanding the problem right is half the problem solved. We cross the first gate. Deliverables take shape.",
    },
    {
      title: "Our Way",
      image: seek,
      content:
        "Before we discuss all of the things that could be affecting your PC/’s performance, let’s talk a little about what symptoms a slow computer can have. In addition to being excruciatingly slow when               it comes",
    },

    {
      title: "Discovering",
      image: discover,
      content:
        "Problem definition starts here. This is a space for discovering the footprints.We identify specific areas of business, and social challenges. This is a place where brainstorming happens, story cards are used, feature lists prepared. Stakeholders identified and commit budgets, go/no-go gates are defined. The dots are all over the place. Together we explore.",
    },
    {
      title: "Perceiving",
      image: percieve,
      content:
        "Now, we see the challenge more clearly, without bias. We are close to perceiving the problem neutrally. We use specific techniques to de-color perceptions, and look at the problem with more awareness. It is space for prioritising, comparing, reviews on big picture. Understanding the problem right is half the problem solved. We cross the first gate. Deliverables take shape.",
    },
    {
      title: "Our Way",
      image: seek,
      content:
        "Before we discuss all of the things that could be affecting your PC/’s performance, let’s talk a little about what symptoms a slow computer can have. In addition to being excruciatingly slow when               it comes",
    },

    {
      title: "Discovering",
      image: discover,
      content:
        "Problem definition starts here. This is a space for discovering the footprints.We identify specific areas of business, and social challenges. This is a place where brainstorming happens, story cards are used, feature lists prepared. Stakeholders identified and commit budgets, go/no-go gates are defined. The dots are all over the place. Together we explore.",
    },
    {
      title: "Perceiving",
      image: percieve,
      content:
        "Now, we see the challenge more clearly, without bias. We are close to perceiving the problem neutrally. We use specific techniques to de-color perceptions, and look at the problem with more awareness. It is space for prioritising, comparing, reviews on big picture. Understanding the problem right is half the problem solved. We cross the first gate. Deliverables take shape.",
    },
  ]

  const [currNum, setCurrNum] = useState(0)
  const [active, setActive] = useState(items[currNum])
  const [start, setStart] = useState(true)
  const [end, setEnd] = useState(false)

  useEffect(() => {
    setActive(items[currNum])
    if (currNum === items.length - 1) {
      setEnd(true)
    }
  }, [currNum])

  const goNext = event => {
    event.preventDefault()
    if (currNum < items.length - 1) {
      setCurrNum(currNum + 1)
      setStart(false)
    } else {
      setCurrNum(items.length - 1)
      setEnd(true)
    }
  }

  const previous = event => {
    event.preventDefault()
    if (currNum === items.length - 1) {
      setCurrNum(currNum - 1)
      setEnd(false)
    } else if (currNum > 1) {
      setCurrNum(currNum - 1)
    } else {
      setCurrNum(0)
      setStart(true)
      setEnd(false)
    }
  }
  return (
    <div className="pt-20">
      <div className="flex gap-0">
        <div className="flex flex-col w-2/6 bg-orange-600">
          <img src={active.image} alt="logo" className="m-0" />
        </div>
        <div
          className="flex flex-col w-4/6 relative"
          style={{ backgroundColor: "#616161" }}
        >
          <div className="p-10 m-10">
            <div className="text-xs text-white">
              {currNum + 1} out of {items.length}
            </div>
            <span>
              {Array(currNum + 1)
                .fill()
                .map((_, i) => (
                  <span
                    key={i}
                    className="mb-6"
                    style={{
                      borderBottom: "1px solid orange",
                      paddingBottom: "3px",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                ))}
              {Array(items.length - currNum - 1)
                .fill()
                .map((_, i) => (
                  <span
                    key={i}
                    className="mb-6"
                    style={{
                      borderBottom: "1px solid white",
                      paddingBottom: "3px",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                ))}
            </span>

            <div className="text-2xl pb-8 text-white font-bold pt-8">
              {active.title}
            </div>
            <div>
              <p className="text-sm text-white">{active.content}</p>
            </div>
          </div>
          <span
            className="absolute p-10 m-10 text-white"
            style={{ left: "0", bottom: "0", cursor: "pointer" }}
            onClick={previous}
            onKeyDown={previous}
            role="button"
            tabIndex="0"
          >
            {" < "}
          </span>
          <span
            className="absolute p-10 m-10 text-white"
            style={{ right: "0", bottom: "0", cursor: "pointer" }}
            onClick={goNext}
            onKeyDown={goNext}
            role="button"
            tabIndex="0"
          >
            {" > "}
          </span>
        </div>
      </div>
    </div>
  )
}

export default OurWay
