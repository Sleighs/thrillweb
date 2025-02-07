import React, { useEffect, useRef } from 'react'
import '../../../public/styles/home/hero-section.css'

export interface IAppProps {}

export default function HomeVideo(props: IAppProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        <source src={'/videos/globe-background.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
}