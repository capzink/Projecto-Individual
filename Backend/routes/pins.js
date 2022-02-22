const router = require("express").Router();
const Pin = require("../models/Pin");
const {
  createPin,
  getPin,
}= require('../controllers/pin')

//create a pin
router.route("/").post(createPin) 

//get all pins
router.route("/").get(getPin) 

module.exports = router;
