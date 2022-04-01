const db = require('../models')
const Video = db.videos
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  // Validate request
  if (!req.body.video_src) {
    res.status(400).send({
      message: 'video_src can not be empty!'
    })
    return
  }
  // Create a Tutorial
  const video = {
    owner_id: req.body.owner_id,
    user_name: req.body.user_name,
    user_avatar: req.body.user_avatar,
    title: req.body.title,
    comment_count: 0,
    favorite_count: 0,
    share_count: 0,
    music_id: req.body.music_id,
    video_status: Number(req.body.video_status),
    video_src: req.body.video_src
  }
  // Save Tutorial in the database
  Video.create(video)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Video.'
      })
    })
}

exports.findAll = (req, res) => {
  const title = req.query.title
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null
  Video.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.'
      })
    })
}

exports.findOne = (req, res) => {}
exports.update = (req, res) => {}
exports.delete = (req, res) => {}
exports.deleteAll = (req, res) => {}
exports.findAllPublished = (req, res) => {}
