import React from "react"

import ColorfulBar from "../ColorfulBar"

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
        <p>
          &copy; <b>Momento Bear </b>2020 - Registered Trademark
        </p>
      </div>

      <ColorfulBar inverted />
    </footer>
  )
}

export default Footer
