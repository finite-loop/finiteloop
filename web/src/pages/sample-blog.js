import React from "react"
import { graphql } from "gatsby"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "../components/SanityTextEditorComponents/block-content"
import clientConfig from "../../client-config"

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
    <article className="m-2">
      <div>
        {data.sanityBlog.mainImage && data.sanityBlog.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(data.sanityBlog.mainImage))
              // .width(1400)
              // .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={data.sanityBlog.mainImage.alt}
            className="h-auto object-contain sm:object-cover md:object-fill lg:object-none xl:object-cover text-center"
          />
        )}
      </div>
      <div className="m-10">
        <h1 className="text-3xl font-semibold text-center m-5">
          {data.sanityBlog.title}
        </h1>
        <h3 className="text-2xl font-semibold text-center">
          {data.sanityBlog.author.name}
        </h3>
      </div>
      <div className="mt-8 sm:mr-6 md:mb-4 lg:ml-2 xl:m-20 bg-yellow-200-md mx-auto">
        {data.sanityBlog._rawBody && (
          <BlockContent blocks={data.sanityBlog._rawBody || []} />
        )}
      </div>
    </article>
  )
}

export const query = graphql`
  {
    sanityBlog {
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
      author {
        name
      }
    }
  }
`

export default SampleBlog
