import React from "react"
import { PrismicRichText } from "@prismicio/react"
import { Link } from "gatsby"
import "./index.css"

const ListItem = ({ data }) => {
  return (
    <div className="listItem">
      {data.icon.url && <img className="listItem__img" src={data.icon.url} />}
      <div className="listItem__text-wrap">
        <h3 className="">{data.title.text}</h3>
        <PrismicRichText field={data.text.richText} />
        {data.link.text && (
          <Link to={data.link.text} className="button button_primary">
            {data.link_title.text}
          </Link>
        )}
      </div>
    </div>
  )
}

export default ListItem
