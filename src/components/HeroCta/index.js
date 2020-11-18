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
      y={["0px", "-550px"]}
      tagOuter="div"
      styleOuter={{
        margin: "0 auto",
      }}
    >
      <BackgroundImage
        fluid={backgroundCloudsStack}
        className="cloudCta"
        style={{
          width: "100%",
          height: "45rem",
          margin: "-9rem 0 -18rem 0px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href="#" className="btn" style={{ width: "600px" }}>
          Shop Now
        </a>
      </BackgroundImage>
    </Parallax>
  )
}

export default HeroCta
