import React from "react"
import BackgroundImage from "gatsby-background-image"

const Banner = ({ background, title, text, position }) => {
  const imgSources = [
    background.mobileImg.childImageSharp.fluid,
    {
      ...background.desktopImg.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <BackgroundImage
      className="banner__background"
      tag="article"
      fluid={imgSources}
    >
      <div className={`slider__info ${position}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </BackgroundImage>
  )
}

export default Banner
