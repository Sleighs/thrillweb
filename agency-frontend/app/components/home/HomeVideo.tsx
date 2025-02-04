import React, { useEffect, useRef } from 'react'
import video from '../../../public/videos/globe-background.mp4'
import '../../../public/styles/home/hero-section.css'

export interface IAppProps {
}

export default function HomeVideo(props: IAppProps) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Slow down the video
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

    return (
      <video 
        ref={videoRef} 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="none"
        className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
}