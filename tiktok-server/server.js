const express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models')
db.sequelize.sync()
// // drop the table if it already exists in ENV development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Tiktok' })
})

// require('./app/routes/user.route.js')(app)
require('./app/routes/video.route.js')(app)

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
