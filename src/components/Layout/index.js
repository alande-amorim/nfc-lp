import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

import SEO from "../SEO"
import Header from "../Header"
import Footer from "../Footer"

import "../../style/custom-bootstrap.scss"
import "../../style/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
