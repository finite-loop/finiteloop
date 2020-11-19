import React from "react"

const HorizontalLine = props => {
  const height = props.node.height

  return (
    <hr
      style={{
        height: { height },
      }}
    />
  )
}

export default HorizontalLine
