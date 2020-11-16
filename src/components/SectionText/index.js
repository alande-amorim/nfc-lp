import React from "react"
import Slide from "react-reveal/Slide"
import PropTypes from "prop-types"

const SectionText = ({ title, text, color, direction }) => {
  return (
    <div className={`section__text ${color} ${direction}`}>
      <Slide left={direction === "left"} right={direction === "right"}>
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      </Slide>
      <Slide left={direction === "right"} right={direction === "left"}>
        <p>
          <span>{text}</span>
        </p>
      </Slide>
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
