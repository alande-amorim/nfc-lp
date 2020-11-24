import { useEffect } from "react"
import { navigate } from "@reach/router"

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/smart-bear")
  }, [])

  return null
}

export default NotFoundPage
