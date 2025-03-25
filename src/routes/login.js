const express = require("express");
const { login ,refreshToken } = require("../controller/login");

const router = express.Router();

router.post("/log", login);
router.post("/refresh", refreshToken);
module.exports = router;
