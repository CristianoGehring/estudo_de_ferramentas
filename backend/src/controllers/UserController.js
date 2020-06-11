const User = require('../models/User');

module.exports = {
  async register(request, response) {
    const { email, name } = request.body;

    try {
      if (await User.findOne({ email })) {
        return response.status(400).json({ error: "User already exists" });
      }

      const user = await User.create(request.body);

      return response.json({ user });
    } catch (err) {
      console.log(err)
      return response.status(400).json({ error: "User registration failed" });
    }
  },
  
  async authenticate(request, response) {
    try {
      const { email, password } = request.body;
  
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        return response.status(400).json({ error: "User not found" });
      }
  
      if (!(await user.compareHash(password))) {
        return response.status(400).json({ error: "Invalid password" });
      }
  
      return response.json({
        user,
        token: user.generateToken()
      });
    } catch (err) {
      console.log(err)
      return response.status(400).json({ error: "User authentication failed" });
    }
  },

  async me(request, response) {
    try {
      const { userId } = request;
  
      const user = await User.findById(userId);
  
      return response.json({ user });
    } catch (err) {
      return response.status(400).json({ error: "Can't get user information" });
    }
  },
};