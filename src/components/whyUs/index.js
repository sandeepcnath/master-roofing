import React from "react"
import "./index.css"
import ListItem from "../listItem"

const WhyUs = ({ data }) => {
  const homeData = data.prismicHomepage.data
  const reasons = homeData.body.filter(reason => reason.slice_type == "reasons")
  return (
    <section className="whyUs">
      <div className="whyUs__inner">
        <h2 className="section-title">{homeData.why_title.text}</h2>
        <ul className="whyUs__list">
          {reasons.map(reason => (
            <li>
              <ListItem data={reason.primary} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyUs
