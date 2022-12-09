import { Link } from "gatsby"
import React, { useState } from "react"
import Headroom from "react-headroom"
import IconLogo from "../../images/icons/logo.svg"
import "./index.css"

const Header = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible)
  }

  return (
    <Headroom>
      <a href="#main" className="sr-only message-main-content">
        Skip to content
      </a>
      <nav className="nav">
        <div className="nav__inner-wrap">
          <div className="nav__mobile-header">
            <Link
              className="nav__primary-link"
              to="/"
              title="Ashtamangalaprasnam Home"
            >
              <img src={IconLogo} />
            </Link>
            <button
              className="button button_menu"
              onClick={toggleMenuVisibility}
            >
              MENU
            </button>
          </div>
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
                to="/products"
                partiallyActive={true}
              >
                Products
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="link_text nav__link-a"
                activeClassName="nav__link-a_active"
                to="/contact-us"
                partiallyActive={true}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header
