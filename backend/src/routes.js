const { Router } = require('express');
const authMiddleware = require("./middlewares/auth");

const ExampleController = require('./controllers/ExampleController');
const UploadImageController = require('./controllers/UploadImageController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/example', ExampleController.index);
routes.post('/example', ExampleController.store);

routes.get('/upload-image', UploadImageController.index);
routes.post('/upload-image', UploadImageController.store);

routes.post('/user/register', UserController.register);
routes.post('/user/authenticate', UserController.authenticate);

routes.use(authMiddleware);

routes.get('/user/me', UserController.me);

module.exports = routes;