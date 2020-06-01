var express = require('express')
var app = express()

const ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://patrickisidoro:nuzor1539@ds133279.mlab.com:33279/crud-nodejs"

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('crud-nodejs') // coloque o nome do seu DB

  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
})

app.get('/', function (req, res) {
  // const cursor = db.collection('data').find()
  // console.log(cursor)
  res.send('Hello World!')
})