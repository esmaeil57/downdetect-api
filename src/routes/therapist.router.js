// routes/therapist.router.js
const express = require("express");
const router = express.Router();
const therapistController = require("../controller/therapist.controller");
const adminMiddleware = require("../middlewares/admin-middleware");

// Create
router.post("/",adminMiddleware ,therapistController.createTherapist);

// Read all
router.get("/", therapistController.getAllTherapists);

// Read one
router.get("/:id", therapistController.getTherapistById);

// Update
router.put("/:id",adminMiddleware ,therapistController.updateTherapist);

// Delete
router.delete("/:id",adminMiddleware ,therapistController.deleteTherapist);

module.exports = router;
