// services/therapistService.js
const Therapist = require("../models/therapist");

// Create a new therapist
const createTherapist = async (data) => {
  const therapist = new Therapist(data);
  return await therapist.save();
};

// Get all therapists
const getAllTherapists = async () => {
  return await Therapist.find();
};

// Get therapist by ID
const getTherapistById = async (id) => {
  return await Therapist.findById(id);
};

// Update therapist by ID
const updateTherapist = async (id, updateData) => {
  return await Therapist.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete therapist by ID
const deleteTherapist = async (id) => {
  return await Therapist.findByIdAndDelete(id);
};

module.exports = {
  createTherapist,
  getAllTherapists,
  getTherapistById,
  updateTherapist,
  deleteTherapist,
};
