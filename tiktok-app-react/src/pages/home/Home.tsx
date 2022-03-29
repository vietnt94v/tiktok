import React, { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import Video from './Video'

import { Swiper, SwiperSlide } from 'swiper/react'

function Home() {
  const [videoList, setVideoList] = useState<VideoModel[]>([])

  useEffect(() => {
    handleGetInitVideoList()
  }, [])

  const handleGetInitVideoList = () => {
    VideoService.getAll().then(res => {
      setVideoList(res.data)
    })
  }
  return (
    <div className='relative h-full flex bg-black text-white'>
      <div className='absolute top-0 left-0 w-full z-50'>
        <NavHeader />
      </div>

      <Swiper
        className='w-full'
        direction={'vertical'}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
      >
        {videoList.map((video, index) => (
          <SwiperSlide
            className='w-full h-full flex justify-center items-center'
            key={index}
          >
            <div className=''>
              <video
                src={video.video_url}
                key={index}
                autoPlay
                loop
                className='max-w-full max-h-full m-auto'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Home
