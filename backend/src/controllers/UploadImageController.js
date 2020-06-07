const UploadImage = require('../models/UploadImage');
const fs = require('fs')
const uuid = require('uuid')

module.exports = {
  async index(request, response) {
    const uploadImages = await UploadImage.find();
    console.log(uploadImages)

    return response.json(uploadImages);
  },
  
  async store(request, response) {
    const { filename, imgsource, type } = request.body;
    const name = `${uuid.v1()}.${type.split('/').pop()}`

    fs.writeFile(`uploads/${name}`, imgsource, 'base64', (err) => {
      if (err) throw err
    })

    uploadImage = await UploadImage.create({
      name,
      original_name: filename
    })
  
    return response.json(uploadImage);
  },
}