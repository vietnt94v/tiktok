interface Video {
  id: number
  owner_id: number
  user_name: string
  user_avatar: string
  description: string
  comment_count: number
  favorite_count: number
  share_count: number
  music_id: number
  video_status: number
  video_url: string
  created_at: Date
  updated_at: Date,
  pause: boolean
}

export default Video

