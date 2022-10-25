import React from "react"
import { PrismicRichText } from "@prismicio/react"
import { Link } from "gatsby"
import WhatsAppLogo from "../../images/icons/whatsapp.svg"

import "./index.css"

const ContactPrompt = ({ data }) => {
  const homeData = data.prismicHomepage.data
  return (
    <section className="contactPrompt">
      <div className="contactPrompt__inner">
        <PrismicRichText field={homeData.contactforservice_title.richText} />
        <div className="button-wrap">
          <Link to="/contact-us" className="button button_primary button_white">
            Contact us
          </Link>
          {homeData.whatsapp1 && (
            <a
              href={"https://wa.me/" + homeData.whatsapp1}
              className="button button_icon"
              title="click to chat with us in WhatsApp"
            >
              <img src={WhatsAppLogo} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactPrompt
