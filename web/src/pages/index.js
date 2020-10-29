import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Finiteloop" />
    <h1 className="heroText">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <div className="font-bold text-fl-secondary">tailwind test</div>
    <Link to="/project/finiteloop">Project - finiteloop</Link>
    <Link to="/project/cirrus">Project - cirrus</Link>
  </Layout>

  // <Layout>hello</Layout>
)

export default IndexPage
