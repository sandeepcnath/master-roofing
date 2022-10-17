import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PrismicRichText } from "@prismicio/react"
import "./index.css"
import WhatsAppLogo from "../../images/icons/whatsapp.svg"

const HomeBanner = ({ data }) => {
  const backgroundUrl =
    data.prismicHomepage.data.banner_background_image.fluid.src
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <PrismicRichText field={data.prismicHomepage.data.main_title.richText} />
      <p className="banner__text">
        {data.prismicHomepage.data.main_subtitle.text}
      </p>
      <div className="button-wrap">
        <Link
          to={data.prismicHomepage.data.primary_cta.url}
          className="button button_primary"
        >
          {data.prismicHomepage.data.primary_cta_text.text}
        </Link>
        <Link
          to={data.prismicHomepage.data.secondary_cta.url}
          className="button button_primary button_secondary"
        >
          {data.prismicHomepage.data.secondary_cta_text.text}
        </Link>
        <a
          href={data.prismicHomepage.data.whatsapp.url}
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
