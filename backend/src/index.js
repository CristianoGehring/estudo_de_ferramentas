require('dotenv').config()
var express = require('express')
var app = express()
const ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0-lozjt.mongodb.net/test?retryWrites=true&w=majority"


MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('estudo') // coloque o nome do seu DB

  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
})

app.get('/', function (req, res) {
  db.collection('data').find().toArray((err, results) => {
    if (err) return console.log(err)
    console.log(results)
    res.send('Hello World!')
  })
})