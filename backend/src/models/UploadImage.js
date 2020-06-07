const mongoose = require('mongoose');

const UploadImageSchema = new mongoose.Schema({
  name: String,
  original_name: String
});

module.exports = mongoose.model('UploadImage', UploadImageSchema);