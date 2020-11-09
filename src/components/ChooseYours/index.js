import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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

      <div className="products__container">
        {products.map((product, index) => {
          return (
            <article key={index} className="products__item">
              <Image fluid={product.fields.product.childImageSharp.fluid} />
              <a href={product.url}>Shop Now</a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ChooseYours
