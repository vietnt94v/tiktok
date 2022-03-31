import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { VideoX } from '../../pages/home/Home'
import NavAction from './NavAction'
import NavInfo from './NavInfo'

interface Props {
  videos: VideoX[]
  loadMoreVideo: () => void
}

function Video({ videos, loadMoreVideo }: Props) {
  const [videoS, setVideoS] = useState<VideoX[]>([])

  useEffect(() => {
    setVideoS([...videos])
  }, [videos])

  const pauseVideo = (video: VideoX) => {
    video.togglePause()
    setVideoS([...videoS])
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
            <video
              src={video.video_url}
              key={index}
              autoPlay
              loop
              muted
              className='max-w-full max-h-full m-auto'
            />

            <div
              className='absolute top-0 left-0 w-full h-full flex justify-center items-center'
              onClick={() => pauseVideo(video)}
            >
              {video.pause ? (
                <i className='fas fa-play text-50 translate-x-2'></i>
              ) : null}
            </div>
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

export default Video
