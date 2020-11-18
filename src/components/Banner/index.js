import React from "react"
import Slide from "react-reveal/Slide"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

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
      <Parallax y={["100px", "300px"]} tagOuter="div">
        {/* <Slide top> */}
        <div className={`slider__info ${position}`}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        {/* </Slide> */}
      </Parallax>
    </BackgroundImage>
  )
}

export default Banner
