import React from "react"
import "./index.css"

const Motto = ({ data }) => {
  const homeData = data.prismicHomepage.data
  return (
    <section className="motto alt-color">
      <div className="section__inner motto__inner">
        <div className="motto__spacer"></div>
        <div className="text-container">
          <h2 className="h4">{homeData.motto_title.text}</h2>
          <p className="motto__text">{homeData.motto_text.text}</p>
          <div className="motto__owner-info">
            <h5 className="motto__owner-name">{homeData.owner_name.text}</h5>
            <p className="motto__owner-name">{homeData.owner_subtitle.text}</p>
          </div>
        </div>
        <div className="motto__image-wrap">
          <img
            className="motto__image"
            src={homeData.owner_image.fluid.src}
            srcSet={homeData.owner_image.fluid.srcSet}
          />
        </div>
      </div>
    </section>
  )
}

export default Motto
