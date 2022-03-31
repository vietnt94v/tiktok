module.exports = app => {
  const users = require('../controllers/user.controller.js')
  var router = require('express').Router()

  router.post('/user', users.create)
  router.get('/user', users.findAll)
  router.get('/user/active', users.findAllActive)
  router.get('/user/:id', users.findOne)
  router.put('/user/:id', users.update)

  // App user router link
  app.use('/api/v1/', router)
}
