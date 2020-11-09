import React from "react"

const Article = ({ spec: { image, title, text } }) => {
  return (
    <article className="specifications__item">
      <img src={`specifications/${image.src}`} alt="" />
      <div className="specifications__item__description">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default Article
