import * as React from "react"
import Header from "./header/index"

const Layout = ({ location, title, mainClass, children }) => {
  return (
    <div className="global-wrapper">
      <Header location={location} title={title} />
      <main className={mainClass && mainClass}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
