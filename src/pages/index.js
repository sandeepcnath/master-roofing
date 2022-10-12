import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeBanner from "../components/homeBanner"

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
    <Layout location={location} title="w3opines">
      <Seo title="w3opines" />
      <HomeBanner data={data} />
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
    prismicHomepage(
      dataRaw: {}
      data: {
        main_subtitle: { richText: {} }
        main_title: {}
        owner_name: {}
        owner_subtitle: {}
        primary_cta: {}
        secondary_cta: {}
        owner_image: {}
        banner_background_image: {}
      }
    ) {
      id
      dataRaw
    }
  }
`
