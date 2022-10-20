import React from "react"
import "./index.css"

const Projects = ({ data }) => {
  const homeData = data.prismicHomepage.data
  console.log(homeData.body2[0].items)
  const projects = homeData.body2[0].items
  return (
    <section className="projects">
      <div className="">
        <div className="section-title-wrap text-container">
          <h2 className="section-title">{homeData.projects_title.text}</h2>
          <p className="section-subtitle">{homeData.projects_subtitle.text}</p>
        </div>
        <ul className="projects__list">
          {projects.map(project => (
            <li className="projects__list-li">
              <div className="image-card">{project.project_name.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
