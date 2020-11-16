import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

const Animation = () => {
  const { background, bear } = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "animation/bg-blur.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bear: file(relativePath: { eq: "animation/bear.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="animation">
      <SectionText
        title="... and <br>Momento Bear <br>is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />
      <BackgroundImage
        fluid={background.childImageSharp.fluid}
        className="section__content banners__slider background"
      >
        <BackgroundImage
          fluid={bear.childImageSharp.fluid}
          className="bear"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
          }}
        ></BackgroundImage>
      </BackgroundImage>
    </section>
  )
}

export default Animation
