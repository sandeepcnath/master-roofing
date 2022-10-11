import * as React from "react"
import { Link } from "gatsby"
import "./index.css"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="global-header__title hidden">
        <Link to="/" className="global-header__title-link">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link
        className="global-header__title global-header__title-link hidden"
        to="/"
      >
        {title}
      </Link>
    )
  }

  return <header className="global-header">{header}</header>
}

export default Header
