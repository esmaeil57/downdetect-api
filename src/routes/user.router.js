const express = require("express");
const userController = require("../controller/user");
const authmiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/", authmiddleware.authenticateToken, userController.getUsers);

module.exports = router;
