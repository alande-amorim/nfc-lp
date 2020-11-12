import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SectionText from "../SectionText"

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
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit."
        color="red"
        direction="left"
      />

      <div className="features__slider">
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
      </div>
    </section>
  )
}

export default Animation
