import { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import VideoList from '../../components/video/VideoList'

function Home() {
  const [videos, setVideos] = useState<VideoModel[]>([])
  const [loadingVideo, setLoadingVideo] = useState(false)

  useEffect(() => {
    handleGetInitVideoList()
    loadMoreVideo()
  }, [])

  const handleGetInitVideoList = async () => {
    setLoadingVideo(true)
    await VideoService.getAll()
      .then(res => {
        setVideos([...res.data])
      })
      .catch(err => console.log(err))
    setLoadingVideo(false)
  }

  const loadMoreVideo = () => {
    console.log('More video loaded')
  }

  return (
    <div className='relative h-full flex bg-black text-white'>
      <div className='absolute top-0 left-0 w-full z-50'>
        <NavHeader />
      </div>
      {loadingVideo ? (
        <div className='flex justify-center items-center w-full'>
          <i className='fad fa-spinner-third animate-spin duration-500 text-30 '></i>
        </div>
      ) : (
        <VideoList videos={videos} loadMoreVideo={loadMoreVideo} />
      )}
    </div>
  )
}

export default Home
