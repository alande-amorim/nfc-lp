import React, { useState, useEffect, useRef } from "react"

import { useWindowSize } from "../../hooks/useWindowSize"
import useDeviceDetect from "../../hooks/useDeviceDetect"

import SectionText from "../SectionText"
import desktopVideo from "../../assets/animation/banner.mp4"
import mobileVideo from "../../assets/animation/banner-mobile-light.mp4"

const Animation = () => {
  const [playing, setPlaying] = useState(false)

  const { isMobile } = useDeviceDetect()
  const { height: screenHeight } = useWindowSize()

  const container = useRef(null)
  const video = useRef(null)

  const handleScroll = () => {
    const { bottom, top } = container.current.getBoundingClientRect()
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
  }, [isMobile, screenHeight])

  return (
    <section className={`animation`}>
      <SectionText
        title="... and <br>Momento Bear <br>is the chest."
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit."
        color="red"
        direction="left"
      />
      <div className="video-container" ref={container}>
        {isMobile && (
          <video loop muted playsInline ref={video}>
            <source src={mobileVideo} type="video/mp4" />
          </video>
        )}
        {!isMobile && (
          <video loop muted playsInline ref={video}>
            <source src={desktopVideo} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  )
}

export default Animation
