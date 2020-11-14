import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"

const Hero = () => {
  const { bg, senior, thumbs } = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "hero/hero-bg.png" }) {
        childImageSharp {
          fluid {
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

  return (
    <BackgroundImage
      tag={`section`}
      className="hero"
      fluid={bg.childImageSharp.fluid}
    >
      <div className="hero__content-wrapper content-wrap">
        <Image fluid={senior.childImageSharp.fluid} className="senior" />

        <section className="hero__thumbs-container">
          {thumbs.nodes.map((thumb, index) => {
            return (
              <Image
                fluid={thumb.childImageSharp.fluid}
                className={`thumb`}
                key={index}
              />
            )
          })}
        </section>
      </div>
    </BackgroundImage>
  )
}

export default Hero
