import React, { useState, useEffect, useRef, useCallback } from "react"
import lottie from "lottie-web"
import animationData from "../../assets/animation/lf30_editor_ges4wgcd.json"

import { useWindowSize } from "../../hooks/useWindowSize"
import useDeviceDetect from "../../hooks/useDeviceDetect"

import SectionText from "../SectionText"
import desktopVideo from "../../assets/animation/banner-desk.mp4"
import mobileVideo from "../../assets/animation/banner-mob.mp4"

const Animation = () => {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [canSound, setCanSound] = useState(false)
  const { isMobile } = useDeviceDetect()
  const { height: screenHeight } = useWindowSize()

  const container = useRef(null)
  const lottieContainer = useRef(null)
  const video = useRef(null)

  const handleScroll = useCallback(() => {
    const { bottom, top } = container.current.getBoundingClientRect()
    const shouldPlay = top <= 0 && bottom > screenHeight

    setPlaying(shouldPlay)

    window.requestAnimationFrame(handleScroll)
  }, [screenHeight])

  const handleCanSound = () => {
    setCanSound(true)
    setMuted(false)
  }

  const playVideo = useCallback(() => {
    const playPromise = video.current.play()
    playPromise
      .then(() => {
        if (canSound) {
          setMuted(false)
        }
      })
      .finally(_ => {
        if (!canSound) {
          setMuted(true)
        }
        video.current.play()
      })
  }, [canSound])

  function pauseVideo() {
    video.current.pause()
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof screenHeight !== "undefined") {
      window.requestAnimationFrame(handleScroll)

      document.addEventListener("click", handleCanSound)
    }
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
    return () => anim.destroy()
  }, [isMobile, screenHeight, handleScroll])

  useEffect(() => {
    if (playing) {
      playVideo()
    } else {
      pauseVideo()
    }
  }, [playing, playVideo])

  return (
    <section className={`animation`}>
      <SectionText
        title="And <br>Momento Bear <br>is the chest."
        text="Learn how The Talking Teddy Bear can play bedtime stories, save memories, and so much more with just a tap of your phone! Scroll down and watch as the magic unfolds."
        color="red"
        direction="left"
      />
      <div className="video-container" ref={container}>
        <div className="video-wrapper">
          {isMobile && (
            <video loop muted={muted} playsInline ref={video}>
              <source src={mobileVideo} type="video/mp4" />
            </video>
          )}
          {!isMobile && (
            <video loop muted={muted} playsInline ref={video}>
              <source src={desktopVideo} type="video/mp4" />
            </video>
          )}

          <div className={`unmute-video ${!muted && "hide"}`}>
            <div className="lottie-container" ref={lottieContainer} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Animation
