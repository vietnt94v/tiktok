class Video {
  id!: number
  owner_id!: number
  user_name!: string
  user_avatar!: string
  description!: string
  comment_count!: number
  favorite_count!: number
  share_count!: number
  music_id!: number
  video_status!: number
  video_src: string = ''
  created_at!: Date
  updated_at!: Date
}

export class VideoExtendProperty extends Video {
  newProperty: boolean = true

  constructor(init?: Partial<VideoExtendProperty>) {
    super()
    Object.assign(this, init)
  }
}


export class VideoExtendPlay extends Video {
  video_status_playing: boolean = false

  constructor(init?: Partial<VideoExtendPlay>) {
    super()
    Object.assign(this, init)
  }
}

export default Video

