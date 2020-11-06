import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "../components/SanityTextEditorComponents/block-content"
import clientConfig from "../../client-config"
import Layout from "../components/layout"
const builder = imageUrlBuilder(clientConfig.sanity)

function imageUrlFor(source) {
  return builder.image(source)
}

function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }
  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

const SampleBlog = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <article className="m-2 bg-white">
        <div className="m-10 w-2/3 mx-auto">
          <h1 className="text-5xl font-semibold pt-10 mb-4">
            {data.blog.title}
          </h1>
          <div class="flex items-center">
            <Img
              fluid={data.blog.author.image.asset.fluid}
              className="h-12 w-12 md:h-14 md:w-14 justify-center lg:h-12 lg:w-12 mr-2 rounded-full border-solid border-2"
              style={{
                borderColor: "rgb(247, 222, 215)",
                display: "inline-block",
              }}
            />
            <span>
              <span className=" inline text-2xl font-semibold text-gray-900 leading-none">
                {data.blog.author.name}
              </span>
              <p className="text-gray-600 my-0 py-0 text-sm">
                {data.blog.publishedAt}{" "}
                <span className="">
                  {" - "}
                  <li className="inline-block">
                    {" "}
                    {data.blog.read_time} min read
                  </li>{" "}
                </span>{" "}
              </p>
            </span>
          </div>
        </div>
        <div className="container w-2/3 mx-auto">
          {data.blog.mainImage && data.blog.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(data.blog.mainImage))
                // .width(1400)
                // .height(Math.floor((9 / 16) * 1200))
                // .fit("crop")
                .url()}
              alt={data.blog.mainImage.alt}
              className="h-auto object-contain sm:object-contain md:object-contain lg:object-contain xl:object-contain text-center w-full"
            />
          )}
        </div>
        <div className=" w-5/6 mx-auto">
          <div className="mt-8 sm:mr-6 md:mb-4 lg:ml-2 xl:m-20 bg-yellow-200-md">
            {data.blog._rawBody && (
              <BlockContent blocks={data.blog._rawBody || []} />
            )}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getBlog($slug: String) {
    blog: sanityBlog(slug: { current: { eq: $slug } }) {
      _rawBody
      title
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      read_time
      author {
        name
        image {
          asset {
            fixed(width: 125, height: 125) {
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

export default SampleBlog
