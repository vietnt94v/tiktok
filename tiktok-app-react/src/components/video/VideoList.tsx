import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoModel from '../../models/Video'
import Video from './Video'
import NavAction from './NavAction'
import NavInfo from './NavInfo'

interface Props {
  videos: VideoModel[]
  loadMoreVideo: () => void
}

function VideoList({ videos, loadMoreVideo }: Props) {
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
            <Video videoDetail={video} />
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
