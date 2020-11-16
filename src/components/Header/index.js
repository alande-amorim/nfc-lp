import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import ColorfulBar from "../ColorfulBar"

const Header = ({ siteTitle }) => {
  const { logo } = useStaticQuery(graphql`
    {
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
        <a href="https://nfcbear.com">
          <Image
            className="logo"
            fixed={logo.childImageSharp.fixed}
            alt="Momento Toys"
          />
        </a>
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
