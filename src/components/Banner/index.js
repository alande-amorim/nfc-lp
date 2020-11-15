import React from "react"
import BackgroundImage from "gatsby-background-image"

const Banner = ({ background, title, text }) => {
  const imgSources = [
    background.mobileImg.childImageSharp.fluid,
    {
      ...background.desktopImg.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <>
      <BackgroundImage
        className="banner__background"
        tag="article"
        fluid={imgSources}
      >
        <div className="slider__info">
          <h2>Share videos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            blanditiis aliquid incidunt culpa nam atque numquam recusandae
            obcaecati ad commodi.
          </p>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Banner
