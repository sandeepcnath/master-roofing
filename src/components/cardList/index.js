import * as React from "react"
import "./index.css"
import Card from "../card"

const CardList = ({ location, title, items, onCardClick }) => {
  return (
    <ul className="card-list">
      {items.map(item => (
        <li className="card-list__li" key={item.id}>
          <Card id={item.id} title={item.title} imageSrc={item.imageSrc} onClick={onCardClick}/>
        </li>
      ))}
    </ul>
  )
}

export default CardList
