import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import Home from "../templates/home"
import Welcome from "../components/welcome"
import Cases from "../components/cases"
import Articles from "../components/articles"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Home>
      <Welcome />
      <Cases sectionId="portfolio" />
      <Articles sectionId="artigos" />
    </Home>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
