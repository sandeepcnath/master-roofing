import * as React from "react"
import "./index.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import { StaticImage } from "gatsby-plugin-image"

const Card = ({ id, title, imageSrc, onClick }) => {
  return (
    <a className="card" tabIndex="0" title={title} onClick={() => onClick(id)}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination]}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            className="card__image"
            layout="constrained"
            formats={["auto", "webp"]}
            src="../../images/post.jpg"
            quality={100}
            alt="CSS4 wont be coming"
          />
        </SwiperSlide>
      </Swiper>
    </a>
  )
}

export default Card
