import { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import Video from '../../components/video/Video'

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
      <Video videos={videoList} />
    </div>
  )
}

export default Home
