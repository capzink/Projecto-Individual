
const router = require("express").Router();
const  {
  createUsers,
  login,
} = require('../controllers/users')


router.route("/register").post(createUsers);
router.route("/login").post(login);
module.exports = router;
