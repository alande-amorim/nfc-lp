import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

const Thumb = ({ fluid, y, x }) => {
  return (
    <Parallax y={y} x={x}>
      <BackgroundImage fluid={fluid} className={`thumb`} />
    </Parallax>
  )
}

export default Thumb
