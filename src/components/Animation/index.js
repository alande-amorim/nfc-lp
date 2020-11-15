import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

const Animation = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "banners/animation.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="features animation">
      <SectionText
        title="... and Momento Bear is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />

      <SectionContent className="features__slider" direction="left">
        <article className="features__slider__item">
          <Image fluid={data.file.childImageSharp.fluid} />
        </article>
      </SectionContent>
    </section>
  )
}

export default Animation
