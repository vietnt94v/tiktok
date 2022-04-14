const db = require('../models')
const Video = db.videos
const Op = db.Sequelize.Op
const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: videos } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, videos, totalPages, currentPage }
}

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
  const { page, size, title } = req.query
  var condition = title
    ? { video_status: 1, title: { [Op.like]: `%${title}%` } }
    : { video_status: 1 }
  const { limit, offset } = getPagination(page - 1, size)
  Video.findAndCountAll({
    where: condition,
    limit,
    offset
  })
    .then(data => {
      const response = getPagingData(data, page, limit)
      res.send(response)
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
