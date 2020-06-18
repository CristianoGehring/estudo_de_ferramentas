require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = require('socket.io')(server)

const messages = [];

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  socket.emit('previousMessages', messages)
  
  socket.on('sendMessage', data => {
    messages.push(data)
    socket.broadcast.emit('receivedMessage', data)
  })
});

mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0-lozjt.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//add other middleware
app.use(cors())
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '15MB' }))

app.use(routes)

var port = process.env.PORT || 3000
server.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});