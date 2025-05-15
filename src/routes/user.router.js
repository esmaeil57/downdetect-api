const express = require("express");
const router = express.Router();
const User = require("../models/user");                    // ← import your model
const { authenticateToken } = require("../middlewares/auth-middleware");
const userController = require("../controller/user.controller");

// — GET current user profile (replaces your old “getUsers”)
router.get("/", authenticateToken, async (req, res) => {
  try {
    const user = await User
      .findById(req.user._id)
      .select("-password -confirmpassword");              // exclude sensitive fields

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // wrap in an object so Flutter can do response.data['user']
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
