const Example = require('../models/Example');

module.exports = {
  async index(request, response) {
    const examples = await Example.find();

    return response.json(examples);
  },
  
  async store(request, response) {
    const { name, active } = request.query;

    let example = await Example.findOne({ name });

    if (!example) {
      example = await Example.create({
        name,
        active
      })
    }
  
    return response.json(example);
  },
}