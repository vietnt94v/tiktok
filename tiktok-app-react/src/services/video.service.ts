import http from '../http-common'

class VideoService {
  getAll() {
    return http.get('/videos')
  }
}

export default new VideoService()
