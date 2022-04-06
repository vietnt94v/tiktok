import { createRef, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoModel from '../../models/Video'
import Video, { VideoExtendPlay } from '../../models/Video'
// import Video from './Video'
import NavAction from './NavAction'
import NavInfo from './NavInfo'

interface Props {
  videos: VideoModel[]
  loadMoreVideo: () => void
}

function VideoList({ videos, loadMoreVideo }: Props) {
  const [videosExtendPlay, setVideosExtendPlay] = useState<VideoExtendPlay[]>(
    []
  )
  const videosRefs = useRef(new Array(videos.length))

  useEffect(() => {
    setVideosExtendPlay(
      videos.map((video: VideoModel) => new VideoExtendPlay(video))
    )
  }, [videos])

  const handlePlayVideo = (index: number) => {
    console.log(videosRefs.current[index])
    videosRefs.current[index].play()
  }

  const handlePause = (index: number) => {
    console.log('pause')
    videosRefs.current[index].pause()
  }

  const handlePlay = (index: number) => {
    console.log('play')
    videosRefs.current[index].play()
  }

  const handleToggle = (index: number) => {
    console.log('toggle')
    videosRefs.current[index].play()
  }

  return (
    <Swiper
      className='w-full'
      direction={'vertical'}
      slidesPerView={1}
      onReachEnd={() => loadMoreVideo()}
    >
      {videos.map((video, index) => (
        <SwiperSlide
          className='w-full h-full flex justify-center items-center'
          key={index}
        >
          <div className='relative flex items-center w-full h-full'>
            <video
              ref={el => (videosRefs.current[index] = el)}
              src={video.video_src}
            ></video>
            <div
              className='absolute top-0 left-0 flex justify-center items-center w-full h-full cursor-pointer'
              // onClick={() => handlePlayVideo(index)}
            >
              <i className='fa fa-play text-50 translate-x-2'></i>
              <button
                className='border-2 p-3 mx-5'
                onClick={() => handlePause(index)}
              >
                Pause
              </button>
              <button
                className='border-2 p-3'
                onClick={() => handlePlay(index)}
              >
                Play
              </button>
              <button
                className='border-2 p-3'
                onClick={() => handleToggle(index)}
              >
                Toggle
              </button>
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

export default VideoList
