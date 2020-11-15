import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel, { Dots } from "@brainhubeu/react-carousel"
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
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit."
        color="green"
        direction="right"
      />

      <SectionContent className="banners__slider" direction="right">
        <Carousel className="banners__slider__item">
          {banners.map(({ id, title, text, fields: images }) => (
            <Banner background={images} key={id} title={title} text={text} />
          ))}
        </Carousel>
      </SectionContent>
    </section>
  )
}

export default KidsFeatures
