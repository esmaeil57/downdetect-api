const mongoose = require("../configration/db-config");

const therapistSchema = new mongoose.Schema({
  phonenumber: String,
  name: String,
  rate: String,
  location: String,
  availableSlots: String,
  gender: String,
});

const Therapist = mongoose.model("Therapist", therapistSchema);
module.exports = Therapist;