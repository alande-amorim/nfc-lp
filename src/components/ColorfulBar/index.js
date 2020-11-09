import React from "react"
import PropTypes from "prop-types"

const ColorfulBar = ({ inverted }) => {
  return (
    <div className={`colorful_bar ${inverted ? "inverted" : null}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

ColorfulBar.propTypes = { inverted: PropTypes.bool }
ColorfulBar.defaultProps = {
  inverted: false,
}

export default ColorfulBar
