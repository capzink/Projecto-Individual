const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  uploadSingleFiles,
} = require("./upload.controller");
const upload = multer({ dest: "./temp" });

router.route("/file").post(upload.single("pdf"), uploadSingleFiles);


module.exports = router;
