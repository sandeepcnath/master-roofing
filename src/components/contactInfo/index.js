import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import { PrismicRichText } from "@prismicio/react"
import IconPhone from "../../images/icons/phone.svg"
import WhatsAppLogo2 from "../../images/icons/whatsapp2.svg"
import IconMap from "../../images/icons/map.svg"

import "./index.css"

export default function ContactInfo({ customClass }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          prismicHomepage {
            data {
              email {
                url
              }
              facebook_page_name {
                text
              }
              facebook_page_url {
                url
              }
              google_maps_link {
                url
              }
              address {
                richText
              }
              contact_number1
              contact_number2
              whatsapp1
            }
          }
        }
      `}
      render={data => (
        <address className={customClass ? `address ${customClass}` : "address"}>
          {console.log("customClass", customClass)}
          <a
            className="iconButton"
            href={data.prismicHomepage.data.google_maps_link.url}
            title="click here for our location in map"
          >
            <img src={IconMap} alt="whatsapp" className="iconButton__icon" />
            <div>
              <PrismicRichText
                field={data.prismicHomepage.data.address.richText}
              />
            </div>
          </a>
          <a
            className="iconButton"
            href={`tel: ${data.prismicHomepage.data.contact_number1}`}
            title={`Click to call ${data.prismicHomepage.data.contact_number1}`}
          >
            <img src={IconPhone} alt="phone" className="iconButton__icon" />
            {data.prismicHomepage.data.contact_number1}
          </a>
          <a
            className="iconButton"
            href={`tel: ${data.prismicHomepage.data.contact_number2}`}
            title={`Click to call ${data.prismicHomepage.data.contact_number2}`}
          >
            <img src={IconPhone} alt="phone" className="iconButton__icon" />
            {data.prismicHomepage.data.contact_number2}
          </a>
          <a
            className="iconButton"
            href={"https://wa.me/" + data.prismicHomepage.data.whatsapp1}
            title="click here to chat with us in WhatsApp"
          >
            <img
              src={WhatsAppLogo2}
              alt="whatsapp"
              className="iconButton__icon iconButton__icon_full"
            />
            {data.prismicHomepage.data.contact_number2}
          </a>
          <a
            className="iconButton"
            target="_blank"
            rel="noreferrer"
            title="Master Roofing Facebook page"
            href={data.prismicHomepage.data.facebook_page_url.url}
          >
            <svg
              viewBox="0 0 36 36"
              className="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
              fill="transparent"
              height="36"
              width="36"
            >
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path
                className="p361ku9c"
                fill="#fff"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              ></path>
            </svg>
            fb.com/{data.prismicHomepage.data.facebook_page_name.text}
          </a>
        </address>
      )}
    />
  )
}
