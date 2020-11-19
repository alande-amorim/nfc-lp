import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-scroll-parallax"

import SectionText from "../SectionText"
import SectionContent from "../SectionContent"
import Banner from "../Banner"

const KidsFeatures = () => {
  const {
    clouds,
    allBannersJson: { nodes: banners },
  } = useStaticQuery(graphql`
    {
      clouds: file(relativePath: { eq: "clouds.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      allBannersJson(filter: { type: { eq: "GROWNUP_FEATURES" } }) {
        nodes {
          id
          type
          title
          text
          textPosition
          fields {
            desktopImg {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            mobileImg {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="banners grown-ups left">
      <SectionText
        title="For the <br>Grown-ups"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit."
        color="blue"
        direction="left"
      />

      <SectionContent className="banners__slider" direction="left">
        <Carousel className="banners__slider__item" interval={null}>
          {banners.map(({ id, title, text, textPosition, fields: images }) => (
            <Carousel.Item key={id}>
              <Banner
                background={images}
                key={id}
                title={title}
                text={text}
                position={textPosition}
              />
            </Carousel.Item>
          ))}

          {/* <Parallax y={["100px", "0px"]} tagOuter="div">
            <BackgroundImage
              fluid={clouds.childImageSharp.fluid}
              className="clouds-bg"
            />
          </Parallax> */}
        </Carousel>
      </SectionContent>
    </section>
  )
}

export default KidsFeatures
