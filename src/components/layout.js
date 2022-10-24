import * as React from "react"
// import Header from "./header1/index"
import Header from "./header/index"
import Footer from "./footer/index"

const Layout = ({ location, title, mainClass, children }) => {
  return (
    <>
      <Header />
      {/* <Header location={location} title={title} /> */}
      <main className={mainClass && mainClass}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
