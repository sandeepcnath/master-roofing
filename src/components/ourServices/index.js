import React from "react"
import "./index.css"
import ListItem from "../listItem"

const OurServices = ({ data }) => {
  console.log(
    "data.prismicHomepage.data.body1",
    data.prismicHomepage.data.body1
  )
  const serviceslist = data.prismicHomepage.data.body1.filter(
    service => service.slice_type == "serviceslist"
  )
  return (
    <section className="ourServices">
      <div className="ourServices__inner">
        <h2 className="section-title">
          {data.prismicHomepage.data.services_title.text}
        </h2>
        <ul className="whyUs__list">
          {serviceslist.map(service => (
            <li>
              <ListItem data={service.primary} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurServices
