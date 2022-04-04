import { useEffect, useState } from 'react'
import VideoModel from '../../models/Video'
import VideoService from '../../services/video.service'
import NavHeader from './NavHeader'
import VideoList from '../../components/video/VideoList'

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
    loadMoreVideo()
  }, [])

  const handleGetInitVideoList = () => {
    VideoService.getAll().then(res => {
      const data = res.data.map((item: VideoModel) => new VideoX(item))
      setVideoList([...data])
    })
  }

  const loadMoreVideo = () => {
    let newVideoLoadedArray: VideoX[] = [
      {
        id: 6,
        owner_id: 1,
        favorite_count: 0,
        comment_count: 0,
        share_count: 0,
        description: 'video st 2',
        music_id: 1,
        video_src:
          'https://v16-webapp.tiktok.com/af89ea842a6c4415a1dd6672d6b1169f/62457d5a/video/tos/maliva/tos-maliva-ve-0068c799-us/427bd87acdcd40219a97c8d25f71b852/?a=1988&br=1102&bt=551&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7The_yzDXq&l=202203310407100102510582200306C8E0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l4cWc6ZmZtOzMzZzczNEApZjtmO2lkNGVlNzc7O2Q4M2cwNmJlcjQwNWlgLS1kMS9zczBfYl4zYi9iY2MzXi8vMl86Yw%3D%3D&vl=&vr=',
        video_status: 1,
        created_at: new Date(),
        updated_at: new Date(),
        user_name: 'vietnt',
        user_avatar: 'https://prnt.sc/RP3aUXgogyrF',
        pause: false,
        togglePause: function (): void {
          throw new Error('Function not implemented.')
        }
      }
    ]

    setVideoList([...videoList, ...newVideoLoadedArray])
  }

  return (
    <div className='relative h-full flex bg-black text-white'>
      <div className='absolute top-0 left-0 w-full z-50'>
        <NavHeader />
      </div>
      <VideoList videos={videoList} loadMoreVideo={loadMoreVideo} />
    </div>
  )
}

export default Home
