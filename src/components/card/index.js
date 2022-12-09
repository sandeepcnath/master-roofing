import * as React from "react"
import { PrismicRichText } from "@prismicio/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Lazy, Pagination, Navigation } from "swiper"
import "./index.css"

import { StaticImage } from "gatsby-plugin-image"

const Card = data => {
  const cardData = data.data
  return (
    <div className="card">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": ".8",
          "--swiper-navigation-size": "36px",
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
        loop={true}
        lazy={true}
      >
        {cardData.project_image_1.fluid && (
          <SwiperSlide>
            <img
              className="card__image card__image_fill"
              src={cardData.project_image_1.fluid.src}
              alt=""
            />
          </SwiperSlide>
        )}
        {cardData.project_image_2.fluid && (
          <SwiperSlide>
            <img
              className="card__image card__image_fill"
              src={cardData.project_image_2.fluid.src}
              alt=""
            />
          </SwiperSlide>
        )}
        {cardData.project_image_3.fluid && (
          <SwiperSlide>
            <img
              className="card__image card__image_fill"
              src={cardData.project_image_3.fluid.src}
              alt=""
            />
          </SwiperSlide>
        )}
        {cardData.project_image_4.fluid && (
          <SwiperSlide>
            <img
              className="card__image card__image_fill"
              src={cardData.project_image_4.fluid.src}
              alt=""
            />
          </SwiperSlide>
        )}
        {cardData.project_image_5.fluid && (
          <SwiperSlide>
            <img
              className="card__image card__image_fill"
              src={cardData.project_image_5.fluid.src}
              alt=""
            />
          </SwiperSlide>
        )}
        {cardData.project_image_6.fluid && (
          <SwiperSlide>
            <img src={cardData.project_image_6.fluid.src} alt="" />
          </SwiperSlide>
        )}
        {cardData.project_image_7.fluid && (
          <SwiperSlide>
            <img src={cardData.project_image_7.fluid.src} alt="" />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="card__text-wrap">
        <span className="hidden">{cardData.project_type}</span>
        <h3 className="h6 card__title">{cardData.project_name.text}</h3>
        <PrismicRichText field={cardData.project_description.richText} />
      </div>
    </div>
  )
}

export default Card
