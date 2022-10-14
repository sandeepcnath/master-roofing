import React from "react"
import "./index.css"

const Motto = ({ data }) => {
  return (
    <section className="motto alt-color">
      <div className="motto__inner">
        <div className="text-container">
          <h2 className="h4">{data.prismicHomepage.data.motto_title.text}</h2>
          <p className="motto__text">
            {data.prismicHomepage.data.motto_text.text}
          </p>
          <div className="motto__owner-info">
            <h5 className="motto__owner-name">
              {data.prismicHomepage.data.owner_name.text}
            </h5>
            <p className="motto__owner-name">
              {data.prismicHomepage.data.owner_subtitle.text}
            </p>
          </div>
        </div>
        <img
          className="motto__image"
          src={data.prismicHomepage.data.owner_image.fluid.src}
          srcSet={data.prismicHomepage.data.owner_image.fluid.srcSet}
        />
      </div>
    </section>
  )
}

export default Motto
