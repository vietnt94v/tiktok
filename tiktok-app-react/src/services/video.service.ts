import http from '../http-common'

class VideoService {
  getAll(page?: number, size?: number) {
    return http.get(`/videos?page=${page}&size=${size}`)
  }
}

export default new VideoService()
