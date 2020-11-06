import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
const BlogList = ({ blog, filterDataByAuthor, filterDataByTag, filters }) => {
  // const [tagFilter, setTagFilter] = React.useState("")
  // const [authorFilter, setAuthorFilter] = React.useState("")

  const filterByTag = tag => {
    //if (tagFilter === "") {
    //setTagFilter(tag)
    filterDataByTag(tag)
    //}
  }

  const filterByAuthor = author => {
    //if (authorFilter === "") {
    //setAuthorFilter(author)
    filterDataByAuthor(author)
    // }
  }

  return (
    <div>
      <div
        className="bg-white rounded max-w-3xl shadow-lg"
        style={{ width: 370 }}
      >
        <Link
          to={blog.slug.current}
          className="text-black"
          style={{ textDecoration: "none" }}
        >
          {/* <img
            style={{
              backgroundColor: "#E05455",
              height: 200,
              width: 370,
            }}
            className="object-cover"
            src={blog.mainImage.asset.url}
          /> */}
          <Img fixed={blog.mainImage.asset.fixed} />
        </Link>
        <div className="p-2">
          <div className="px-1 pt-0 pb-0">
            {blog.tags.map(tag => (
              <span
                className="inline-block bg-gray-400 rounded-full px-5 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
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
            <h2 className="text-lg font-semibold my-0 py-0">{blog.title}</h2>
            <p className="py-0 my-1">
              {(
                blog.body[0].children[0].text + blog.body[1].children[0].text
              ).slice(0, 65)}{" "}
              ...
            </p>
          </Link>
          <div className="flex items-center">
            <div
              className="rounded-full h-10 w-10 flex items-center justify-center"
              style={{
                backgroundImage: `url(${blog.author.image.asset.url})`,
                backgroundSize: "cover",
              }}
            />
            <div className="text-sm pb-3">
              <p
                className="text-gray-900 leading-none my-0 py-1 px-2"
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
  )
}

export default BlogList
