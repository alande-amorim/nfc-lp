import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Controller, Scene } from "react-scrollmagic"

import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

const Animation = () => {
  const { mobile, background, bear } = useStaticQuery(graphql`
    {
      mobile: file(relativePath: { eq: "animation/mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      background: file(relativePath: { eq: "animation/bg-blur.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bear: file(relativePath: { eq: "animation/bear1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
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
        // style={{
        //   backgroundPosition: "-175px 100% , bottom center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "contain, cover",
        // }}
      />
      {/* <BackgroundImage
        fluid={mobile.childImageSharp.fluid}
        className="mobile"
        style={{
          width: "600px",
          height: "692px",
        }}
      /> */}
    </section>
  )
}

export default Animation
