import { useState, useRef } from "react"

import styles from "./VideoPlayer.module.css"

export function VideoPlayer () {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  
  const buttonClicked= () =>{
    if(isPlaying) {
      setIsPlaying(false)
      videoRef.current.pause()
    } else {
      setIsPlaying(true)
      videoRef.current.play()
    }
  }

  return <div>
    <h1>Video Player</h1>
    <div class={styles['video-wrapper']}>
      <video ref={videoRef} nocontrols>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button class={styles['video-button']} onClick={buttonClicked}>{isPlaying ? "Durdur": "Başlat"}</button>
    </div>
    <br />
    <br />
  </div>
}
