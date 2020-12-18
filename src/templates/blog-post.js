import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const blogPostTemplate = ({ pathContext }) => {
  const { title } = pathContext

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

export default blogPostTemplate
