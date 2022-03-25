const sql = require('./db.js')

const Video = function (video) {
  this.owner_id = video.owner_id
  this.favorite_count = video.favorite_count
  this.comment_count = video.comment_count
  this.share_count = video.share_count
  this.description = video.description
  this.music_id = video.music_id
  this.video_url = video.video_url
  this.video_status = video.video_status
  this.created_at = video.created_at
  this.updated_at = video.updated_at
}

Video.create = (newVideo, result) => {
  sql.query('INSERT INTO videos SET ?', newVideo, (err, res) => {
    if (err) {
      result(err, null)
      return
    }
    result(null, { id: res.insertId, ...newVideo })
  })
}

Video.getAll = (name, result) => {
  let query = 'SELECT v.*, u.user_name, u.user_avatar FROM videos v JOIN users u ON v.owner_id = u.id WHERE status = 1'
  sql.query(query, (err, res) => {
    if (err) {
      result(null, err)
      return
    }
    result(null, res)
  })
}


module.exports = Video
