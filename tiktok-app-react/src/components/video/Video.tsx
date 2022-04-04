import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface Props {
  options: any
  onReady: any
}

function Video({ options, onReady }: Props) {
  const videoRef = useRef<any>(null)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log('player is ready')
        onReady && onReady(player)
      }))
    } else {
      const player = playerRef.current

      if (options.sources.length > 0) {
        player.autoplay(options.autoplay)
        player.src(options.sources)
      }
    }
  }, [options, videoRef])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )
}

export default Video
