import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"

const Hero = () => {
  const {
    clouds,
    bg,
    senior,
    txt,
    thumbs: { nodes: thumbsDesktop },
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
            fluid(quality: 100, maxWidth: 400, srcSetBreakpoints: [200, 400]) {
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

        <Image fixed={txt.childImageSharp.fixed} className="thumb text" />
        <Image
          fluid={thumbsDesktop[0].childImageSharp.fluid}
          className="thumb"
        />
        <Image
          fluid={thumbsDesktop[1].childImageSharp.fluid}
          className="thumb"
        />
        <Image
          fluid={thumbsDesktop[2].childImageSharp.fluid}
          className="thumb"
        />
        <Image
          fluid={thumbsDesktop[3].childImageSharp.fluid}
          className="thumb"
        />
        <Image
          fluid={thumbsDesktop[4].childImageSharp.fluid}
          className="thumb"
        />
      </div>
    </BackgroundImage>
  )
}

export default Hero
