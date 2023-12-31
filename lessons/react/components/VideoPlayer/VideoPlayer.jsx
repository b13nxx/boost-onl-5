import { useState, useRef, useEffect } from "react"

import styles from "./VideoPlayer.module.css"

export function VideoPlayer () {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current.pause() // Bu bir yan etkidir
    } else {
      videoRef.current.play()
    }
  }, [isPlaying])

  const handlePlayButtonClick = () =>{
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  return <div>
    <h1>Video Player</h1>
    <div className={styles['video-wrapper']}>
      <video ref={videoRef} controls={false}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className={styles['video-button']} onClick={handlePlayButtonClick}>{isPlaying ? "Durdur": "Başlat"}</button>
    </div>
    <br />
    <br />
  </div>
}
