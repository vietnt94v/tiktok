
module.exports = app => {
  const videos = require('../controllers/video.controller.js')
  var router = require('express').Router()

  router.post('/video', videos.create)
  router.get('/video', videos.getAll)

  // App user router link
  app.use('/api/v1/', router)
}
