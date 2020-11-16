import React from "react"
import PropTypes from "prop-types"

const SectionContent = ({ className, children, direction }) => {
  return (
    <div className={`section__content ${className} ${direction}`}>
      {children}
    </div>
  )
}

SectionContent.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default SectionContent
