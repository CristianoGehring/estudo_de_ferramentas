const { Router } = require('express')

const ExampleController = require('./controllers/ExampleController')

const routes = Router()

routes.get('/example', ExampleController.index)
routes.post('/example', ExampleController.store)

routes.get('/', function (req, res) {
    res.send('Hello World!')
})

module.exports = routes;