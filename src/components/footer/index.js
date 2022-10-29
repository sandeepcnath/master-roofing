import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import ContactInfo from "../contactInfo"
import "./index.css"

export default function Footer() {
  const scrollIntoView = e => {
    e.currentTarget.scrollIntoView()
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          prismicHomepage {
            data {
              qr_code {
                fixed {
                  src
                }
              }
            }
          }
        }
      `}
      render={data => (
        <footer className="footer">
          <div className="footer__head">
            <ul className="footer__links">
              <li>
                <Link
                  className="footer__link"
                  to="/"
                  title="Home"
                  onFocus={scrollIntoView}
                >
                  Home
                </Link>
              </li>
              {/* <a onFocus={handleLinkFocus}>sadsa</a> */}
              <li>
                <Link className="footer__link" to="/#services" title="Services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/products" title="Products">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="footer__link"
                  to="/contact-us"
                  title="Get in touch with us"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  className="footer__link"
                  to="/faq"
                  title="Frequently asked questions"
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="footer__qr-wrap">
              <p className="small">Scan to save our contact card</p>
              <img
                className="footer__qr"
                src={data.prismicHomepage.data.qr_code.fixed.src}
                alt=""
              />
            </div>
            <div className="footer__link-group">
              <ContactInfo customClass="address__footer" />
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__wrap">
              <p>
                © {new Date().getFullYear()}
                {` `}
                master-roofing-ph.com
                <br />
                Developed by{` `}
                <a
                  className="developedByLink"
                  title="link to Sandeep's profile"
                  href="https://www.linkedin.com/in/sandeepcnath/"
                  target="_blank"
                  rel="noreferrer"
                  onFocus={scrollIntoView}
                >
                  Sandeep C Nath
                </a>
              </p>
            </div>
          </div>
        </footer>
      )}
    />
  )
}
