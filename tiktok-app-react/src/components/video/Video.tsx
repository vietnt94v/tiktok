import VideoModel from '../../models/Video'

interface Props {
  videoDetail: VideoModel
}

function Video({ videoDetail }: Props) {
  return (
    <>
      <video src={videoDetail.video_src}></video>
    </>
  )
}

export default Video
