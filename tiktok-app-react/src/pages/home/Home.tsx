import { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import NavAction from './NavAction'

import { Swiper, SwiperSlide } from 'swiper/react'
import NavInfo from './NavInfo'

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
            <div className='relative flex items-center w-full h-full'>
              <video
                src={video.video_url}
                key={index}
                autoPlay
                loop
                muted
                className='max-w-full max-h-full m-auto'
              />
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
    </div>
  )
}

export default Home
