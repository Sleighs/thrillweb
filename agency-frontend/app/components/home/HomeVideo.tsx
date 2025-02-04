import React, { useEffect, useRef } from 'react'
import video from '../../../public/videos/globe-background.mp4'

type Props = {}

type State = {}

export default function HomeVideo(props: IAppProps) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Slow down the video to half speed (0.5 playback rate)
      videoRef.current.playbackRate = 0.65;
    }
  }, []);

    return (
      <video ref={videoRef} autoPlay loop muted playsInline className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
}