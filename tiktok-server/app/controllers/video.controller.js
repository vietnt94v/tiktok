const Video = require('../models/video.model.js')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }
  const video = new Video({
    owner_id: req.body.owner_id,
    favorite_count: 0,
    comment_count: 0,
    share_count: 0,
    description: req.body.description,
    music_id: req.body.music_id,
    video_url: req.body.video_url,
    created_at: new Date(),
    updated_at: new Date(),
    video_status: 1
  })
  Video.create(video, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Video.'
      })
    else res.send(data)
  })
}

exports.getAll = (req, res) => {
  const name = req.query.name
  Video.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      })
    else res.send(data)
  })
}
