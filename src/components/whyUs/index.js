import React from "react"
import "./index.css"
import ListItem from "../listItem"

const WhyUs = ({ data }) => {
  console.log("data.prismicHomepage.data.body", data.prismicHomepage.data.body)
  const reasons = data.prismicHomepage.data.body.filter(
    reason => reason.slice_type == "reasons"
  )
  return (
    <section className="whyUs">
      <div className="whyUs__inner">
        <h2 className="section-title">
          {data.prismicHomepage.data.why_title.text}
        </h2>
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
