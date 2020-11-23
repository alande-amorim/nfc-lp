import React, { useEffect, useRef } from "react"

import { useWindowSize } from "../../hooks/useWindowSize"
import useDeviceDetect from "../../hooks/useDeviceDetect"

import SectionText from "../SectionText"
import desktopVideo from "../../assets/animation/banner-desk.mp4"
import mobileVideo from "../../assets/animation/banner-mob.mp4"

const Animation = () => {
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
    video.current.play()
  }

  const pauseVideo = () => {
    video.current.pause()
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof screenHeight !== "undefined") {
      window.requestAnimationFrame(handleScroll)
    }
  }, [isMobile, screenHeight, handleScroll])

  return (
    <section className={`animation`}>
      <SectionText
        title="And <br>Momento Bear <br>is the chest."
        text="Learn how The Talking Teddy Bear can play bedtime stories, save memories, and so much more with just a tap of your phone! Scroll down and watch as the magic unfolds."
        color="red"
        direction="left"
      />
      <div className="video-container" ref={container}>
        {isMobile && (
          <video loop playsInline ref={video}>
            <source src={mobileVideo} type="video/mp4" />
          </video>
        )}
        {!isMobile && (
          <video loop playsInline ref={video}>
            <source src={desktopVideo} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  )
}

export default Animation
