import React from "react"

import ColorfulBar from "../ColorfulBar"

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
        <p>
          &copy; Momento Bear 2020 - <br />
          Registered Trademark
        </p>
      </div>

      <ColorfulBar inverted />
    </footer>
  )
}

export default Footer
