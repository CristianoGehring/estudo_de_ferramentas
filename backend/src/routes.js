const { Router } = require('express')

const ExampleController = require('./controllers/ExampleController')
const UploadImageController = require('./controllers/UploadImageController')

const routes = Router()

routes.get('/', function(req, res) {
    res.send('Hello World!!!')
})

routes.get('/example', ExampleController.index)
routes.post('/example', ExampleController.store)

routes.get('/upload-image', UploadImageController.index)
routes.post('/upload-image', UploadImageController.store)

module.exports = routes;