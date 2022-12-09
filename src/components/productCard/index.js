import * as React from "react"
import { Link } from "gatsby"
import "./index.css"

import { StaticImage } from "gatsby-plugin-image"

const ProductCard = ({ data, url }) => {
  const cardData = data
  return (
    <Link to={url} className="card card_link">
      <div className="flex card__image-wrap">
        <img
          className="card__image"
          src={cardData.product_images[0].image.url}
          alt="product image"
        />
      </div>
      <div className="card__text-wrap">
        <span className="hidden">{cardData.category}</span>
        <h3 className="h6 card__title">{cardData.title.text}</h3>
        <p>{cardData.subtext.text}</p>
        <p>{url}</p>
      </div>
    </Link>
  )
}

export default ProductCard
