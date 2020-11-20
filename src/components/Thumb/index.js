import React from "react"
import Image from "gatsby-image"
import { Parallax } from "react-scroll-parallax"

const Thumb = ({ fluid, y, x, z }) => {
  return (
    // <Parallax
    //   y={y}
    //   x={x}
    //   styleOuter={{ height: "100%", width: "100%", position: "absolute" }}
    // >
    <Image
      fluid={fluid}
      className={`thumb`}
      style={{ transform: `scale(${z})`, position: "initial" }}
    />
    // </Parallax>
  )
}

export default Thumb
