import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"

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

  return (
    <section className="products">
      <h2>Lorem ipsum dolor sit amet consectetur</h2>

      <Carousel interval={null} indicators={false}>
        {products.map((product, index) => {
          return (
            <Carousel.Item key={index} className="products__item">
              <Image fluid={product.fields.product.childImageSharp.fluid} />
              <a href={product.url}>Shop Now</a>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </section>
  )
}

export default ChooseYours
