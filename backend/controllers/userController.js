const UserModel = require("../models/userModel");

// Create a new item
exports.createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};