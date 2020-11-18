import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

const Thumb = ({ fluid, y, x, z }) => {
  return (
    <Parallax y={y} x={x}>
      <BackgroundImage
        fluid={fluid}
        className={`thumb`}
        style={{ transform: `scale(${z})` }}
      />
    </Parallax>
  )
}

export default Thumb
