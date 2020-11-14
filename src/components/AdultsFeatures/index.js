import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

const AdultsFeatures = () => {
  const data = useStaticQuery(graphql`
    {
      desktop: file(relativePath: { eq: "banners/grown-ups1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(relativePath: { eq: "banners/mobile/grown-ups1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cloudBgDesktop: file(relativePath: { eq: "banners/banner-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cloudBgMobile: file(
        relativePath: { eq: "banners/mobile/banner-bg.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  const bgSources = [
    data.cloudBgMobile.childImageSharp.fluid,
    {
      ...data.cloudBgDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

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
          <Image fluid={sources} />
          <BackgroundImage
            tag="article"
            className="features__slider__item__bg-mask"
            fluid={bgSources}
          ></BackgroundImage>
        </article>
      </SectionContent>
    </section>
  )
}

export default AdultsFeatures
