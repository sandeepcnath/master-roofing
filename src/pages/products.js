import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactInfo from "../components/contactInfo"
import PrimaryForm from "../components/primary-form/primary-form"
import "../styles/contact-us.css"

const ProductsPage = ({ data, location }) => {
  const productsPageData = data.prismicProductsPage.data
  const allPrismicProductsData = data.allPrismicProducts.nodes
  console.log("allPrismicProductsData", allPrismicProductsData)
  return (
    <Layout location={location} title="Master Roofing">
      <Seo title="Products" />
      <section className="inner-page">
        <div className="section__inner">
          <div className="section-title-wrap text-container">
            <h1>{productsPageData.title.text}</h1>
            <p className="section-subtitle">
              {productsPageData.page_subtext.text}
            </p>
          </div>
          <div className="content-grid">
            <ContactInfo />
            <PrimaryForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductsPage

export const pageQuery = graphql`
  query {
    prismicProductsPage {
      data {
        page_subtext {
          text
        }
        title {
          text
        }
      }
    }
    allPrismicProducts {
      nodes {
        data {
          category
          title {
            text
          }
          subtext {
            text
          }
        }
        url
      }
    }
  }
`
