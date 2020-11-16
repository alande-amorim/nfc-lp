import PropTypes from "prop-types"
import React from "react"

import Logo from "../../assets/header/logo.svg"
import ColorfulBar from "../ColorfulBar"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <ColorfulBar />

      <div className="header__logo-wrapper">
        <a href="https://nfcbear.com">
          <Logo />
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
