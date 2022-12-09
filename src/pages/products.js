import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductCard from "../components/productCard"
import "../styles/products.css"

const ProductsPage = ({ data, location }) => {
  const productsPageData = data.prismicProductsPage.data
  const allPrismicProductsData = data.allPrismicProducts.nodes
  console.log("allPrismicProductsData", allPrismicProductsData)
  const productTypes = ["Metal sheets", "Non-metal sheets", "Water piping"]
  const metalSheets = allPrismicProductsData.filter(
    product => product.data.category == productTypes[0]
  )
  const nonMetalSheets = allPrismicProductsData.filter(
    product => product.data.category == productTypes[1]
  )
  const waterPiping = allPrismicProductsData.filter(
    product => product.data.category == productTypes[2]
  )

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
          <section>
            {metalSheets.length ? (
              <div className="products-group">
                <h2 className="h3 products-group__title">{productTypes[0]}</h2>
                <ul className="grid2 products-list">
                  {metalSheets.map(product => (
                    <li className="grid2__li">
                      <ProductCard data={product.data} url={product.url} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {nonMetalSheets.length ? (
              <div className="products-group">
                <h2 className="h3 products-group__title">{productTypes[1]}</h2>
                <ul className="grid2 products-list">
                  {nonMetalSheets.map(product => (
                    <li className="grid2__li">
                      <ProductCard data={product.data} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {waterPiping.length ? (
              <div className="products-group">
                <h2 className="h3 products-group__title">{productTypes[2]}</h2>
                <ul className="grid2 products-list">
                  {waterPiping.map(product => (
                    <li className="grid2__li">
                      <ProductCard data={product.data} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </section>
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
          product_images {
            image {
              url
            }
          }
        }
        url
      }
    }
  }
`
