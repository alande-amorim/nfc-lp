import React from "react"
import Image from "gatsby-image"
import { Parallax } from "react-scroll-parallax"

const Thumb = ({ fluid, y, x, z }) => {
  return (
    <Image
      fluid={fluid}
      className={`thumb`}
      style={{ transform: `scale(${z})`, position: "initial" }}
    />
  )
}

export default Thumb
