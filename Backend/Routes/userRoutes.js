const express = require("express");
const { newUser, login } = require("../Controllers/userController");

const router = express.Router();

router.route("/newuser").post(newUser);
router.route("/login").post(login);

module.exports = router;
