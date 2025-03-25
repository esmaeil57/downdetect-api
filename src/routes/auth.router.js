const express = require("express");
const { login, refreshToken } = require("../controller/login");
const signupController = require("../controller/signup");

const router = express.Router();

router.post("/login", login);
router.post("/register", signupController.createUser);
router.post("/refresh", refreshToken);

module.exports = router;
