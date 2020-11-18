import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SectionText from "../SectionText"

const Animation = () => {
  const { mobile, background, bear } = useStaticQuery(graphql`
    {
      mobile: file(relativePath: { eq: "animation/mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      background: file(relativePath: { eq: "animation/bg-blur.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bear: file(relativePath: { eq: "animation/bear1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [bgAttached, setBgAttached] = useState("attached")
  const { height } = useWindowSize()

  const backgroundImageStack = [
    background.childImageSharp.fluid,
    bear.childImageSharp.fluid,
  ].reverse()

  const element = useRef(null)

  useEffect(() => {
    document.addEventListener("scroll", _ => {
      const { bottom, top } = element.current.selfRef.getBoundingClientRect()
      console.log(top)
      if (height) {
        const newState = bottom <= height
        setBgAttached(newState ? "not-attached" : "attached")
      }
    })
  })

  return (
    <section className={`animation ${bgAttached}`}>
      <SectionText
        title="... and <br>Momento Bear <br>is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />
      <BackgroundImage
        fluid={backgroundImageStack}
        className="background"
        ref={element}
      />

      {/* <BackgroundImage
        fluid={mobile.childImageSharp.fluid}
        className="mobile"
        style={{
          width: "600px",
          height: "692px",
        }}
      /> */}
    </section>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Set window width/height to state
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default Animation
