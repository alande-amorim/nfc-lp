import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import SectionText from "../SectionText"
import SectionContent from "../SectionContent"

import Banner from "../Banner"

const AdultsFeatures = () => {
  const {
    allBannersJson: { nodes: banners },
  } = useStaticQuery(graphql`
    {
      allBannersJson(filter: { type: { eq: "GROWNUP_FEATURES" } }) {
        nodes {
          id
          type
          title
          text
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
    <>
      <section className="banners grown-ups left">
        <SectionText
          title="For the <br>Grown-ups"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit."
          color="blue"
          direction="left"
        />

        <SectionContent className="banners__slider" direction="left">
          <Carousel className="banners__slider__item" interval={null}>
            {banners.map(({ id, title, text, fields: images }) => (
              <Carousel.Item key={id}>
                <Banner
                  background={images}
                  key={id}
                  title={title}
                  text={text}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </SectionContent>
      </section>
    </>
  )
}

export default AdultsFeatures
