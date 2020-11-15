import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
import { isMobile, deviceType } from "react-device-detect"

const ChooseYours = () => {
  const {
    products: { nodes: products },
  } = useStaticQuery(graphql`
    {
      products: allProductsJson {
        nodes {
          id
          title
          text
          url
          fields {
            product {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  `)

  const [device, setDevice] = useState(getDevice())

  function getDevice() {
    if (window.screen.width < 768) {
      return "mobile"
    } else if (window.screen.width < 1280) {
      return "tablet"
    } else {
      return "desktop"
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDevice(getDevice())
    })
  })

  return (
    <section className="products">
      <h2>Lorem ipsum dolor sit amet consectetur</h2>

      <Carousel
        className="products__container"
        slidesPerPage={device === "mobile" ? 1 : device === "tablet" ? 2 : 3}
        infinite
      >
        {products.map((product, index) => {
          return (
            <article key={index} className="products__item">
              <Image fluid={product.fields.product.childImageSharp.fluid} />
              <a href={product.url}>Shop Now</a>
            </article>
          )
        })}
      </Carousel>
    </section>
  )
}

export default ChooseYours
