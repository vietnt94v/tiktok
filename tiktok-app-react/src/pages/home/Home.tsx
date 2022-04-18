import { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import VideoList from '../../components/video/VideoList'

function Home() {
  const [videos, setVideos] = useState<VideoModel[]>([])
  const [loadingVideo, setLoadingVideo] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(2)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    handleGetInitVideoList()
  }, [])

  const handleGetInitVideoList = async () => {
    setLoadingVideo(true)
    await VideoService.getAll(page, limit)
      .then(res => {
        setTotalPage(res.data.totalPages)
        setVideos(res.data.videos)
      })
      .catch(err => console.log(err))
    setLoadingVideo(false)
  }

  const handleGetMoreVideoList = async () => {
    VideoService.getAll(page, limit)
      .then(res => {
        // console.log(page)
        // console.log(videos)
        // console.log(res.data.videos)
        // setVideos([...videos, ...res.data.videos])
      })
      .catch(err => console.log(err))
  }

  const loadMoreVideo = async () => {
    setPage(page + 1)
    if (page <= totalPage) {
      console.log(page)
      handleGetMoreVideoList()
    }
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
