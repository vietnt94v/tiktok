import { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import Video from '../../components/video/Video'

export class VideoX extends VideoModel {
  pause: boolean = false

  constructor(init?: Partial<VideoX>) {
    super()
    Object.assign(this, init)
  }

  togglePause() {
    this.pause = !this.pause
  }
}

function Home() {
  const [videoList, setVideoList] = useState<VideoX[]>([])

  useEffect(() => {
    handleGetInitVideoList()
  }, [])

  const handleGetInitVideoList = () => {
    VideoService.getAll().then(res => {
      const data = res.data.map((item: VideoModel) => new VideoX(item))
      setVideoList([...data])
    })
  }

  return (
    <div className='relative h-full flex bg-black text-white'>
      <div className='absolute top-0 left-0 w-full z-50'>
        <NavHeader />
      </div>
      <Video videos={videoList} />
    </div>
  )
}

export default Home
