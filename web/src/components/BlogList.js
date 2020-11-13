import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
const BlogList = ({ blog, filterData }) => {
  const filterByTag = tag => {
    const data = {
      type: "tag",
      name: tag,
    }
    filterData(data)
  }
  const filterByAuthor = author => {
    const data = {
      type: "author",
      name: author,
    }
    filterData(data)
  }
  return (
    <div className="h-450 relative md:h-500 lg:h-500 xl:h-500">
      <div className="w-300 bg-white rounded max-w-3xl shadow-lg h-full leading-relaxed flex flex-col content-center md:w-370 lg:w-370 xl:w-370">
        <Link
          to={blog.slug.current}
          className="text-black"
          style={{ textDecoration: "none" }}
        >
          <div className="sm:hidden md:block lg:block xl:block">
            <Img fixed={blog.mainImage.asset.fixed} />
          </div>
          <div className="sm:block md:hidden lg:hidden xl:hidden">
            <Img fixed={blog.mainImage.asset.smallImage} />
          </div>
        </Link>
        <div className="p-2">
          <div className="px-1 pt-0 pb-0">
            {blog.tags &&
              blog.tags.map(tag => (
                <span
                  className="text-xs mr-1 mb-0 px-2 inline-block bg-gray-400 rounded-full md:px-5 lg:px-5 xl:px-5 py-1 lg:text-sm font-semibold text-gray-800 lg:mr-2 lg:mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByTag(tag)}
                >
                  #{tag}
                </span>
              ))}
          </div>
          <Link
            to={blog.slug.current}
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <h2
              className="text-sm md:text-lg lg:text-lg xl:text-lg font-semibold my-0 py-0 whitespace-pre-wrap"
              // style={{ whiteSpace: "pre" }}
            >
              {blog.title.length < 100 && blog.tags.length <= 3
                ? "\n" + blog.title + "\n"
                : blog.title}
            </h2>
            <p className="py-0 my-1">
              {(
                blog.body[0].children[0].text + blog.body[1].children[0].text
              ).slice(0, 80)}{" "}
              ...
            </p>
          </Link>
          <div className="absolute bottom-1/8 left-1/7">
            <div className=" flex items-center">
              <div
                className="rounded-full h-10 w-10 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${blog.author.image.asset.url})`,
                  backgroundSize: "cover",
                }}
              />
              <div className="text-sm pb-3">
                <p
                  className="text-gray-900 leading-none my-0 py-1 px-2 font-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => filterByAuthor(blog.author.name)}
                >
                  {blog.author.name}
                </p>
                <p className="text-gray-600 my-0 py-0 px-2">
                  {blog.publishedAt}{" "}
                  <span className="">
                    {" - "}
                    <li className="inline-block">
                      {" "}
                      {blog.read_time} min read
                    </li>{" "}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList
