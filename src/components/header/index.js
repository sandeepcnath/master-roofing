import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Headroom from "react-headroom"
import "./index.css"

const Header = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible)
  }

  // const imageLogo = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "logo.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Headroom>
      <nav className="nav">
        <div className="nav__inner-wrap">
          <Link
            className="nav__primary-link"
            to="/"
            title="Ashtamangalaprasnam Home"
          >
            zxxxx
            {/* <Image
              fluid={imageLogo.file.childImageSharp.fluid}
              alt="Ashtamangalaprasnam Logo"
            /> */}
          </Link>
          <button className="button button_menu" onClick={toggleMenuVisibility}>
            MENU
          </button>
          <ul
            className={
              "nav__link-ul " +
              (isMenuVisible ? "nav__link-ul_shown" : "nav__link-ul_hidden")
            }
          >
            <li className="nav__link-li">
              <Link
                className="link_text nav__link-a"
                activeClassName="nav__link-a_active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="link_text nav__link-a"
                activeClassName="nav__link-a_active"
                to="/daivajnas"
                partiallyActive={true}
              >
                Daivajnas
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="link_text nav__link-a"
                activeClassName="nav__link-a_active"
                to="/#our-services"
                partiallyActive={true}
              >
                Services
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="link_text nav__link-a"
                activeClassName="nav__link-a_active"
                to="/#contact-us"
                partiallyActive={true}
              >
                Contact
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="link_text nav__link-a"
                activeClassName="nav__link-a_active"
                to="/blog"
                partiallyActive={true}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header
