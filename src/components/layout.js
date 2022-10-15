import * as React from "react"
// import Header from "./header1/index"
import Header from "./header/index"

const Layout = ({ location, title, mainClass, children }) => {
  return (
    <>
      <Header />
      {/* <Header location={location} title={title} /> */}
      <main className={mainClass && mainClass}>{children}</main>
      <footer className="hidden">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
