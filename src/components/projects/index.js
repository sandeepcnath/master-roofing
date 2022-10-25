import React, { useState } from "react"
import Card from "../card"
import "./index.css"

const Projects = ({ data }) => {
  const [viewAll, setViewAll] = useState(false)
  const showAll = () => {
    setViewAll(!viewAll)
    console.log("clicked", viewAll)
  }

  const homeData = data.prismicHomepage.data
  console.log(homeData.body2[0].items)
  if (viewAll) {
    var projects = homeData.body2[0].items
  } else {
    var projects = homeData.body2[0].items.slice(0, 3)
  }

  return (
    <section className="projects">
      <div className="section__inner">
        <div className="section-title-wrap text-container">
          <h2 className="section-title">{homeData.projects_title.text}</h2>
          <p className="section-subtitle">{homeData.projects_subtitle.text}</p>
        </div>
        <ul className="projects__list">
          {projects.map(project => (
            <li className="projects__list-li" key={project.project_name.text}>
              <Card data={project} />
            </li>
          ))}
        </ul>
        <div className="button-wrap button-wrap_footer">
          <button className="button button_primary" onClick={showAll}>
            {viewAll ? "Minimize" : "View all projects"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
