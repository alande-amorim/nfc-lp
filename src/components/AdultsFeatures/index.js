import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

const AdultsFeatures = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "banners/grown-ups1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cloudBg: file(relativePath: { eq: "banners/banner-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data.cloudBg.childImageSharp.fluid)

  return (
    <section className="grown-ups features">
      <SectionText
        title="For the Grown-ups"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit."
        color="blue"
        direction="left"
      />

      <SectionContent className="features__slider" direction="left">
        <article className="features__slider__item">
          <div className="slider__info">
            <h2>Share videos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              blanditiis aliquid incidunt culpa nam atque numquam recusandae
              obcaecati ad commodi.
            </p>
          </div>
          <Image fluid={data.file.childImageSharp.fluid} />
          <BackgroundImage
            tag="article"
            className="features__slider__item__bg-mask"
            fluid={data.cloudBg.childImageSharp.fluid}
          ></BackgroundImage>
        </article>
      </SectionContent>
    </section>
  )
}

export default AdultsFeatures
