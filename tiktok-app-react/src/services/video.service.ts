import http from '../http-common'

class VideoService {
  getAll() {
    return http.get('/video')
  }
}

export default new VideoService()
