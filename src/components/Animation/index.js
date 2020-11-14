import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

const Animation = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "banners/kids1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="features kids">
      <SectionText
        title="... and Momento Bear is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />

      <SectionContent className="features__slider" direction="left">
        <article className="features__slider__item">
          <div className="slider__info">
            <h2>Nursery Rhymes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              blanditiis aliquid incidunt culpa nam atque numquam recusandae
              obcaecati ad commodi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa blanditiis aliquid incidunt culpa nam atque
              numquam recusandae obcaecati ad commodi.
            </p>
          </div>
          <Image fluid={data.file.childImageSharp.fluid} />
        </article>
      </SectionContent>
    </section>
  )
}

export default Animation
