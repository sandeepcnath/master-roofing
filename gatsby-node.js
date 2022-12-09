const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    {
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
            weight {
              text
            }
            section_length {
              text
            }
            roof_pitch {
              text
            }
            product_images {
              image {
                fluid {
                  srcSet
                }
              }
            }
            material {
              text
            }
            gauge {
              text
            }
            description {
              richText
            }
            covering_width {
              text
            }
            coating {
              text
            }
            batten_spacing {
              text
            }
          }
          id
          uid
        }
      }
    }
  `)

  console.log("queryResults", queryResults)
  const productTemplate = path.resolve(
    __dirname,
    "src/pages/templates/product.js"
  )
  queryResults.data.allPrismicProducts.nodes.forEach(node => {
    createPage({
      path: `/products/${node.uid}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    })
  })
}
