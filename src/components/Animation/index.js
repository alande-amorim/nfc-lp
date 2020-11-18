import React, { useState, useEffect, useRef } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import SectionText from "../SectionText"
import videoSource from "../../assets/animation/banner.mp4"

const Animation = () => {
  // const [progress, setProgress] = useState(0)

  const { height: screenHeight } = useWindowSize()

  const container = useRef(null)
  const video = useRef(null)

  const handleScroll = () => {
    const progress = calcProgress()
    setPlayback(progress)
    window.requestAnimationFrame(handleScroll)
  }

  function calcProgress() {
    const { bottom, height, top } = container.current.getBoundingClientRect()
    if (top <= screenHeight && bottom >= screenHeight) {
      // console.log(((screenHeight - top) / height) * 100)

      return ((screenHeight - top) / height) * 100
    } else {
      return false
    }
  }

  function setPlayback(progress) {
    const videoEl = video.current
    if (!!progress) {
      videoEl.currentTime = videoEl.duration * (progress / 100)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof screenHeight !== "undefined") {
      window.requestAnimationFrame(handleScroll)
    }
  }, [screenHeight])

  return (
    <section className={`animation`} style={{ height: "500vh" }}>
      <SectionText
        title="... and <br>Momento Bear <br>is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />
      <div className="video-container" ref={container}>
        <video ref={video}>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default Animation
