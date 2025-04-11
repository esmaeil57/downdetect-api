const express = require("express");
const {
  login,
  refreshToken,
  createUser,
} = require("../controller/auth.controller");

const router = express.Router();

router.post("/login", login);
router.post("/register", createUser);
router.post("/refresh", refreshToken);

module.exports = router;
