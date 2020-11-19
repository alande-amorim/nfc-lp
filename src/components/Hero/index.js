import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

import Thumb from "../Thumb"

const Hero = () => {
  const {
    clouds,
    bg,
    senior,
    thumbs: { nodes: thumbs },
  } = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "hero/hero-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clouds: file(relativePath: { eq: "hero/clouds-bg1.png" }) {
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
            fluid(quality: 100, maxWidth: 330) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const backgroundStack = [
    bg.childImageSharp.fluid,
    clouds.childImageSharp.fluid,
  ].reverse()

  return (
    <BackgroundImage tag={`section`} className="hero" fluid={backgroundStack}>
      <div className="hero__content-wrapper">
        <BackgroundImage
          fluid={senior.childImageSharp.fluid}
          className="senior"
        />

        <Thumb
          fluid={thumbs[0].childImageSharp.fluid}
          y={["10px", "100px"]}
          x={[22, 22]}
          z={1}
        />

        <Thumb
          fluid={thumbs[1].childImageSharp.fluid}
          y={["110px", "10px"]}
          x={[60, 60]}
        />

        <Thumb
          fluid={thumbs[2].childImageSharp.fluid}
          y={["110px", "10px"]}
          x={[60, 60]}
        />

        <Thumb
          fluid={thumbs[3].childImageSharp.fluid}
          y={["110px", "10px"]}
          x={[60, 60]}
        />

        <Thumb
          fluid={thumbs[4].childImageSharp.fluid}
          y={["110px", "10px"]}
          x={[60, 60]}
        />

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
