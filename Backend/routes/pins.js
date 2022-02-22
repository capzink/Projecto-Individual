const router = require("express").Router();
const Pin = require("../models/Pin")
const { createPin, getPin } = require("../controllers/pin");

router.route("/").post(createPin);
router.get("/").get(getPin);

module.exports = router;
