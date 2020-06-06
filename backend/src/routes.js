const { Router } = require('express')
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })
const fs = require('fs')

const ExampleController = require('./controllers/ExampleController')

const routes = Router()

routes.get('/example', ExampleController.index)
routes.post('/example', ExampleController.store)

routes.post('/', function (req, res) {
    console.log(req)
    res.send('Hello!')
})

routes.post('/upload-imagem', function (req, res) {
  console.log(req.body)
  fs.writeFile(`./uploads/${req.body.filename}`, req.body.imgsource, 'base64', (err) => {
    if (err) throw err
  })
  res.status(200)
})

module.exports = routes;