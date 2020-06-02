const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  name: String,
  active: Boolean
});

module.exports = mongoose.model('Example', ExampleSchema);