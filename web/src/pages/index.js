import React, { useEffect } from "react"
import BlogLayout from "../components/blogLayout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogListPage from "../components/BlogListPage"
import { IoIosCloseCircleOutline } from "react-icons/io"

const BlogsPage = ({ data }) => {
  const [filters, setFilters] = React.useState([])
  const blogs = data.allBlogs.nodes.sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  )
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs)
  const siteSettings = data.sanitySiteSettings
  useEffect(() => {
    setFilteredBlogs(blogs)
    var newBlogs
    if (filters !== []) {
      filters.forEach(filter => {
        if (filter.type === "tag") {
          newBlogs = filteredBlogs.filter(blog =>
            blog.tags.includes(filter.name)
          )
          setFilteredBlogs(newBlogs)
        } else {
          newBlogs = filteredBlogs.filter(
            blog => blog.author.name === filter.name
          )

          setFilteredBlogs(newBlogs)
        }
      })
    }
  }, [filters])

  function containsObject(newFilter) {
    var contains = false
    filters.forEach(item => {
      if (item.name === newFilter.name) {
        contains = true
      }
    })
    return contains
  }
  const filterData = data => {
    const newFilter = data

    if (containsObject(newFilter)) {
    } else {
      setFilters(filters.concat(newFilter))
    }
  }

  const clearFilter = filter => {
    setFilteredBlogs(blogs)
    setFilters(filters.filter(filterData => filterData !== filter))
  }
  return (
    <BlogLayout>
      <Helmet title="Blogs" />
      <SEO
        title={`${siteSettings.siteTitle} | ${siteSettings.siteLongTitle}`}
        description={siteSettings.siteDesc}
      />
      <div className="pb-20">
        <div
          className="para-primary m-0 font-semibold"
          style={{ color: "#E05455" }}
        >
          <p className="m-0">Blogs</p>{" "}
        </div>

        {filters ? (
          <>
            {filters.map(filter => (
              <span
                className="pl-2 py-1 pr-5 text-xs relative capitalize inline-block bg-white rounded-full md:pr-8 md:pl-5 md:py-2 lg:pr-8 lg:pl-5 lg:py-2 xl:pr-8 xl:pl-5 xl:py-2 md:text-lg lg:text-lg xl:text-lg font-bold text-black mr-2 mb-2"
                style={{ cursor: "pointer" }}
                onClick={() => clearFilter(filter)}
                role="button"
                tabIndex="0"
                onKeyPress={() => clearFilter(filter)}
              >
                {filter.name}
                <IoIosCloseCircleOutline
                  className=" absolute py-1 mb-0 mx-2"
                  style={{ right: 0 }}
                />
              </span>
            ))}
          </>
        ) : (
          <></>
        )}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {filteredBlogs.map(blog => (
            <BlogListPage blog={blog} filterData={filterData} />
          ))}
        </div>
      </div>
      <SEO />
    </BlogLayout>
  )
}

export default BlogsPage

export const query = graphql`
  {
    sanitySiteSettings {
      introText
      introText2
      siteDesc
      siteLongTitle
      siteTitle
    }
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
            smallImage: fixed(width: 300, height: 170) {
              ...GatsbySanityImageFixed
            }
            url
          }
        }
      }
    }
  }
`