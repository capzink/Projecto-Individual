const fs = require("fs");
const cloud = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();

cloud.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadSingleFiles = async (req, res) => {
  const { file, body } = req;
  if (size.file > 50000) {
    res.status(500).json({ msg: "file muy pesada" });
  }
  try {
    const result = await cloud.uploader.upload(file.path);
    res.status(200).json({ msg: "exito", result });
  } catch (error) {
    res.status(500).json(error);
  } finally {
    fs.unlinkSync(file.path);
  }
};

module.exports = uploadSingleFiles;
