import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import clientConfig from "../../../client-config"
import serializers from "./serializers"
import "./blockContent.css"

const BlockContent = ({ blocks }) => {
  console.log(blocks)
  console.log(serializers)
  return (
    <BaseBlockContent
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
      className="blog "
    />
  )
}

export default BlockContent