import React from "react"
import "./index.css"
import ListItem from "../listItem"

const OurServices = ({ data }) => {
  const homeData = data.prismicHomepage.data
  const serviceslist = homeData.body1.filter(
    service => service.slice_type == "serviceslist"
  )
  return (
    <section className="ourServices alt-color">
      <div className="ourServices__inner">
        <div className="section-title-wrap text-container">
          <h2 className="section-title">{homeData.services_title.text}</h2>
        </div>
        <ul className="whyUs__list">
          {serviceslist.map(service => (
            <li key={service.primary.title.text}>
              <ListItem data={service.primary} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurServices
