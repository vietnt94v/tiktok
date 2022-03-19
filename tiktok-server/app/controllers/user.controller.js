const User = require('../models/user.model.js')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }
  const user = new User({
    user_name: req.body.user_name,
    password: req.body.password,
    nikname: req.body.nikname,
    description: req.body.description,
    following: 0,
    follower: 0,
    favorite: 0,
    status: 1
  })
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      })
    else res.send(data)
  })
}

exports.findAll = (req, res) => {
  const name = req.query.name
  User.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      })
    else res.send(data)
  })
}

exports.findAllActive = (req, res) => {
  User.getAllActive((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      })
    else res.send(data)
  })
}

exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving User with id ' + req.params.id
        })
      }
    } else res.send(data)
  })
}

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }
  User.updateById(req.params.id, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        })
      } else {
        res.status(500).send({
          message: 'Error updating User with id ' + req.params.id
        })
      }
    } else res.send(data)
  })
}
