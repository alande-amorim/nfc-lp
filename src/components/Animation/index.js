import React, { useState, useEffect, useRef } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import SectionText from "../SectionText"
import desktopVideo from "../../assets/animation/banner.mp4"
import mobileVideo from "../../assets/animation/banner-mobile.mp4"

const Animation = () => {
  const [frame, setFrame] = useState(0)
  const [playing, setPlaying] = useState(false)

  const { height: screenHeight } = useWindowSize()

  const container = useRef(null)
  const video = useRef(null)

  const handleScroll = () => {
    const { bottom, height, top } = container.current.getBoundingClientRect()
    if (top <= 0 && bottom > screenHeight) {
      playVideo()
    } else {
      pauseVideo()
    }

    window.requestAnimationFrame(handleScroll)
  }

  const playVideo = () => {
    setPlaying(true)
    video.current.play()
  }

  const pauseVideo = () => {
    setPlaying(false)
    video.current.pause()
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof screenHeight !== "undefined") {
      window.requestAnimationFrame(handleScroll)
    }
  }, [screenHeight])

  return (
    <section className={`animation`} style={{ height: "200vh" }}>
      <SectionText
        title="... and <br>Momento Bear <br>is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy."
        color="red"
        direction="left"
      />
      <div className="video-container" ref={container}>
        <video ref={video} loop muted playsinline class>
          <source src={mobileVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default Animation
