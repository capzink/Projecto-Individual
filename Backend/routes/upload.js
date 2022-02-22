const express = require("express");
const multer = require("multer");
const router = express.Router();
const uploadSingleFile = require("../controllers/upload");
const upload = multer({ dest:"./temp" });

router.route("/upload").post(upload.single('image'), uploadSingleFile);


module.exports = router;
