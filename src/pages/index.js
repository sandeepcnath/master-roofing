import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeBanner from "../components/homeBanner"
import Motto from "../components/motto"
import WhyUs from "../components/whyUs"
import OurServices from "../components/ourServices"
import ContactPrompt from "../components/contactPrompt"

import postImage from "../images/post.jpg"
const BlogIndex = ({ data, location }) => {
  const modalData = {
    image: postImage,
  }

  const [isPostModalVisible, setIsPostModalVisible] = useState(false)
  const [selectedPost, setSelectedPost] = useState(false)

  const openPostModal = () => {
    const body = document.querySelector("body")
    body.style.overflow = "hidden"
    setIsPostModalVisible(true)
  }
  const closePostModal = () => {
    const body = document.querySelector("body")
    body.style.overflow = "auto"
    setIsPostModalVisible(false)
  }

  return (
    <Layout location={location} title="Master Roofing">
      <Seo title="Master Roofing" />
      <HomeBanner data={data} />
      <Motto data={data} />
      <WhyUs data={data} />
      <OurServices data={data} />
      <ContactPrompt data={data} />
      {/* <CardList
        items={posts}
        onCardClick={value => {
          setSelectedPost(posts.find(item => item.id === value))
          openPostModal()
        }}
      /> */}
      {/* <Modal
        data={selectedPost}
        isVisible={isPostModalVisible}
        handleModalClose={closePostModal}
      /> */}
    </Layout>
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
      }
    }
  }
`
