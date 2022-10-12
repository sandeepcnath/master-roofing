import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react"
import "./index.css"
import WhatsAppLogo from "../../images/icons/whatsapp.svg"

const HomeBanner = ({ data }) => {
  const image = getImage(
    data.prismicHomepage.dataRaw.banner_background_image.url
  )
  return (
    <section className="banner">
      <PrismicRichText field={data.prismicHomepage.dataRaw.main_title} />
      <p className="text-container banner__text">
        {data.prismicHomepage.dataRaw.main_subtitle[0].text}
      </p>
      {console.log(data.prismicHomepage.dataRaw.banner_background_image.url)}
      <img
        className="banner__background"
        src={data.prismicHomepage.dataRaw.banner_background_image.url}
      />
      <div className="button-wrap">
        <a
          href={data.prismicHomepage.dataRaw.primary_cta.url}
          className="button"
        >
          {data.prismicHomepage.dataRaw.primary_cta_text[0].text}
        </a>
        <a
          href={data.prismicHomepage.dataRaw.secondary_cta.url}
          className="button button_secondary"
        >
          {data.prismicHomepage.dataRaw.secondary_cta_text[0].text}
        </a>
        <a
          href={data.prismicHomepage.dataRaw.secondary_cta_text.url}
          className="button button_icon"
          title="click here to chat with us in WhatsApp"
        >
          <img src={WhatsAppLogo} />
        </a>
      </div>
      {/* <GatsbyImage image={image} /> */}
    </section>
  )
}

export default HomeBanner
