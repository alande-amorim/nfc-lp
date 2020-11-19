import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

const HeroCta = () => {
  const { clouds, bg, senior, thumbs } = useStaticQuery(graphql`
    {
      clouds: file(relativePath: { eq: "hero/clouds-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const backgroundCloudsStack = [
    clouds.childImageSharp.fluid,
    clouds.childImageSharp.fluid,
  ].reverse()

  return (
    <Parallax
      className=""
      y={["0px", "-550px"]}
      tagOuter="div"
      styleOuter={{
        margin: "0 auto",
        position: "relative",
        zIndex: 10,
      }}
    >
      <BackgroundImage
        fluid={backgroundCloudsStack}
        className="cloud-container"
      >
        <a href="#" className="btn" style={{ width: "600px" }}>
          Shop Now
        </a>
      </BackgroundImage>
    </Parallax>
  )
}

export default HeroCta
