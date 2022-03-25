const express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Tiktok' })
})

require('./app/routes/user.route.js')(app)
require('./app/routes/video.route.js')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
