module.exports = app => {
  const videos = require('../controllers/video.controller.js')
  var router = require('express').Router()
  // Create a new Tutorial
  router.post('/', videos.create)
  // // Retrieve all videos
  router.get('/', videos.findAll)
  // // Retrieve all published videos
  // router.get("/published", videos.findAllPublished);
  // // Retrieve a single Tutorial with id
  // router.get("/:id", videos.findOne);
  // // Update a Tutorial with id
  // router.put("/:id", videos.update);
  // // Delete a Tutorial with id
  // router.delete("/:id", videos.delete);
  // // Delete all videos
  // router.delete("/", videos.deleteAll);
  app.use('/api/v1/videos', router)
}
