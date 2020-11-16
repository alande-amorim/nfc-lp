import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"

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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <section className="products">
      <h2>Lorem ipsum dolor sit amet consectetur</h2>

      <Slider {...settings} className="products__list">
        {products.map((product, index) => {
          return (
            <BackgroundImage
              fluid={product.fields.product.childImageSharp.fluid}
              key={index}
              className="products__item"
            >
              <a className="btn" href={product.url}>
                Shop Now
              </a>
            </BackgroundImage>
          )
        })}
      </Slider>
    </section>
  )
}

export default ChooseYours
