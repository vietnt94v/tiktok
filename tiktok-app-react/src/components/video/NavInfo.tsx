import React from 'react'
import VideoModel from '../../models/Video'

interface Props {
  info: VideoModel
}

function NavInfo({ info }: Props) {
  return (
    <>
      <div className='block text-16 font-500'>{info.user_name}</div>
      <div className='block font-300 text-line-clamp-2'>{info.description}</div>
      <div className='flex'>
        <div className='shrink-0 grow-0'>
          <i className='fas fa-music'></i>
        </div>
        <div className='block font-300 mx-2 overflow-hidden'>
          <div className='text-stream flex whitespace-nowrap'>
            <div className='pr-5'>{info.music_id} @Lạc trôi ST.MVP</div>
            <div className='pr-5'>{info.music_id} @Lạc trôi ST.MVP</div>
            <div className='pr-5'>{info.music_id} @Lạc trôi ST.MVP</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavInfo
