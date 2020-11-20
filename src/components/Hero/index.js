import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import { Parallax } from "react-scroll-parallax"

import Thumb from "../Thumb"

const Hero = () => {
  const {
    clouds,
    bg,
    senior,
    txt,
    thumbs: { nodes: thumbs },
  } = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "hero/hero-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
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
      txt: file(relativePath: { eq: "hero/txt.png" }) {
        childImageSharp {
          fixed(width: 438, quality: 100) {
            ...GatsbyImageSharpFixed
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      thumbs: allFile(
        sort: { order: ASC, fields: name }
        filter: { relativePath: { regex: "hero/thumb.*.jpg$/" } }
      ) {
        nodes {
          childImageSharp {
            fixed(quality: 100, width: 400) {
              ...GatsbyImageSharpFixed
              ...GatsbyImageSharpFixed_withWebp
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

        <Image fixed={txt.childImageSharp.fixed} className="thumb" />
        <Image fixed={thumbs[0].childImageSharp.fixed} className="thumb" />
        <Image fixed={thumbs[1].childImageSharp.fixed} className="thumb" />
        <Image fixed={thumbs[2].childImageSharp.fixed} className="thumb" />
        <Image fixed={thumbs[3].childImageSharp.fixed} className="thumb" />
        <Image fixed={thumbs[4].childImageSharp.fixed} className="thumb" />

        {/* <Image
          fixed={thumbs[2].childImageSharp.fixed}
          className="thumb"
          style={{ left: "10%", top: "10%" }}
        />
        <Image
          fixed={thumbs[3].childImageSharp.fixed}
          className="thumb"
          style={{ left: "10%", top: "10%" }}
        />
        <Image
          fixed={thumbs[4].childImageSharp.fixed}
          className="thumb"
          style={{ left: "10%", top: "10%" }}
        /> */}

        {/* <Parallax y={["-100px", "200px"]} x={["500px", "500px"]}>
          <Image fixed={thumbs[2].childImageSharp.fixed} className="thumb" />
        </Parallax>
        <Parallax y={["-100px", "200px"]} x={["500px", "500px"]}>
          <Image fixed={thumbs[3].childImageSharp.fixed} className="thumb" />
        </Parallax>
        <Parallax y={["-100px", "200px"]} x={["500px", "500px"]}>
          <Image fixed={thumbs[4].childImageSharp.fixed} className="thumb" />
        </Parallax> */}
      </div>
    </BackgroundImage>
  )
}

export default Hero
