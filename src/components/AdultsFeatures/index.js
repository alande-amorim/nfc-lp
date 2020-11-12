import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data.cloudBg.childImageSharp.fluid)

  return (
    <section className="grownups-features">
      <div className="grownups-features__text">
        <h2>For the Grown-ups</h2>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure
          quo delectus autem explicabo ratione, ullam incidunt sit mollitia
          maxime.
        </div>
      </div>

      <div className="grownups-features__slider">
        <article className="grownups-features__slider__item">
          <h1>Share videos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            blanditiis aliquid incidunt culpa nam atque numquam recusandae
            obcaecati ad commodi.
          </p>
          <Image fluid={data.file.childImageSharp.fluid} />
          <BackgroundImage
            tag="article"
            className="grownups-features__slider__item__bg-mask"
            fluid={data.cloudBg.childImageSharp.fluid}
          ></BackgroundImage>
        </article>
      </div>
    </section>
  )
}

export default AdultsFeatures
