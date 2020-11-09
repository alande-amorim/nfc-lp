import React, { useRef, useState, useEffect } from "react"

const DynamicIcon = ({ path, ...rest }) => {
  const ImportedIconRef = React.useRef(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    console.log(`../${path}`)
    setLoading(true)
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`../${path}`)).ReactComponent
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [path])

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return <ImportedIcon {...rest} />
  }

  return null
}

// export default DynamicIcon
