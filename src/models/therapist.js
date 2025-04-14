const mongoose = require("../configration/db-config");

const therapistSchema = new mongoose.Schema({});

module.exports = new mongoose.model("Therapist", therapistSchema);