import React from "react"
import { PrismicRichText } from "@prismicio/react"
import { Link } from "gatsby"
import "./index.css"

const ListItem = ({ data }) => {
  return (
    <div className="listItem">
      {data.icon.fixed && <img src={data.icon.fixed.src} />}
      {/* {listType && (
        <img src={"../../images/icons/" + listType + index + ".svg"} />
      )} */}
      {console.log(data)}
      <div className="listItem__text-wrap">
        <h3 className="">{data.title.text}</h3>
        <PrismicRichText field={data.text.richText} />
        {data.link.url && (
          <Link to={data.link.url} className="button button_primary">
            {data.link_title.text}
          </Link>
        )}
      </div>
    </div>
  )
}

export default ListItem