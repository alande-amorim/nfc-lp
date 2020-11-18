import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

import Thumb from "../Thumb"

const Hero = () => {
  const { clouds, bg, senior, thumbs } = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "hero/hero-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clouds: file(relativePath: { eq: "hero/clouds-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      senior: file(relativePath: { eq: "hero/senior.png" }) {
        childImageSharp {
          fluid(
            quality: 100
            maxWidth: 890
            srcSetBreakpoints: [200, 340, 520, 890]
          ) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      thumbs: allFile(
        sort: { order: ASC, fields: name }
        filter: { relativePath: { regex: "hero/thumb.*.png$/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 100, maxWidth: 456) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluid_withWebp
            }
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
    <BackgroundImage
      tag={`section`}
      className="hero"
      fluid={bg.childImageSharp.fluid}
    >
      <div className="hero__content-wrapper">
        <BackgroundImage
          fluid={senior.childImageSharp.fluid}
          className="senior"
        />

        {thumbs.nodes.map((thumb, index) => {
          return (
            <Thumb
              key={index}
              fluid={thumb.childImageSharp.fluid}
              y={["220px", "10px"]}
              x={[22, 22]}
            />
          )
        })}

        {/* <Parallax
          y={["0px", "500px"]}
          tagOuter="div"
          styleOuter={{
            left: 0,
            position: "absolute",
            bottom: "0%",
            zIndex: 10,
          }}
        >
          <BackgroundImage fluid={backgroundCloudsStack} className="clouds" />
        </Parallax> */}
      </div>
    </BackgroundImage>
  )
}

export default Hero
