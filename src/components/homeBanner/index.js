import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PrismicRichText } from "@prismicio/react"
import "./index.css"
import WhatsAppLogo from "../../images/icons/whatsapp.svg"

const HomeBanner = ({ data }) => {
  const homeData = data.prismicHomepage.data
  return (
    <section className="banner">
      <div className="section__inner banner__inner">
        <div className="banner__content-wrap">
          <PrismicRichText field={homeData.main_title.richText} />
          <PrismicRichText field={homeData.main_subtitle.richText} />
          <div className="button-wrap">
            <Link
              to={homeData.primary_cta.url}
              className="button button_primary"
            >
              {homeData.primary_cta_text.text}
            </Link>
            <Link
              to="/contact-us"
              // to={homeData.secondary_cta.url}
              className="button button_primary button_secondary"
            >
              {homeData.secondary_cta_text.text}
            </Link>
            <a
              href={homeData.whatsapp.url}
              className="button button_icon"
              title="click here to chat with us in WhatsApp"
            >
              <img src={WhatsAppLogo} />
            </a>
          </div>
        </div>
        <div className="banner__img-wrap">
          <img
            src={homeData.banner_background_image.fluid.src}
            srcSet={homeData.banner_background_image.fluid.srcSet}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
