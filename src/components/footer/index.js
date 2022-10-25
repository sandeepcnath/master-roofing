import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import IconPhone from "../../images/icons/phone.svg"

import "./index.css"

export default function Footer() {
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
            <ul className="footer__link-group">
              <li>
                <Link className="footer__link" to="/" title="Home">
                  Home
                </Link>
              </li>
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
            <ul className="footer__link-group">
              <li>
                <p className="small">Scan to save our contact card</p>
                <img
                  className="footer__qr"
                  src={data.prismicHomepage.data.qr_code.fixed.src}
                  alt=""
                />
              </li>
            </ul>
            <ul className="footer__link-group">
              <li>
                <a
                  className="iconButton iconButton_phone"
                  href="tel:+914842395453"
                  title="Click to call +91 484 239 5453"
                >
                  <img
                    src={IconPhone}
                    alt="phone"
                    className="iconButton__icon"
                  />
                  +91 484 239 5453
                </a>
              </li>
              <li>
                <a
                  className="iconButton"
                  target="_blank"
                  rel="noreferrer"
                  title="Master Roofing Facebook page"
                  href="https://www.facebook.com/ashtamangalaprasnam"
                >
                  <svg
                    viewBox="0 0 36 36"
                    className="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
                    fill="url(#jsc_s_2)"
                    height="36"
                    width="36"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        x2="50%"
                        y1="97.0782153%"
                        y2="0%"
                        id="jsc_s_2"
                      >
                        <stop offset="0%" stopColor="#0062E0"></stop>
                        <stop offset="100%" stopColor="#19AFFF"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                    <path
                      className="p361ku9c"
                      fill="#fff"
                      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    ></path>
                  </svg>
                  fb.com/master-roofing
                </a>
              </li>
            </ul>
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
