import React, { useEffect, useState } from 'react'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'

function Home() {
  useEffect(() => {
    handleGetInitVideoList()
  }, [])

  const [videoList, setVideoList] = useState([])

  const handleGetInitVideoList = () => {
    VideoService.getAll().then(res => {
      console.log(res)
    })
  }
  return (
    <div className='text-white'>
      <NavHeader />
    </div>
  )
}

export default Home
