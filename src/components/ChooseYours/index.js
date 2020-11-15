import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"

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

      <Carousel
        className="products__container"
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
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
