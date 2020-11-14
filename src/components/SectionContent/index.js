import React from "react"
import PropTypes from "prop-types"

const SectionContent = ({ className, children, direction }) => {
  return (
    <div className={`section__content ${className} ${direction}`}>
      {children}
    </div>
  )
}

export default SectionContent
