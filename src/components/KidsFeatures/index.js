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
      allBannersJson(filter: { type: { eq: "KIDS_FEATURES" } }) {
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
    <section className="banners kids right">
      <SectionText
        title="For the <br>Little ones"
        text="Each fluffy friend comes stuffed with over 35 of the best stories from around the world. From soothing nursery rhymes, to adventurous fairytale stories, and other amazing content this bear is made to amaze."
        color="green"
        direction="right"
      />

      <SectionContent className="banners__slider" direction="right">
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
