import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"
import { IoIosCloseCircleOutline } from "react-icons/io"

const ContactPage = ({ data }) => {
  const blogs = data.allBlogs.nodes.sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  )
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs)
  const [filters, setFilters] = React.useState([])
  const [tagFilter, setTagFilter] = React.useState("")
  const [authorFilter, setAuthorFilter] = React.useState("")

  const filterDataByTag = tagFilter => {
    console.log(tagFilter)
    if (tagFilter !== "") {
      var newBlogs = filteredBlogs.filter(blog => blog.tags.includes(tagFilter))
      setTagFilter(tagFilter)
      setFilteredBlogs(newBlogs)
      //var filter = { name: tagFilter, type: "tag" }
      if (!filters.includes(tagFilter)) {
        setFilters(filters.concat(tagFilter))
      }
    }
  }

  const filterDataByAuthor = authorFilter => {
    if (authorFilter !== "") {
      var newBlogs = filteredBlogs.filter(
        blog => blog.author.name === authorFilter
      )
      setAuthorFilter(authorFilter)
      setFilteredBlogs(newBlogs)
      //var filter = { name: authorFilter, type: "author" }
      if (!filters.includes(authorFilter)) {
        setFilters(filters.concat(authorFilter))
      }
    }
  }
  const clearFilter = () => {
    setFilteredBlogs(blogs)
    setFilters([])
  }
  const clearTagFilter = () => {
    setTagFilter("")
    if (authorFilter) {
      filterDataByAuthor(authorFilter)
    } else {
      setFilteredBlogs(blogs)
    }
  }
  const clearAuthorFilter = () => {
    setAuthorFilter("")
    if (tagFilter) {
      filterDataByAuthor(tagFilter)
    } else {
      setFilteredBlogs(blogs)
    }
  }
  console.log(filteredBlogs)
  return (
    <Layout>
      <Helmet title="Blogs" />
      <div className="para-primary m-0">
        <p className="m-0">Blogs</p>{" "}
        {/* {filters ? (
          <>
            {filters.map((filter, i) => (
              <span
                //className="inline-block  bg-white rounded-full  px-10 py-1 text-lg font-light text-grey-600 mr-2 mb-2"
                className="m-0 p-0 capitalize"
                style={{ cursor: "pointer" }}
                onClick={clearFilter}
              >
                {i != 0 ? "and" : ""} {filter}{" "}
              </span>
            ))}
          </>
        ) : (
          <></>
        )} */}
      </div>
      {tagFilter !== "" ? (
        <span
          className=" relative capitalize inline-block bg-white rounded-full pr-8 pl-5 py-2 text-lg font-semibold text-black mr-2 mb-2"
          style={{ cursor: "pointer" }}
          onClick={clearTagFilter}
        >
          {tagFilter}
          <IoIosCloseCircleOutline
            className=" absolute py-1 mb-0 mx-2"
            style={{ right: 0 }}
          />
        </span>
      ) : (
        <></>
      )}
      {authorFilter !== "" ? (
        <span
          className=" relative capitalize inline-block bg-white rounded-full pr-8 pl-5 py-2 text-lg font-semibold text-black mr-2 mb-2"
          style={{ cursor: "pointer" }}
          onClick={clearAuthorFilter}
        >
          {authorFilter}
          <IoIosCloseCircleOutline
            className=" absolute py-1 mb-0 mx-2"
            style={{ right: 0 }}
          />
        </span>
      ) : (
        <></>
      )}
      {/* {filters ? (
        <>
          {filters.map(filter => (
            <span
              className="inline-block  bg-white rounded-full  px-10 py-1 text-lg font-light text-grey-600 mr-2 mb-2"
              style={{ cursor: "pointer" }}
              onClick={clearFilter}
            >
              {filter.name}
            </span>
          ))}
        </>
      ) : (
        <></>
      )} */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredBlogs.map(blog => (
          <BlogList
            blog={blog}
            filterDataByAuthor={filterDataByAuthor}
            filterDataByTag={filterDataByTag}
            filters={filters}
          />
        ))}
      </div>
      <SEO />
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  {
    allBlogs: allSanityBlog {
      nodes {
        slug {
          current
        }
        title
        author {
          name
          image {
            asset {
              url
            }
          }
        }
        tags
        body {
          children {
            text
          }
        }
        publishedAt(formatString: "MM/DD/YYYY")
        time: publishedAt(difference: "hours")
        read_time
        mainImage {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
            fixed(width: 370, height: 200) {
              ...GatsbySanityImageFixed
            }
            url
          }
        }
      }
    }
  }
`
