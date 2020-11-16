import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"

const Hero = () => {
  const { clouds, bg, senior, thumbs } = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "hero/hero-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clouds: file(relativePath: { eq: "hero/clouds-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
    <>
      <BackgroundImage
        tag={`section`}
        className="hero"
        fluid={bg.childImageSharp.fluid}
      >
        <div className="hero__content-wrapper content-wrap">
          <BackgroundImage
            fluid={senior.childImageSharp.fluid}
            className="senior"
          />

          <section className="hero__thumbs-container">
            {thumbs.nodes.map((thumb, index) => {
              return (
                <BackgroundImage
                  fluid={thumb.childImageSharp.fluid}
                  className={`thumb`}
                  key={index}
                />
              )
            })}
          </section>
        </div>
      </BackgroundImage>
      <div className="clouds">
        <BackgroundImage
          fluid={clouds.childImageSharp.fluid}
          style={{
            position: "absolute",
            top: 0,
            height: "200px",
            width: "100%",
            zIndex: 10,
            backgroundPosition: "100px center",
          }}
        />
        <BackgroundImage
          fluid={clouds.childImageSharp.fluid}
          style={{
            position: "absolute",
            bottom: 0,
            height: "200px",
            width: "100%",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="#" className="btn">
            Shop Now
          </a>
        </BackgroundImage>
      </div>
    </>
  )
}

export default Hero
