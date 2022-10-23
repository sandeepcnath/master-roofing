import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Close from "../../images/icons/close.svg"
import "./index.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Modal = ({ data, isVisible, handleModalClose }) => {
  console.log("data.image", data.image)
  // const image = getImage(data.image)

  // const pageQuery = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "post.jpg" }) {
  //       childrenImageSharp {
  //         fluid {
  //           srcSetWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div
      className={`modal ${isVisible ? "modal_visible" : ""}`}
      hidden={isVisible}
    >
      <button
        className="button_transparent modal__close"
        title="Close"
        onClick={() => {
          handleModalClose()
        }}
      >
        <img className="modal__close-icon" src={Close} />
      </button>
      <div className="modal__body">
        <div className="post__image-wrap">
          <StaticImage
            className="post__image"
            src="../../images/post.jpg"
            layout="fullWidth"
            formats={["auto", "webp"]}
            quality={100}
            alt="CSS4 wont be coming"
          />
        </div>
        <div className="post__text-section">
          <div className="post__text-section-inner">
            <h1 className="">Why won't there be a CSS4?</h1>
            <p className="post__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus porttitor odio, in condimentum turpis sodales sed. Nam
              sollicitudin ac tellus id aliquam. Pellentesque fringilla faucibus
              finibus. Donec efficitur egestas velit, quis ultrices tellus
              tristique varius. Ut lobortis porttitor maximus. Ut suscipit nisi
              non arcu rutrum, maximus consequat lectus pellentesque.
            </p>
            <p className="post__text">
              Proin nec quam molestie, vulputate magna facilisis, sodales ipsum.
              Suspendisse potenti. Donec dictum justo at lorem fermentum
              finibus. Cras cursus nec eros convallis posuere. Sed rhoncus lorem
              vitae gravida auctor. Morbi ut nisl volutpat turpis fermentum
              aliquam. Nunc porta, ligula dictum facilisis ultrices, ipsum quam
              volutpat leo, eget mollis odio felis non massa. Integer dapibus
              lorem eu augue aliquet iaculis.
            </p>
            <p className="post__text">
              In at bibendum tellus. Integer eleifend vestibulum orci, eu
              sagittis nisl iaculis a. Proin condimentum non eros in ultrices.
              Etiam nec nulla rutrum, gravida massa vitae, efficitur risus.
              Proin ullamcorper id turpis vel molestie. Donec at dolor nec sem
              tempus tristique non varius justo. Nulla laoreet quis tellus eu
              sodales. Donec nunc purus, lobortis ac urna in, ultricies feugiat
              nisl. Phasellus vehicula risus eu lacus ullamcorper tempus. In id
              ornare tellus, quis feugiat dolor. Pellentesque convallis augue id
              massa ultricies vulputate. Fusce et faucibus risus. Duis vehicula
              risus leo, nec sodales augue bibendum eu. In hac habitasse platea
              dictumst. Mauris aliquam vulputate tortor, ac ornare lacus
              pulvinar vitae. Aenean consequat magna et felis accumsan
              facilisis.
            </p>
            <p className="post__text">
              In congue ex nec orci fermentum, eget lacinia neque feugiat. Cras
              ex ligula, cursus sit amet urna sit amet, ornare imperdiet ex.
              Aliquam vitae venenatis risus. Sed rutrum finibus turpis eu
              semper. Phasellus in velit quis dui eleifend ultrices. Donec
              dignissim eget lorem quis porttitor. Maecenas sit amet nisi lorem.
            </p>
            <p className="post__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus porttitor odio, in condimentum turpis sodales sed. Nam
              sollicitudin ac tellus id aliquam. Pellentesque fringilla faucibus
              finibus.
            </p>
            <p className="post__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus porttitor odio, in condimentum turpis sodales sed. Nam
              sollicitudin ac tellus id aliquam. Pellentesque fringilla faucibus
              finibus.
            </p>
            <p className="post__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus porttitor odio, in condimentum turpis sodales sed. Nam
              sollicitudin ac tellus id aliquam. Pellentesque fringilla faucibus
              finibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
