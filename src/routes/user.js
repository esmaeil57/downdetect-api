const express =require("express");
const userController =require ("../controller/user");
const authmiddleware =require ("../utils/authmiddleware");
const router =express.Router();

router.get("/users", authmiddleware.authenticateToken, userController.getUsers);
module.exports = router;