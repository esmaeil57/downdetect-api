const express = require("express");
const userController = require("../controller/user.controller");
const authmiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/", authmiddleware.authenticateToken, userController.getUsers);
// GET /users/me
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error in /users/me:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
