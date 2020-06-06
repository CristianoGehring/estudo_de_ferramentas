const { Router } = require('express')
const multer = require('multer')
const multerConfig = require("./config/multer")


const ExampleController = require('./controllers/ExampleController')

const routes = Router()

routes.get('/example', ExampleController.index)
routes.post('/example', ExampleController.store)

routes.post('/', function (req, res) {
    console.log(req)
    res.send('Hello!')
})

routes.post('/upload-imagem', multer(multerConfig).single('photo'), async (req, res) => {
  console.log(req.file)
  res.send(req.file)
  // const file = req.file
  // if (!file) {
  //     const error = new Error('Please upload a file')
  //     error.httpStatusCode = 400
  //     return next(error)
  // }
  // console.log(file)

  // res.send(file)
})

// routes.post('/upload-imagem', function (req, res) {
//     try {
//         if(!req.files) {
//             console.log(req.body)
//             res.send({
//                 status: false,
//                 message: 'No file uploaded'
//             });
//         } else {
//             //Use the name of the input field (i.e. "photo") to retrieve the uploaded file
//             let photo = req.files.photo;
            
//             //Use the mv() method to place the file in upload directory (i.e. "uploads")
//             photo.mv('./uploads/' + photo.name);

//             //send response
//             res.send({
//                 status: true,
//                 message: 'File is uploaded',
//                 data: {
//                     name: photo.name,
//                     mimetype: photo.mimetype,
//                     size: photo.size
//                 }
//             });
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// })

module.exports = routes;