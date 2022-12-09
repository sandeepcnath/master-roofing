import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Product = ({ pageContext, location }) => {
  const { product } = pageContext
  console.log("product", product)
  console.log("product", product.uid)
  return (
    <Layout location={location} title="Master Roofing">
      <Seo title={product.data.title.text} />
      <section className="inner-page">
        <div className="section__inner">
          <h1>{product.data.title.text}</h1>
        </div>
      </section>
    </Layout>
  )
}

export default Product
