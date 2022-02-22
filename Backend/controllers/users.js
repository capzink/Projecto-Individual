const User = require("../models/User");
//const { uploadSingleFiles } = require("../upload/upload.controller");

const createUsers = async (req, res) => {
  //const { cloudinaryImage } = req;
  try {
    const user = await User.create({
      ...req.body,
      //imgeUrl: cloudinaryImage.url,
    });
    res.status(200).json({ user, msg: "user created" });
  } catch (error) {
    res.status(400).json("something went wrong we cannot create user");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json("need Email and Password");
    }
    const user = await User.findOne({ username });
    if (!username) {
      return res.status(500).json("user not found, pelase try a new one");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(500).json("password is not valid");
    }
    res.status(200).json({username}); //user.profile
  } catch (error) {
    return res.status(500).json("user not found");
  }
};

module.exports = {
  createUsers,
  login,
};