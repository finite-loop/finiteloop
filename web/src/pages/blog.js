import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const ContactPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allSanityBlog {
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
              mainImage {
                alt
                asset {
                  url
                }
              }
            }
          }
      }
  `)

  const blogs = data.allSanityBlog.nodes;

  return (
    <Layout>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map(blog => (
            <Link to={blog.slug.current} className="text-black" style={{textDecoration: 'none'}}>
                <div className="bg-white p-1 rounded-md" style={{width: 300}}>
                    <div 
                        style={{
                            backgroundColor: "#E05455",
                            backgroundImage: `url(${blog.mainImage.asset.url})`,
                            backgroundSize: 'cover',
                            height: 400
                        }}
                        className="w-100 rounded-md" />
                    <div className="p-2">
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <div className="flex items-center">
                            <div className="rounded-full h-16 w-16 flex items-center justify-center" style={{backgroundImage: `url(${blog.author.image.asset.url})`, backgroundSize: 'cover'}}/>
                            <div className="text-xl font-semibold p-2 h-full">{blog.author.name}</div>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
        </div>
      <SEO/>
    </Layout>
  )
}

export default ContactPage
