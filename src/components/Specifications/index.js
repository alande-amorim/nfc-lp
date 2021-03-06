import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Article from "./Article"

const Specifications = () => {
  const {
    allSpecificationsJson: { nodes: specifications },
  } = useStaticQuery(graphql`
    {
      allSpecificationsJson {
        nodes {
          id
          text
          title
          image {
            src
          }
          fields {
            specification {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="specifications">
      {specifications.map((spec, index) => {
        return <Article spec={spec} key={index} />
      })}
    </section>
  )
}

export default Specifications
