const sql = require('./db.js')

const User = function (user) {
  this.user_name = user.user_name
  this.password = user.password
  this.nikname = user.nikname
  this.description = user.description
  this.following = user.following
  this.follower = user.follower
  this.favorite = user.favorite
  this.status = user.status
}

User.create = (newUser, result) => {
  sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      result(err, null)
      return
    }
    result(null, { id: res.insertId, ...newUser })
  })
}

User.findById = (id, result) => {
  sql.query(
    `SELECT * FROM users WHERE id = ${id} AND status = 1`,
    (err, res) => {
      if (err) {
        result(err, null)
        return
      }
      if (res.length) {
        result(null, res[0])
        return
      }
      result({ kind: 'not_found' }, null)
    }
  )
}

User.getAll = (name, result) => {
  let query = 'SELECT * FROM users'
  if (name) {
    query += ` WHERE (nikname LIKE '%${name}%' OR user_name LIKE '%${name}%') AND status = 1`
  }
  sql.query(query, (err, res) => {
    if (err) {
      result(null, err)
      return
    }
    result(null, res)
  })
}

User.getAllActive = result => {
  sql.query('SELECT * FROM users WHERE status = 1', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    result(null, res)
  })
}

User.updateById = (id, user, result) => {
  sql.query(
    'UPDATE users SET nikname = ?, description = ? WHERE id = ? AND status = 1',
    [user.nikname, user.description, id],
    (err, res) => {
      if (err) {
        result(null, err)
        return
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null)
        return
      }
      result(null, { id: id, ...user })
    }
  )
}

User.remove = (id, result) => {
  sql.query(
    'UPDATE users SET status = 2 ? WHERE id = ? AND status = 1',
    [user.status, id],
    (err, res) => {
      if (err) {
        result(null, err)
        return
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null)
        return
      }
      result(null, res)
    }
  )
}

module.exports = User
