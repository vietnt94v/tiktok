import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { VideoX } from '../../pages/home/Home'
import Video from './Video'
import NavAction from './NavAction'
import NavInfo from './NavInfo'

interface Props {
  videos: VideoX[]
  loadMoreVideo: () => void
}

function VideoList({ videos, loadMoreVideo }: Props) {
  const [videoS, setVideoS] = useState<VideoX[]>([])
  const playerRef = useRef<any>(null)

  let sourceVideo: any[] = [
    {
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      type: 'video/mp4'
    }
  ]

  useEffect(() => {
    setVideoS([...videos])

    sourceVideo = videos.map(video => ({
      src: video.video_src,
      type: 'type/mp4'
    }))
  }, [videos])

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: sourceVideo
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    player.on('waiting', () => {
      console.log('player is waiting')
    })

    player.on('dispose', () => {
      console.log('player will dispose')
    })
  }

  return (
    <Swiper
      className='w-full'
      direction={'vertical'}
      slidesPerView={1}
      onReachEnd={() => loadMoreVideo()}
    >
      {videoS.map((video, index) => (
        <SwiperSlide
          className='w-full h-full flex justify-center items-center'
          key={index}
        >
          <div className='relative flex items-center w-full h-full'>
            <Video options={videoJsOptions} onReady={handlePlayerReady} />
            <div className='absolute bottom-5 right-2 z-50'>
              <NavAction action={video} />
            </div>
            <div className='absolute bottom-0 left-0 w-full pl-3 pr-24 pb-3'>
              <NavInfo info={video} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default VideoList
