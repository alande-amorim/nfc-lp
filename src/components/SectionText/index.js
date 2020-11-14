import React from "react"
import PropTypes from "prop-types"

const SectionText = ({ title, text, color, direction }) => {
  return (
    <div className={`section__text ${color} ${direction}`}>
      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      <p>
        <span>{text}</span>
      </p>
    </div>
  )
}

SectionText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf(["red", "green", "blue"]),
  direction: PropTypes.oneOf(["left", "right"]),
}

SectionText.defaultProps = {
  color: "red",
  direction: "left",
}

export default SectionText
