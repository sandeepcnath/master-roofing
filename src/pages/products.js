import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const ProducsPage = ({ location }) => {
  return (
    <Layout location={location} title="Master Roofing">
      <Seo title="Products | Master Roofing" />
    </Layout>
  )
}

export default ProducsPage
