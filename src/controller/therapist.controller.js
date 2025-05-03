// controllers/therapistController.js
const therapistService = require("../services/therapist.service");

// Create therapist
const createTherapist = async (req, res) => {
  try {
    const therapist = await therapistService.createTherapist(req.body);
    res.status(201).json(therapist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all therapists
const getAllTherapists = async (req, res) => {
  try {
    const therapists = await therapistService.getAllTherapists();
    res.status(200).json(therapists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get therapist by ID
const getTherapistById = async (req, res) => {
  try {
    const therapist = await therapistService.getTherapistById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: "Therapist not found" });
    }
    res.status(200).json(therapist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update therapist
const updateTherapist = async (req, res) => {
  try {
    const therapist = await therapistService.updateTherapist(
      req.params.id,
      req.body
    );
    if (!therapist) {
      return res.status(404).json({ message: "Therapist not found" });
    }
    res.status(200).json(therapist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete therapist
const deleteTherapist = async (req, res) => {
  try {
    const therapist = await therapistService.deleteTherapist(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: "Therapist not found" });
    }
    res.status(200).json({ message: "Therapist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTherapist,
  getAllTherapists,
  getTherapistById,
  updateTherapist,
  deleteTherapist,
};
