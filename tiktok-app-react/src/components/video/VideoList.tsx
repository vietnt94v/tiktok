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
      src: 'https://v16-webapp.tiktok.com/3c60f02124344b8a5cddf2a769cd5e1a/624b15ff/video/tos/useast2a/tos-useast2a-pve-0037-aiso/fb3e9e22a15743d3bda86fced4cb9209/?a=1988&br=1892&bt=946&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThXDTqDXq&l=2022040409595201025100418512352567&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzlsaDg6Zmo1OzMzZjgzM0ApaDQ6NjhpaTs0NzkzNWU7PGc2YGBpcjRvay5gLS1kL2Nzc2EyYzUxYjQzMTIzYjUzMC86Yw%3D%3D&vl=&vr=',
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
