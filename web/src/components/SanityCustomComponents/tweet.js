import React from "react"
import { Tweet } from "react-twitter-widgets"

const Twitter = props => {
  const url = props.node.url
  const list = url.split("/")

  const id = list.pop()

  return (
    <div style={{ textAlign: "center" }}>
      <Tweet tweetId={id} options={{ align: "center" }} />
    </div>
  )
}

export default Twitter
