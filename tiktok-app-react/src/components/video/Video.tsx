import VideoModel from '../../models/Video'

function Video(videoDetail: VideoModel) {
  return (
    <>
      <video src={videoDetail.video_src}></video>
    </>
  )
}

export default Video
