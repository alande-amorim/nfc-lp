import React from "react"
import Slide from "react-reveal/Slide"

const Article = ({ spec: { image, title, text } }) => {
  return (
    <Slide bottom>
      <article className="specifications__item">
        <img src={`specifications/${image.src}`} alt="" />
        <div className="specifications__item__description">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </article>
    </Slide>
  )
}

export default Article
