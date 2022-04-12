import React from 'react'
import { VideoExtendPlay } from '../../models/Video'

interface Props {
  info: VideoExtendPlay
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
          <div
            className={`flex whitespace-nowrap ${
              info.video_status_playing ? 'text-stream' : ''
            }`}
          >
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
