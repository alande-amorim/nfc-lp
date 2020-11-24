import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"

import SectionText from "../SectionText"
import SectionContent from "../SectionContent"
import Banner from "../Banner"

const KidsFeatures = () => {
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
        text="The Talking Teddy Bear is also an amazing gift for parents. This fluffy friend will save you hours in trying to find the best stories for your little ones, while being an amazing personalized gift. This gift will also help save your money by providing over 40 premium audible stories valued at $100 for the low price of $24.99."
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
        </Carousel>
      </SectionContent>
    </section>
  )
}

export default KidsFeatures
