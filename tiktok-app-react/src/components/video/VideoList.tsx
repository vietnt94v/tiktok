import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoModel from '../../models/Video'
import { VideoExtendPlay } from '../../models/Video'
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
    setVideosExtendPlay([
      ...videosExtendPlay,
      ...videos.map((video: VideoModel) => new VideoExtendPlay(video))
    ])
  }, [videos])

  const handleToggleVideo = (video: VideoExtendPlay, index: number) => {
    video.video_status_playing = !video.video_status_playing
    setVideosExtendPlay([...videosExtendPlay])
    video.video_status_playing
      ? videosRefs.current[index].play()
      : videosRefs.current[index].pause()
  }

  const handleVideoActiveSlide = (slide: any) => {
    const index = slide.activeIndex

    if (videosExtendPlay[index - 1]) {
      videosRefs.current[index - 1].pause()
      videosExtendPlay[index - 1].video_status_playing = false
    }

    if (videosExtendPlay[index + 1]) {
      videosRefs.current[index + 1].pause()
      videosExtendPlay[index + 1].video_status_playing = false
    }

    videosRefs.current[index].play()
    videosExtendPlay[index].video_status_playing = true

    setVideosExtendPlay([...videosExtendPlay])
  }

  return (
    <Swiper
      className='w-full'
      direction={'vertical'}
      slidesPerView={1}
      onSlideChange={slide => {
        handleVideoActiveSlide(slide)
      }}
      onReachEnd={() => loadMoreVideo()}
    >
      {videosExtendPlay.map((video, index) => (
        <SwiperSlide
          className='w-full h-full flex justify-center items-center'
          key={index}
        >
          <div className='relative flex items-center w-full h-full'>
            <video
              loop
              ref={el => (videosRefs.current[index] = el)}
              src={video.video_src}
            ></video>
            <div
              className='absolute top-0 left-0 flex justify-center items-center w-full h-full cursor-pointer'
              onClick={() => handleToggleVideo(video, index)}
            >
              {video.video_status_playing ? (
                video.video_status_playing
              ) : (
                <i className='fa fa-play text-50 translate-x-2'></i>
              )}
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
