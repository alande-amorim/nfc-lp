import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import ColorfulBar from "../ColorfulBar"

const Header = ({ siteTitle }) => {
  const { logobg, logo } = useStaticQuery(graphql`
    {
      logobg: file(relativePath: { eq: "header/logo-bg.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "header/logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <header>
      <ColorfulBar />

      <div className="header__logo-wrapper">
        <BackgroundImage fixed={logobg.childImageSharp.fixed}>
          <a href="https://nfcbear.com">
            <Image
              className="logo"
              fixed={logo.childImageSharp.fixed}
              alt="Momento Toys"
            />
          </a>
        </BackgroundImage>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
