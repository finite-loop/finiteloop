import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
export default ({ node }) => {
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  console.log(language)
  return (
    <SyntaxHighlighter language={language || "text"} style={materialDark}>
      {code}
    </SyntaxHighlighter>
  )
}
