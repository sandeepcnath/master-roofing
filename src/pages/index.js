import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeBanner from "../components/homeBanner"
import Motto from "../components/motto"
import WhyUs from "../components/whyUs"
import OurServices from "../components/ourServices"
import ContactPrompt from "../components/contactPrompt"
import Projects from "../components/projects"

const HomePage = ({ data, location }) => {
  return (
    <Layout location={location} title="Home">
      <Seo title="Home" />
      <HomeBanner data={data} />
      <Motto data={data} />
      <WhyUs data={data} />
      <OurServices data={data} />
      <ContactPrompt data={data} />
      <Projects data={data} />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    prismicHomepage {
      id
      data {
        banner_background_image {
          fluid {
            srcSet
            src
          }
        }
        main_subtitle {
          richText
        }
        main_title {
          richText
        }
        motto_text {
          text
        }
        motto_title {
          text
        }
        owner_image {
          fluid {
            srcSet
            src
          }
        }
        owner_name {
          text
        }
        owner_subtitle {
          text
        }
        primary_cta {
          url
        }
        primary_cta_text {
          text
        }
        secondary_cta {
          url
        }
        secondary_cta_text {
          text
        }
        whatsapp {
          url
        }
        why_title {
          text
        }
        body {
          ... on PrismicSliceType {
            id
            slice_label
            slice_type
          }
          ... on PrismicHomepageDataBodyReasons {
            id
            primary {
              link {
                text
              }
              link_title {
                text
              }
              text {
                richText
              }
              title {
                text
              }
              icon {
                fixed {
                  src
                }
                url
              }
            }
          }
        }
        body1 {
          ... on PrismicSliceType {
            id
            slice_label
            slice_type
          }
          ... on PrismicHomepageDataBody1Serviceslist {
            id
            primary {
              icon {
                url
              }
              link_title {
                text
              }
              text {
                richText
              }
              title {
                text
              }
              link {
                text
              }
            }
            slice_label
            slice_type
          }
        }
        services_title {
          text
        }
        contactforservice_title {
          richText
        }
        whatsapp1
        qr_code {
          fixed {
            src
          }
        }
        projects_subtitle {
          text
        }
        projects_title {
          text
        }
        body2 {
          ... on PrismicHomepageDataBody2Projects {
            id
            slice_label
            slice_type
            items {
              project_type
              project_name {
                text
              }
              project_description {
                richText
              }
              project_image_1 {
                fluid {
                  src
                }
              }
              project_image_2 {
                fluid {
                  src
                }
              }
              project_image_3 {
                fluid {
                  src
                }
              }
              project_image_4 {
                fluid {
                  src
                }
              }
              project_image_5 {
                fluid {
                  src
                }
              }
              project_image_6 {
                fluid {
                  src
                }
              }
              project_image_7 {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
