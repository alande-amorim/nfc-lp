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

  const backgroundImageStack = [
    background.childImageSharp.fluid,
    bear.childImageSharp.fluid,
  ].reverse()

  return (
    <section className="animation">
      <SectionText
        title="... and <br>Momento Bear <br>is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />
      <BackgroundImage
        fluid={backgroundImageStack}
        className="section__content banners__slider background"
        style={{
          backgroundPosition: "-175px 100% , bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain, cover",
        }}
      />
    </section>
  )
}

export default Animation
